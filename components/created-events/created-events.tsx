import React, { PropsWithChildren } from 'react';
import { Container, Row, Table } from 'reactstrap';

import { useEventsFetcher } from '../../services/events-fetcher-service';
import InlineSpinner from '../spinner/inline-spinner';
import NotFound from '../not-found/not-found';
import Event from './event-table-row';

import * as styles from './styles';

export default function CreatedEvents({
  filter,
}: PropsWithChildren<{ filter: string }>) {
  const { events, loading } = useEventsFetcher();
  const text = 'Nothing Found';

  let content = events.map((event) => {
    const upcoming = new Date(event.time).getTime() - new Date().getTime();

    if (
      (filter === 'upcoming' && upcoming >= 0) ||
      (filter === 'completed' && upcoming < 0)
    ) {
      return <Event key={event.id} event={event} />;
    }

    return null;
  });
  content = content.filter((event) => !!event);

  if (loading) {
    return <InlineSpinner />;
  }

  return (
    <Container fluid>
      <Row data-testid="created-events-container">
        <Table hover>
          <thead style={{ fontSize: '0.9rem' }}>
            <tr>
              <styles.ExpandHeading />
              <styles.Heading>Name</styles.Heading>
              <styles.TimeHeading>Timings</styles.TimeHeading>
              <styles.Heading />
              <styles.Heading />
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </Table>
      </Row>
      <Row>{content.length === 0 && <NotFound text={text} />}</Row>
    </Container>
  );
}
