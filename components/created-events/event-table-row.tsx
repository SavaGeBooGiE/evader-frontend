import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

import moment from 'moment';
import { FaExpand } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Button } from 'reactstrap';

import EventDeleterService from '../../services/event-deleter-service';
import EventEmitterService from '../../services/event-emitter-service';
import { EventType } from '../../types/types';
import firebase from '../../context/firebase';
import { useAuth } from '../../context/auth';

import * as styles from './styles';

const db = firebase.firestore();

export default function Row({
  event,
}: PropsWithChildren<{ event: EventType }>) {
  const [expand, setExpand] = React.useState(false);
  const { token } = useAuth();

  const expandTableHandler = () => {
    setExpand((prevExpand) => !prevExpand);
  };

  const deleteClickHandler = async (e: any, id: number, fireId: string) => {
    e.preventDefault();
    await EventDeleterService(id, token!);
    await db.collection('events').doc(fireId).delete();
    EventEmitterService('event_deleted', { id });
  };

  return (
    <>
      <tr>
        <styles.Expand style={{ width: '30px' }}>
          <styles.ExpandButton
            outline
            color="dark"
            open={expand}
            style={{ border: 'none', padding: '2px' }}
            onClick={expandTableHandler}
          >
            <IoIosArrowDropdown size="1.5rem" />
          </styles.ExpandButton>
        </styles.Expand>
        <td style={{ verticalAlign: 'middle' }}>
          <div>{event.name}</div>
        </td>
        <styles.Timings style={{ verticalAlign: 'middle' }}>
          <div>
            <styles.Date>{moment(event.time).format('ddd Do MMM')}</styles.Date>{' '}
            -{' '}
            <styles.Date>
              {moment(event.time).add(event.duration, 's').format('ddd Do MMM')}
            </styles.Date>
          </div>
          <div>
            <styles.Time>{moment(event.time).format('h:mm A')}</styles.Time> -{' '}
            <styles.Time>
              {moment(event.time).add(event.duration, 's').format('h:mm A')}
            </styles.Time>
          </div>
        </styles.Timings>
        <td style={{ verticalAlign: 'middle' }}>
          <Button
            outline
            color="danger"
            onClick={(e) => deleteClickHandler(e, event.id, event.fireId)}
            style={{ border: 'none', padding: '2px' }}
          >
            <RiDeleteBin6Fill size="1.5rem" />
          </Button>
        </td>
        <td style={{ verticalAlign: 'middle' }}>
          <Link href={`events/${event.id}`}>
            <a
              className="btn btn-outline-primary"
              style={{ border: 'none', padding: '2px' }}
            >
              <FaExpand size="1.5rem" />
            </a>
          </Link>
        </td>
      </tr>
      <styles.Expanded open={expand}>
        <td colSpan={4}>
          <div>
            <styles.Date>{moment(event.time).format('ddd Do MMM')}</styles.Date>{' '}
            -{' '}
            <styles.Date>
              {moment(event.time).add(event.duration, 's').format('ddd Do MMM')}
            </styles.Date>
          </div>
          <div>
            <styles.Time>{moment(event.time).format('h:mm A')}</styles.Time> -{' '}
            <styles.Time>
              {moment(event.time).add(event.duration, 's').format('h:mm A')}
            </styles.Time>
          </div>
        </td>
      </styles.Expanded>
    </>
  );
}
