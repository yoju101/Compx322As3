const core = require("cors");
const express = require("express");

const app = express();

app.use(core());
app.use(express.json());

//const port = 3001;
const path = require('path');

//set up the path for it to look at the html file in the public folder
//create an Express app that listens on port 3000. The
//Express app should serve static files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));
const PORT = '3000';
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
const events  = require('./resources/events.js');

// Routes for CRUD operations
//Create a new event and save it to the database.
app.post('/events', events.createEvent); 
//Get events by Name.
app.get('/events/name/:name', events.getEventByName); 
//Update event information by ID.
app.put('/events/:id', events.updateEventById); 
//Delete events by ID.
app.delete('/events/delete/:id', events.deleteEventById); 
//Delete all events from the database.
app.delete('/events/delete', events.deleteAllEvents); 
//Get a list of all events in the database.
app.get('/events', events.getAllEvents);
//Get events by ID.
app.get('/events/:id', events.getEventById);

