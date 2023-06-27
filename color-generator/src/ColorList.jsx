/** @format */

import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
