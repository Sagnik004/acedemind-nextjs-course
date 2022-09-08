import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventsPage = () => {
  const router = useRouter();
  const eventsList = getAllEvents();

  const handleEventsSearch = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onEventsSearch={handleEventsSearch} />
      <EventList items={eventsList} />
    </Fragment>
  );
};

export default AllEventsPage;
