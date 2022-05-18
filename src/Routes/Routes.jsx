import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DashboardLayout } from '../components/DashboardLayout';
import { Home } from '../home';

import { Quotes } from '../pages/Quotes';

const RootRouteer = () => {
  <BrowserRouter>
    <Route path="/" element={<Home />}>
      <Route path="quotes" element={<Quotes />} />
    </Route>
  </BrowserRouter>;
};

export default RootRouteer;
