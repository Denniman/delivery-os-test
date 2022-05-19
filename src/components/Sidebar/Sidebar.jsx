import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Icon } from '../Icons';

import {
  Title,
  Divider,
  Container,
  LogoWrapper,
  LinkWrapper,
  BottomWrapper,
  SecondNavWrapper,
} from './Sidebar.style';

export const Sidebar = ({ routes }) => {
  const { pathname } = useLocation();
  return (
    <Container>
      <LinkWrapper>
        <LogoWrapper>
          <div>
            <Icon name="send" />
          </div>
          <Title>FREIGHT</Title>
        </LogoWrapper>

        {routes.slice(0, 5).map(({ icon, path, title, isActive }) => (
          <NavLink to={path} className="link" key={title}>
            <span
              className={`${
                pathname === isActive ? 'link__active' : 'link__unselected'
              } link__path`}
            >
              <Icon name={icon} color={pathname === isActive ? '#0746A6' : null} />
              {title}
            </span>
          </NavLink>
        ))}
      </LinkWrapper>
      <Divider />
      <SecondNavWrapper>
        {routes.slice(5, 10).map(({ icon, path, title, isActive }) => (
          <NavLink to={path} className="link" key={title}>
            <span
              className={`${
                pathname === isActive ? 'link__active' : 'link__unselected'
              } link__path`}
            >
              <Icon name={icon} color={pathname === isActive ? '#0746A6' : null} />
              {title}
            </span>
          </NavLink>
        ))}
      </SecondNavWrapper>
      <div>
        {routes.slice(10).map(({ icon, path, title, isActive }) => (
          <NavLink to={path} className="link" key={title}>
            <span
              className={`${
                pathname === isActive ? 'link__active' : 'link__unselected'
              } link__path`}
            >
              <Icon name={icon} color={pathname === isActive ? '#0746A6' : null} />
              {title}
            </span>
          </NavLink>
        ))}
      </div>
      <BottomWrapper>
        <div>
          <Icon name="Uk-logo" />
        </div>
        <div className="text--wrapper ml">
          <p className="bottom--header ">Mati Industries</p>
          <p>Lanremati@gmail.com</p>
        </div>
        <div className="ml">
          <Icon name="chevron" />
        </div>
      </BottomWrapper>
    </Container>
  );
};

Sidebar.defaultProps = {
  routes: [
    {
      icon: 'vector',
      title: 'Dashboard',
      path: 'quotes',
      isActive: `/dashboard`,
    },
    {
      icon: 'quotes',
      title: 'Quotes',
      path: 'quotes',
      isActive: `/quotes`,
    },
    {
      icon: 'booking',
      title: 'Bookings',
      path: 'quotes',
      isActive: `/bookings`,
    },
    {
      icon: 'shipment',
      title: 'Shipments',
      path: 'quotes',
      isActive: `/shipment`,
    },
    {
      icon: 'wallet',
      title: 'Trade Finance',
      path: 'quotes',
      isActive: `/trade`,
    },
    {
      icon: 'card',
      title: 'Billings',
      path: 'quotes',
      isActive: `/billings`,
    },
    {
      icon: 'tag',
      title: 'Products',
      path: 'quotes',
      isActive: `/products`,
    },
    {
      icon: 'balance',
      title: 'Fixed Rates',
      path: 'quotes',
      isActive: `/rates`,
    },
    {
      icon: 'user',
      title: 'Network',
      path: 'quotes',
      isActive: `/network`,
    },
    {
      icon: 'folder',
      title: 'Reports',
      path: 'quotes',
      isActive: `/reports`,
    },
    {
      icon: 'notification',
      title: 'Notifications',
      path: 'quotes',
      isActive: `/notifications`,
    },
    {
      icon: 'settings',
      title: 'Settings',
      path: 'quotes',
      isActive: `/settings`,
    },
    {
      icon: 'support',
      title: 'Support',
      path: 'quotes',
      isActive: `/support`,
    },
  ],
};
