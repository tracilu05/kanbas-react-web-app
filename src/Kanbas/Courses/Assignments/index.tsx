
import PercentControlButton from "./PercentControlButton";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Assignments() {
    return (

<div id = "wd-assignments">


  

<div className="mb-3 d-flex ">
      <div className="input-group w-auto">
        <span className="input-group-text" id="search-addon">
          <FaSearch />
        </span>
        <input
          type="email"
          className="form-control"
          id="wd-search"
          placeholder="Search for..."
          style={{ width: "200px" }}
        />
      </div>

      <div className = "ms-auto d-flex"> 
      <button id="wd-assignment-group" className="btn btn-lg btn-secondary w-auto"
          type="button" data-bs-toggle="button">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger ms-auto">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        </div>


      </div>


<div>
  <ul id="wd-assignment-list" className="list-group rounded-0">
    <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
         ASSIGNMENTS
         <PercentControlButton />
         </div>


      <ul className="wd-assignment list-group rounded-0">
        <li className="wd-assignment list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <Link to="/Assignments/Editor" >
          A1
        </Link>
          <AssignmentControlButtons />
          <h6>
             <br /> Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
           <br /> <b>Due</b> May 13 at 11:59 pm | 100 pts
           </h6>
          </li>


        <li className="wd-assignment list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          A2
          <AssignmentControlButtons />

          <h6>
             <br /> Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
            <br /> <b>Due</b> May 20 at 11:59 pm | 100 pts
          </h6>
          </li>
        <li className="wd-assignment list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          A3
          <AssignmentControlButtons />
          <h6>
                <br /> Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
                 <br /> <b>Due</b> May 27 at 11:59 pm | 100 pts
          </h6>
          </li>
      </ul>
    </li>

  </ul> 
  
  </div>


  </div>






  );}
  