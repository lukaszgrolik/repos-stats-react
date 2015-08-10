import React from 'react';

class FAQBlock extends React.Component {
  render() {
    let faq = [
      {
        question: 'Why the number of requests is limited?',
        answer: 'GitHub limits number of API requests to ' + 12345 + ' per hour.',
      },
      {
        question: 'Why the number of remaining requests does not decrease when I make requests?',
        answer: 'GitHub caches API calls. The cache for specific repository is being reset when this repository updates.',
      },
      {
        question: 'Why there is no search functionality for repositories?',
        answer: 'GitHub has separate limit for searching - it is only ' + 67890 + ' requests per hour, so I decided not to implement front-end search functionality for now. Thus, you have to enter repositories\' names manually.',
      },
    ];
    let faqItems = faq.map((item) => {
      return (
        <li>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {faqItems}
        </ul>
      </div>
    );
  }
}

export default FAQBlock;