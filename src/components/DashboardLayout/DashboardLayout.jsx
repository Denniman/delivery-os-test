import React from 'react';
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
        <DashboardContent></DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};
