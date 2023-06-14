/** @format */

import { useState } from 'react';
import people from './data';
import { FaBeer } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  return <h2>Reviews Starter</h2>;
};
export default App;
