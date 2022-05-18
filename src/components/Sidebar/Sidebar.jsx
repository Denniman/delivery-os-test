import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Icon } from '../Icons';

import { Container, Title, LogoWrapper, LinkWrapper, SecondNavWrapper } from './Sidebar.style';

export const Sidebar = ({ firstRoutes, secondRoute, thirdRoutes }) => {
  const { pathname } = useLocation();
  return (
    <Container>
      <LogoWrapper>
        <div>
          <Icon name="send" />
        </div>
        <Title>FREIGHT</Title>
      </LogoWrapper>

      <LinkWrapper>
        {firstRoutes.map(({ icon, path, title, isActive }) => (
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
      <SecondNavWrapper>
        {secondRoute.map(({ icon, path, title, isActive }) => (
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
        {thirdRoutes.map(({ icon, path, title, isActive }) => (
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
    </Container>
  );
};

Sidebar.defaultProps = {
  firstRoutes: [
    {
      icon: 'vector',
      title: 'Dashboard',
      path: 'dashboard',
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
      path: 'bookings',
      isActive: `/bookings`,
    },
    {
      icon: 'shipment',
      title: 'Shipments',
      path: 'shipment',
      isActive: `/shipment`,
    },
    {
      icon: 'wallet',
      title: 'Trade Finance',
      path: 'trade',
      isActive: `/trade`,
    },
  ],

  secondRoute: [
    {
      icon: 'card',
      title: 'Billings',
      path: 'billings',
      isActive: `/billings`,
    },
    {
      icon: 'tag',
      title: 'Products',
      path: 'products',
      isActive: `/products`,
    },
    {
      icon: 'balance',
      title: 'Fixed Rates',
      path: 'rates',
      isActive: `/rates`,
    },
    {
      icon: 'user',
      title: 'Network',
      path: 'network',
      isActive: `/network`,
    },
    {
      icon: 'folder',
      title: 'Reports',
      path: 'reports',
      isActive: `/reports`,
    },
  ],
  thirdRoutes: [
    {
      icon: 'notification',
      title: 'Notifications',
      path: 'notifications',
      isActive: `/notifications`,
    },
    {
      icon: 'settings',
      title: 'Settings',
      path: 'settings',
      isActive: `/settings`,
    },
    {
      icon: 'support',
      title: 'Support',
      path: 'support',
      isActive: `/support`,
    },
  ],
};
