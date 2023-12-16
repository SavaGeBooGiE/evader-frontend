import React from 'react';
import loadable from '@loadable/component';
import Head from 'next/head';

import Sidebar from '../../components/sidebar/sidebar';
import MainContentWrapper from '../../utils/main-content-wrapper';
import Redirect from '../../utils/redirector';
import Wrapper from '../../utils/sidebar-content-wrapper';
import EventsNavbar from '../../components/events-navbar/events-navbar';
import { useAuth } from '../../context/auth';
import { useSidebar } from '../../context/sidebar';

const AddEventButton = loadable(
  () => import('../../components/add-event-button/add-event-button')
);
const AddEventForm = loadable(
  () => import('../../components/add-event-form/add-event-form')
);
const CreatedEvents = loadable(
  () => import('../../components/created-events/created-events')
);
const InvitedEvents = loadable(
  () => import('../../components/invited-events/invited-events')
);

const EventsPage = () => {
  const [open, setOpen] = React.useState(false);
  const [choosen, setChoosen] = React.useState<string>('Created');
  const [filter, setFilter] = React.useState('upcoming');
  const { setActive } = useSidebar();
  const { token } = useAuth();

  const navItemClickHandler = (button: string) => {
    setChoosen(button);
  };

  const addClickHandler = () => {
    setOpen((prev) => !prev);
  };

  React.useEffect(() => {
    setActive('events');
  }, []);

  React.useEffect(() => {
    document.addEventListener('event_created', () => {
      setOpen(false);
    });
  }, []);

  let content = <Redirect to="/" />;
  if (token) {
    content = (
      <>
        <Wrapper>
          <Sidebar />
          <MainContentWrapper>
            {open ? (
              <AddEventForm />
            ) : (
              <>
                <EventsNavbar
                  choosen={choosen}
                  clickHandler={navItemClickHandler}
                  filter={filter}
                  changeFilterHandler={(val: string) => setFilter(val)}
                />
                {choosen === 'Created' ? (
                  <CreatedEvents filter={filter} />
                ) : (
                  <InvitedEvents filter={filter} />
                )}
              </>
            )}
            <AddEventButton clickHandler={addClickHandler} open={open} />
          </MainContentWrapper>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Events | Evader</title>
      </Head>
      {content}
    </>
  );
};

export default EventsPage;
