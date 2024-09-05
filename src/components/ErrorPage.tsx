import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5">
      <h1>404 - Not Found</h1>
      <p className="lead">There was a problem, try again later!</p>
      <NavLink to="/" className="btn btn-warning">
        Go Back
      </NavLink>
    </div>
  );
};

export default ErrorPage;
