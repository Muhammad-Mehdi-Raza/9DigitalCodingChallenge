var AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});

exports.handler = async (event) => {

    var input = event.body;
    var responseCode;           //variable for response Code
    var responseValue;          //variable for response
    const filteredShows = [];   //empty array for filtered shows


    try {
            //try to parse input JSON to check validity
            var parsedInput = JSON.parse(input);

            console.log("Valid JSON... Continue Processing.");

            // Handle non-exception-throwing cases like JSON.parse(1234)
            if (parsedInput && typeof parsedInput === "object") {

                //if parsed successfully, getting out the array of shows
                var shows = parsedInput.payload;

                //filtering shows based on the required criteria
                shows.forEach(show => {
                    if (show.drm && show.episodeCount > 0)
                    {
                        //getting required fields from the object
                        filteredShows.push({image: show.image.showImage, slug: show.slug, title: show.title});
                    }
                });

                //preparing response key
                const returnedShows = {
                    'response' : filteredShows
                };

                //setting statusCode and response for success
                responseCode = 200;
                responseValue = returnedShows;
            }
            else {
                //Handling special cases like JSON.parse(null)
                const error = {
                   'error' : 'Could not decode request: JSON parsing failed'
                  };

                //setting statusCode and response for error case
                responseCode = 400;
                responseValue = error;
            }
    }
    catch (e) {

        //preparing error key
        const error = {
            'error' : 'Could not decode request: JSON parsing failed'
        };

        //setting statusCode and response for error case
        responseCode = 400;
        responseValue = error;
    }
    finally{

        //preparing response object with appropriate statusCode and responseValue
        const response = {
            statusCode: responseCode,
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',             //required for enabling CORS
            'Access-Control-Allow-Methods': '*'
            },
            body: JSON.stringify(responseValue),
        };

        //sending out response
        return response;
    }
};
