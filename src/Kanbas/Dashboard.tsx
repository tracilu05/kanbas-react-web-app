import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        {/*course 1 */} 
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 IS4300
              </h5>
              <p className="wd-dashboard-course-title">
                Human Computer Interaction
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS4550
              </h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 PSYCH2320
              </h5>
              <p className="wd-dashboard-course-title">
                Statistics of Psychological Research
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 PSYCH3466
              </h5>
              <p className="wd-dashboard-course-title">
                Cognition
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS3500
              </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/*course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS4973
              </h5>
              <p className="wd-dashboard-course-title">
                UI/UX Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
     
     
     
      </div>
    </div>
  );
}



