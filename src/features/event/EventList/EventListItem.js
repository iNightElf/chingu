import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";
import EventListPerson from "./EventListPerson";

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhoto} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListPerson key={attendee.id} attendee={attendee} />
              ))}
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListPerson key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button as="a" color="google plus" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
