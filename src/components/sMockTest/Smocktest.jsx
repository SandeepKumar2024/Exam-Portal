import "./smocktext.css"
import { Link } from "react-router-dom";

const Smocktest = () => {
  return (
    <div className="smocktest">
      <div className="instruction">
        <h3>Read Carefully before go to next</h3>
        <ul>
          <li>Welcome to Online exam for JEE Exam</li>
          <li>Exam has Total 25 questions</li>
          <li>Total Time for Exam is 1 hour</li>
          <li>Negative Marking Exam : 0</li>
        </ul>
        <h4>Best of Luck for your Exam</h4>
      <hr />
      <Link className="link" to="/start/exam">
        <button>Start</button>
      </Link>

      </div>

    </div>
  );
};

export default Smocktest;
