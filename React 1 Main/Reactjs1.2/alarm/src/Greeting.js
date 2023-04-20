import React from 'react';

const Greeting = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting = '';

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 19) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Night';
  }

  return (
    <div>
      <h1 style={{color: 'blue'}}>Hello, {greeting}!</h1>
    </div>
  );
};

export default Greeting;
