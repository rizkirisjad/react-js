/** @format */

const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name">name</label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="conrad"
        />
      </div>
      <div className="form-row">
        <label htmlFor="last name">lastName</label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="conrad"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">email</label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};
export default Newsletter;
