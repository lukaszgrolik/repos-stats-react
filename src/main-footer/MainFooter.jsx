import React from 'react';
import FAQBlock from './FAQBlock';
import CopyrightBlock from './CopyrightBlock';

class MainFooter extends React.Component {
  render() {
    return (
      <div>
        <FAQBlock />
        <CopyrightBlock />
      </div>
    );
  }
}

export default MainFooter;