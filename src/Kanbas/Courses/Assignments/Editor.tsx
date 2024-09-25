export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">

        <label htmlFor="wd-name">Assignment Name</label> {/* clicking this label */}
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> {/* selects this field */}
        
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web Application running on netlify. 
          Make sure your deliverables include a link to your Github, Netlify, and all other relevant code repositories.
        </textarea>
        <br />
        <br />


        <table>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label> {/* clicking this label */}
            </td>
            <td>
              <input id="wd-points" value={100} /> {/* selects this field */}
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label> {/* clicking this label */}
            </td>
            <td>
            <select id="wd-group"> {/* selects this field */}
              <option selected value="assignments">
                ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="discussions">DISCUSSIONS</option>
            </select> 
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label> {/* clicking this label */}
            </td>
            <td>
            <select id="wd-display-grade-as"> {/* selects this field */}
              <option selected value="PERCENTAGE">
                Percentage</option>
              <option value="POINTS">Points</option>
              <option value="DECIMAL">Decimal</option>
            </select> 
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label> {/* clicking this label */}
            </td>
            <td>
            <select id="wd-submission-type"> {/* selects this field */}
              <option selected value="ONLINE"> Online</option>
              <option value="PAPER">Paper</option>
            </select> 
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label>Online Entry Options</label> <br /> {/* clicking this label */}  
              <input type="checkbox" name="text-entry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="website-url" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="student-annotation" id="	wd-student-annotation"/>
              <label htmlFor="	wd-student-annotation">Student Annotation</label><br />
              
              <input type="checkbox" name="file-upload" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign To</label> <br /> {/* clicking this label */}
              <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label htmlFor="wd-due-date"> Due </label> <br /> {/* clicking this label */}
              <input type="date"
              id="wd-due-date"
              value="2024-05-13"/><br/>{/* selects this field */}
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
            </td>
            <td>           
              <label htmlFor="wd-available-from"> Available From </label> <label htmlFor="wd-available-until"> Until </label> <br /> {/* clicking this label */}
              <input type="date"
              id="wd-available-from"
              value="2024-05-06"/> {/* selects this field */}

              <input type="date"
              id="wd-available-until"
              value="2024-05-20"/> {/* selects this field */}
              <br/>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
            </td>
            <td>           
            <button id="wd-assignments-editor"> Cancel</button>
            <button id="wd-assignments-editor"> Save</button>

            </td>
          </tr>
          <br />


        </table>
      </div>
  );}
  