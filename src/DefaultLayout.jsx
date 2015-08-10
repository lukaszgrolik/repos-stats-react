import React from 'react';
import MainHeader from './main-header/MainHeader';
import MainContent from './MainContent';
import MainFooter from './main-footer/MainFooter';
import SearchService from './main-header/SearchService';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainContent data={SearchService.repos} />
        <MainFooter />
      </div>
    );
  }
}

export default DefaultLayout;