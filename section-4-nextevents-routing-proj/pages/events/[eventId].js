import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  const eventDetails = getEventById(eventId);
  if (!eventDetails) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/">Back to Home</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={eventDetails.title} />
      <EventLogistics
        date={eventDetails.date}
        address={eventDetails.location}
        image={eventDetails.image}
        imageAlt={eventDetails.title}
      />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
