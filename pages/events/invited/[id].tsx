import loadable from '@loadable/component';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

import Sidebar from '../../../components/sidebar/sidebar';
import MainContentWrapper from '../../../utils/main-content-wrapper';
import Redirect from '../../../utils/redirector';
import Wrapper from '../../../utils/sidebar-content-wrapper';
import { useAuth } from '../../../context/auth';
import useEventInvitedFetcher from '../../../services/event-invited-fetcher';

const EventOverview = loadable(
  () => import('../../../components/event-overview/event-overview')
);
const EventNavbar = loadable(
  () => import('../../../components/event-navbar/event-navbar')
);
const Guests = loadable(() => import('../../../components/guests/guests'));

export default function InvitedEventPage() {
  const [active, setActive] = React.useState<string>('overview');
  const { token } = useAuth();
  const router = useRouter();
  const id = router.query.id as string;
  const { event, error } = useEventInvitedFetcher(id);

  const fields = ['overview', 'guests'];

  const changeActiveHandler = (newActive: string) => {
    setActive(newActive);
  };

  let content = <Redirect to="/" />;
  if (token && !error) {
    content = (
      <>
        <Head>
          <title>{event.name} | Evader</title>
        </Head>
        <Wrapper>
          <Sidebar />
          <MainContentWrapper color="#e6e6e6">
            <EventNavbar
              fields={fields}
              active={active}
              changeActive={changeActiveHandler}
            />
            {active === 'overview' ? (
              <EventOverview fetchedEvent={event} />
            ) : null}
            {active === 'guests' ? (
              <Guests eventId={id} creator={false} />
            ) : null}
          </MainContentWrapper>
        </Wrapper>
      </>
    );
  }

  return content;
}
