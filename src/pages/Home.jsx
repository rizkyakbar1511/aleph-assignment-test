import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h4 className="title">
        Assignment <br /> Test
      </h4>
      <Link to="/answer-a" className="cta">
        See Answers
      </Link>
    </>
  );
};

export default Home;
