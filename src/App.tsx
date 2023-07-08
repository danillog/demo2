import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/Store';

import Home from './components/Home/Home';
import Company from './components/Company/Company';
import Employee from './components/Employee/Employee';
import Admin from './components/Admin/Admin';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
