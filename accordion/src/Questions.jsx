/** @format */

import SingleQuestion from './SingleQuestion';

const Questions = ({ data, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((data) => {
        return (
          <SingleQuestion
            key={data.id}
            {...data}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
