##Node Express jQuery Code Challenge

### Objectives
- (completed) Set up server side routes to handle requests in a node/express application.
- (completed) Send requests to the server using ajax in the client side script.
- (completed) Display response on the DOM.
- (completed) Gather input from client side and save this data on the server.
- (completed) Demonstrate the separation of logic between the client and the server.

### The Joke Book

Your client has asked you to create a Joke Book application. The server will contain all the current joke data and you have been provided with the initial server file (`server/app.js`).

Your job will be to build up the server around the data in the `server/app.js` file, display the current jokes to the DOM, and add the ability for users to add their own jokes and display these too.

#####How the joke data is structured
You can view the full object in `server/app.js`. The data structure is an array of objects. These objects have three properties:
1. (completed) whoseJoke
2. (completed) jokeQuestion
3. (completed) punchLine

```
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  }]
```

To get started, fork this repo and clone it to your machine.

### Reminder

Focus on getting the app up and running first. You can come back and clean things up later if you have time.
