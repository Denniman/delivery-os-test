import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Navigation } from '../Navigation';

import { DashboardContainer, DashboardContentWrapper, DashboardContent } from './Layout.style';

export const Layout = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <DashboardContentWrapper>
        <Navigation />
        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};
