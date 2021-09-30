# 9DigitalCodingChallenge
This project is done as a coding challenge for 9 Digital.

Description:
Welcome to the 9Digital Coding Challenge! To complete this challenge, you will need to write and deploy a small JSON-based web service, and provide us the URL to your solution. Note: as this is also an exercise in set-up and deployment, please don't solve this by adding an endpoint to an existing app or service. Your service should be standalone and deployed at a root path e.g. http://myservice.somedomain.com/

You can take as long as you need to submit your solution. We expect fully developed and tested production quality code. Please think about testing, adding a README and other artifacts that would be expected of a professional, production-ready solution.

The challenge:
We'll post some JSON data to the URL you provide. You'll need to filter that JSON data and return a few fields. Here's an example request and an example response.

Details:
From the list of shows in the request payload, return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

The returned JSON should have a response key with an array of shows. Each element should have the following fields from the request:
image - corresponding to image/showImage from the request payload
slug
title

Error Handling
If we send invalid JSON, You'll need to return a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request. 

For example:
{
    "error": "Could not decode request: JSON parsing failed"
}

Results
To submit your solution via the form below you will need a browser with JavaScript enabled.
You can submit multiple times. If the URL doesn't behave as we expect, we'll return the errors and give you a chance to fix it.

Once you pass the tests you will receive an automated success email from us with additional instructions on how to share your source code.

Project Details:

Language: Node.js

Test Data:
Test Data is available in two files:
- valid.json file contains valid test data
- invalid.json file contains invalid test data

Testing Procedure:
- Test using Terminal on valid data using following command:
curl -d "@valid.json" -H "Content-Type: application/json" -X POST https://pv2zdxw6uh.execute-api.us-east-1.amazonaws.com/Prod/
- Test using Terminal on invalid data using following command:
curl -d "@invalid.json" -H "Content-Type: application/json" -X POST https://pv2zdxw6uh.execute-api.us-east-1.amazonaws.com/Prod/
