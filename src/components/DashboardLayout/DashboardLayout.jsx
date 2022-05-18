import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Navigation } from '../Navigation';

import {
  DashboardContainer,
  DashboardContentWrapper,
  DashboardContent,
} from './DashboardLayout.style';

export const DashboardLayout = () => {
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
