import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HelpCenter from './pages/helpCenter/HelpCenter';
import Main from './pages/Main';
import GlobalStyle from './GlobalStyle';
import CommonLayout from './layouts/CommonLayout';
import Navigation from './components/Layout/Navigation';
import Notice from './pages/helpCenter/Notice';

const App: FC = () => {
  return (
    <CommonLayout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/helpcenter/faq" element={<HelpCenter />} />
        <Route path="/helpcenter/notice" element={<Notice />} />
        <Route path="/helpcenter/policy" element={<Notice />} />
      </Routes>
    </CommonLayout>
  );
};

export default App;
