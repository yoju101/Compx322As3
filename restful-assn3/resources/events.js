//events.js file should require the database connection
const { request, response } = require("express");
const db = require("../db.js");
//define the event model and handler functions
const Event = function (data) {
  //this.id = data.id;
  this.name = data.name;
  this.description = data.description;
  this.startdate = data.startdate;
  this.enddate = data.enddate;
};

//Get a list of all events in the database.
module.exports.getAllEvents = (request, response) => {
  db.query("Select * from events ", (error, results) => {
    if (error) {
        response.status(500).send('An error occurred');
    } else {
        if (results.length === 0) {
            response.status(404).send('404: Event not Found');
        } else {
            response.send(results);
        }
    }
});
};

//Get events by ID.
module.exports.getEventById = (request, response) => {
    db.query(
        'SELECT * FROM events WHERE id = ?',
        request.params.id,
        (error, results) => {
            if (error) {
                response.status(500).send('An error occurred');
            } else {
                if (results.length === 0) {
                    response.status(404).send('404: Event not Found');
                } else {
                    response.send(results[0]);
                }
            }
        }
    );
};
 
// Get events by Name
module.exports.getEventByName = (request, response) => {
    const eventName = request.params.name;
    db.query('SELECT * FROM events WHERE name = ?', eventName, (error, results) => {
        if (error) {
            response.status(500).send('An error occurred');
        } else {
            if(results.length === 0 ){
                response.status(404).send('An error happened when trying to find the data ')
            }else{
                response.send(results);
            }   
        }
    });
};
//Delete event by ID
module.exports.deleteEventById = (request, response) => {
    const eventid = request.params.id;
    db.query('DELETE FROM events WHERE id = ?', eventid, (error, results) => {
        if (error) {
            response.status(500).send('An error occurred');
        } else {
            if(results.length === 0 ){
                response.status(404).send('An error happened when trying to find the data ')
            }else{
                response.send(results);
            }   
        }
    });
};

//Delete all entries from events table
module.exports.deleteAllEvents = (request, response) => {
    db.query('DELETE FROM events', (error, results) => {
        if (error) {
            response.status(500).send('An error occurred');
        } else {
            if(results.length === 0 ){
                response.status(404).send('An error happened when trying to find the data ')
            }else{
                response.send(results);
            }
        }
    });
};

// Create a new event
module.exports.createEvent = (request, response) => {
    if(!request.body){
        response.status(400).send('Content Cannot be empty');
    }
    const eventDataNew = request.body;
        db.query('INSERT INTO events SET ?', eventDataNew, (error, results) => {
        if (error) {
            response.status(500).send('Error creating event');
        } else {
            response.status(201).send('Event created successfully');
        }
    });
};

// Update event information by ID
module.exports.updateEventById = (request, response) => {
    const eventId = request.params.id;
    const eventData = request.body; // assuming the request body contains updated event data
    db.query('UPDATE events SET ? WHERE id = ?', [eventData, eventId], (error, result) => {
        if (error) {
            response.status(500).send('Error creating event');
        } else {
            response.status(201).send('Event created successfully');
        }
    });
};
