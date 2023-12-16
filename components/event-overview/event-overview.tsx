import loadable from '@loadable/component';
import React, { PropsWithChildren } from 'react';
import { Container, Row } from 'reactstrap';

import { EventType } from '../../types/types';

import * as styles from './styles';

const EventOverviewDetails = loadable(() => import('./event-overview-details'));
const EventOverviewLocation = loadable(
  () => import('./event-overview-location')
);
const EventOverviewDate = loadable(() => import('./event-overview-date'));
const EventOverviewInvitedBy = loadable(
  () => import('./event-overview-invited-by')
);
const EventOverviewStatus = loadable(() => import('./event-overview-status'));

export default function EventOverview({
  fetchedEvent,
}: PropsWithChildren<{ fetchedEvent: EventType }>) {
  return (
    <Container fluid style={{ padding: '15px' }}>
      <Row>
        <styles.Column xs="12">
          <EventOverviewDetails
            name={fetchedEvent.name}
            fireId={fetchedEvent.fireId}
            description={fetchedEvent.description}
          />
        </styles.Column>
        {fetchedEvent.invitedBy ? (
          <>
            <styles.Column xs="12" sm="6">
              <EventOverviewInvitedBy invitedBy={fetchedEvent.invitedBy} />
            </styles.Column>
            <styles.Column xs="12" sm="6">
              <EventOverviewStatus
                status={fetchedEvent.status!}
                dateTime={fetchedEvent.time}
                id={fetchedEvent.id}
              />
            </styles.Column>
          </>
        ) : null}
        <styles.Column xs="12" sm="6">
          <EventOverviewLocation venue={fetchedEvent.venue} />
        </styles.Column>
        <styles.Column xs="12" sm="6">
          <EventOverviewDate
            venue={fetchedEvent.venue}
            time={fetchedEvent.time}
            name={fetchedEvent.name}
            description={fetchedEvent.description}
            duration={fetchedEvent.duration}
          />
        </styles.Column>
      </Row>
    </Container>
  );
}
