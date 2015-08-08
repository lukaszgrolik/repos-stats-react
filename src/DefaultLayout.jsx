import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

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