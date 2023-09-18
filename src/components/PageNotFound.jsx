import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="fc page-not-found">
      <h1>Page Not Found</h1>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
