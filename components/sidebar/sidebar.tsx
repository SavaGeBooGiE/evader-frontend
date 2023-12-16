/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import loadable from '@loadable/component';

import { useSidebar } from '../../context/sidebar';

import classes from './sidebar.module.scss';

const SidebarLogout = loadable(() => import('./sidebar-logout'));
const SidebarEvents = loadable(() => import('./sidebar-events'));
const SidebarHome = loadable(() => import('./sidebar-home'));

export default function Sidebar() {
  const { expand, active } = useSidebar();

  const sidebarContainerClasses = [classes.sidebar_container];
  if (expand) {
    sidebarContainerClasses.push(classes.sidebar_expand);
  } else {
    sidebarContainerClasses.push(classes.sidebar_collapse);
  }

  return (
    <div className={sidebarContainerClasses.join(' ')}>
      <ul
        className={[
          'd-flex flex-column align-items-center',
          'list-group',
          classes.sidebar_list,
        ].join(' ')}
      >
        <li
          className={[
            'list-group-item',
            'd-flex justify-content-center align-items-center',
            classes.sidebar_list_item,
          ].join(' ')}
        >
          <SidebarHome expand={expand} active={active} />
        </li>
        <li
          className={[
            'list-group-item',
            'd-flex justify-content-center align-items-center',
            classes.sidebar_list_item,
          ].join(' ')}
        >
          <SidebarEvents expand={expand} active={active} />
        </li>
        <li
          className={[
            'list-group-item',
            'd-flex justify-content-center align-items-center',
            classes.sidebar_list_item,
          ].join(' ')}
        >
          <SidebarLogout expand={expand} />
        </li>
      </ul>
    </div>
  );
}
