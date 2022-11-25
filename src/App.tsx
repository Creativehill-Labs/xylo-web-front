import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HelpCenter from './pages/helpCenter/HelpCenter';
import Main from './pages/Main';
import GlobalStyle from './GlobalStyle';
import CommonLayout from './layouts/CommonLayout';
import Notice from './pages/helpCenter/Notice';
import NoticeDetail from './pages/helpCenter/NoticeDetail';
import Policy from './pages/helpCenter/Policy';
import Submit from './pages/helpCenter/Submit';
import SearchResults from './pages/helpCenter/SearchResults';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <CommonLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/helpcenter/faq" element={<HelpCenter />} />
          <Route path="/helpcenter/notice" element={<Notice />} />
          <Route
            path="/helpcenter/notice/promoted/:id"
            element={<NoticeDetail />}
          />
          <Route path="/helpcenter/policy" element={<Policy />} />
          <Route path="/helpcenter/submit" element={<Submit />} />
          <Route path="/helpcenter/search" element={<SearchResults />} />
        </Routes>
      </CommonLayout>
    </>
  );
};

export default App;
