/** @format */

const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
