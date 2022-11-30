import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HelpCenter from './pages/helpCenter/HelpCenter';
import Main from './pages/Main';
import GlobalStyle from './GlobalStyle';
import CommonLayout from './layouts/CommonLayout';
import Notice from './pages/helpCenter/Notice';
import ArticleDetail from './pages/helpCenter/ArticleDetail';
import Policy from './pages/helpCenter/Policy';
import Submit from './pages/helpCenter/Submit';
import SearchResults from './pages/helpCenter/SearchResults';
import ArticleList from './pages/helpCenter/ArticleList';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <CommonLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/helpcenter/faq" element={<HelpCenter />} />
          <Route path="/helpcenter/notice" element={<Notice />} />
          <Route path="/helpcenter/policy" element={<Policy />} />
          <Route path="/helpcenter/submit" element={<Submit />} />
          <Route path="/helpcenter/search" element={<SearchResults />} />
          {/* list page */}
          {[
            `/helpcenter/faq/account`,
            `/helpcenter/faq/wallet`,
            `/helpcenter/faq/pool`,
            `/helpcenter/faq/delegate`,
            `/helpcenter/faq/owner`,
            `/helpcenter/faq/proposal`,
            `/helpcenter/faq/vote`,
            `/helpcenter/faq/reward`,
            `/helpcenter/faq/products`,
            `/helpcenter/notice/promoted`,
            `/helpcenter/notice/article`,
            `/helpcenter/policy/policy`,
          ].map((path) => (
            <Route path={path} key={path} element={<ArticleList />} />
          ))}
          {/* detail page */}
          {[
            `/helpcenter/faq/account/:id`,
            `/helpcenter/faq/wallet/:id`,
            `/helpcenter/faq/pool/:id`,
            `/helpcenter/faq/delegate/:id`,
            `/helpcenter/faq/owner/:id`,
            `/helpcenter/faq/proposal/:id`,
            `/helpcenter/faq/vote/:id`,
            `/helpcenter/faq/reward/:id`,
            `/helpcenter/faq/products/:id`,
            `/helpcenter/notice/promoted/:id`,
            `/helpcenter/notice/article/:id`,
            `/helpcenter/policy/policy/:id`,
          ].map((path) => (
            <Route path={path} key={path} element={<ArticleDetail />} />
          ))}
        </Routes>
      </CommonLayout>
    </>
  );
};

export default App;
