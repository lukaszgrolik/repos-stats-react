import React from 'react';
import MainHeader from './main-header/MainHeader';
import MainContent from './MainContent';
import MainFooter from './main-footer/MainFooter';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainContent />
        <MainFooter />
      </div>
    );
  }
}

export default DefaultLayout;