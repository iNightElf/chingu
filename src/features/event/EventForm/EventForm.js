import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    events: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state.events);
  };

  onInputChange = e => {
    const newEvent = this.state.events;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      events: newEvent
    });
  };
  render() {
    const { handleClose } = this.props;
    const { events } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={events.title}
              placeholder="First Name"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={events.date}
              type="date"
              placeholder="Event Date"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={events.city}
              name="city"
              placeholder="City event is taking place"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={events.venue}
              name="venue"
              placeholder="Enter the Venue of the event"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={events.hostedBy}
              placeholder="Enter the name of person hosting"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleClose} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
