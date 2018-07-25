# node_facebook_passportjs
Node.js using passport js for loging in from facebook.

This is also an example of making HTTP and HTTPS localhost using node.js

Install all dependencies using command:
```
npm i
```

Before running the project make sure that you configure Faceook AppID and AppSecret and configure the https certificate for localhost and run the project using the:
```
npm start
```

# Configuring the https key file

Note: before running the app install the certificate by importing:
```
etc/rootCA.key
```
First go to you Mac Keychain > Click on Certificates > Click File Menu > Click Import Item > Select the rootCA.key file from the "etc" folder of this project > Double Click the newly imported certificate and in the Trust > Choose When using the certificate Always Allow.

That way your https will work on localhost (https://localhost:3000)

Hamed Rohani