import { Link } from "react-router-dom";
import "./subjectWiseCard.css";

const SubjectWiseCard = () => {
  return (
    <div className="subject">
      <div className="conterSub">
        <img
          src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="content">
          <div className="conSpan">
            <span>Subject:</span>
            <span>Physics</span>
          </div>
          <div className="conSpan">
            <span>Time:</span>
            <span>1hour</span>
          </div>
          <div className="conSpan">
            <span>Marks: </span>
            <span>45</span>
          </div>
        </div>
       <Link to= "/jee/sub/mocktest" className="link"> <button>Start</button></Link>
      </div>
    </div>
  );
};

export default SubjectWiseCard;
