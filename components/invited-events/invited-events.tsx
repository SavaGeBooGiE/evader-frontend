import React, { PropsWithChildren } from 'react';
import { Container, Row, Table } from 'reactstrap';

import Event from './event-table-row';
import useInvitedEventsFetcher from '../../services/fetch-invited-events-service';
import NotFound from '../not-found/not-found';

import * as styles from './styles';

export default function InvitedEvents({
  filter,
}: PropsWithChildren<{ filter: string }>) {
  const invitedEvents = useInvitedEventsFetcher();
  const text = 'Nothing Found';

  let content = invitedEvents.map((event) => {
    const upcoming = new Date(event.time).getTime() - new Date().getTime();

    if (
      (filter === 'upcoming' && upcoming >= 0) ||
      (filter === 'completed' && upcoming < 0)
    ) {
      return <Event event={event} key={event.id} />;
    }

    return null;
  });
  content = content.filter((event) => !!event);

  return (
    <Container fluid>
      <Row>
        <Table hover>
          <thead style={{ fontSize: '0.9rem' }}>
            <tr>
              <styles.ExpandHeading />
              <styles.Heading>Name</styles.Heading>
              <styles.TimeHeading>Timings</styles.TimeHeading>
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
