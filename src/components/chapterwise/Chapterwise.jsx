import "./chapter.css";
import SubjectWiseCard from "../subjectWiseCard/SubjectWiseCard";

const Chapterwise = () => {
  return (
    <div className="chapter">
      <div className="chapterCont">
        <div className="heading">
          <h1>Subject wise Test</h1>
          <select name="" id="">
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="math">Mathmatices</option>
          </select>
        </div>
        <div className="subjectDiv">
          <SubjectWiseCard />
          <SubjectWiseCard />
          <SubjectWiseCard />
        </div>
      </div>
    </div>
  );
};

export default Chapterwise;
