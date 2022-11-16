import * as React from 'react';

function getTitle(title) {
  return title;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

function App() {
  return (
    <div>
      <h1>Hello  {getTitle('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <ul>
        {days.map((day) => {
          return <li>{day}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
