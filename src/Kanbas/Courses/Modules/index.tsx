export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button>Collapse All</button> <button>View Progress</button>  
        
        <select id="wd-modules">
        <option value="PUBLISHONE">Publish One</option>
        <option selected value="PUBLISHALL"> Publish All</option>
        </select>
        <button>+ Module</button>
        
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">

              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 -Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 -Creating User Interfaces</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Dev</li>
                  <li className="wd-content-item">Creating HTTPs Servers</li>
                </ul>
              </li>

            </ul>
          </li>

          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">

              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Web Styling</li>
                  <li className="wd-content-item">Creating GitHub Accounts</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 3 -Styling Tips</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 4 -CSS Coding</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Styling Tips</li>
                  <li className="wd-content-item">Introduction to CSS</li>
                </ul>
              </li>

            </ul>
          </li>


        </ul>
      </div>
  );}
  