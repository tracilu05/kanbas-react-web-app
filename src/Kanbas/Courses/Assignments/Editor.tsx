export default function AssignmentEditor() {
    return (
      // <div id="wd-assignments-editor">

      //   <label htmlFor="wd-name">Assignment Name</label> {/* clicking this label */}
      //   <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> {/* selects this field */}
        
      //   <textarea id="wd-description">
      //     The assignment is available online Submit a link to the landing page of your Web Application running on netlify. 
      //     Make sure your deliverables include a link to your Github, Netlify, and all other relevant code repositories.
      //   </textarea>
      //   <br />
      //   <br />


      //   <table>

      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-points">Points</label> {/* clicking this label */}
      //       </td>
      //       <td>
      //         <input id="wd-points" value={100} /> {/* selects this field */}
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-group">Assignment Group</label> {/* clicking this label */}
      //       </td>
      //       <td>
      //       <select id="wd-group"> {/* selects this field */}
      //         <option selected value="assignments">
      //           ASSIGNMENTS</option>
      //         <option value="quizzes">QUIZZES</option>
      //         <option value="discussions">DISCUSSIONS</option>
      //       </select> 
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-display-grade-as">Display Grade as</label> {/* clicking this label */}
      //       </td>
      //       <td>
      //       <select id="wd-display-grade-as"> {/* selects this field */}
      //         <option selected value="PERCENTAGE">
      //           Percentage</option>
      //         <option value="POINTS">Points</option>
      //         <option value="DECIMAL">Decimal</option>
      //       </select> 
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-submission-type">Submission Type</label> {/* clicking this label */}
      //       </td>
      //       <td>
      //       <select id="wd-submission-type"> {/* selects this field */}
      //         <option selected value="ONLINE"> Online</option>
      //         <option value="PAPER">Paper</option>
      //       </select> 
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //       </td>
      //       <td>
      //         <label>Online Entry Options</label> <br /> {/* clicking this label */}  
      //         <input type="checkbox" name="text-entry" id="wd-text-entry"/>
      //         <label htmlFor="wd-text-entry">Text Entry</label><br/>

      //         <input type="checkbox" name="website-url" id="wd-website-url"/>
      //         <label htmlFor="wd-website-url">Website URL</label><br/>

      //         <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
      //         <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

      //         <input type="checkbox" name="student-annotation" id="	wd-student-annotation"/>
      //         <label htmlFor="	wd-student-annotation">Student Annotation</label><br />
              
      //         <input type="checkbox" name="file-upload" id="wd-file-upload"/>
      //         <label htmlFor="wd-file-upload">File Uploads</label>
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //       </td>
      //       <td>
      //         <label htmlFor="wd-assign-to">Assign To</label> <br /> {/* clicking this label */}
      //         <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //       </td>
      //       <td>
      //         <label htmlFor="wd-due-date"> Due </label> <br /> {/* clicking this label */}
      //         <input type="date"
      //         id="wd-due-date"
      //         value="2024-05-13"/><br/>{/* selects this field */}
      //       </td>
      //     </tr>
      //     <br />


      //     <tr>
      //       <td align="right" valign="top">
      //       </td>
      //       <td>           
      //         <label htmlFor="wd-available-from"> Available From </label> <label htmlFor="wd-available-until"> Until </label> <br /> {/* clicking this label */}
      //         <input type="date"
      //         id="wd-available-from"
      //         value="2024-05-06"/> {/* selects this field */}

      //         <input type="date"
      //         id="wd-available-until"
      //         value="2024-05-20"/> {/* selects this field */}
      //         <br/>
      //       </td>
      //     </tr>
      //     <br />

      //     <tr>
      //       <td align="right" valign="top">
      //       </td>
      //       <td>           
      //       <button id="wd-assignments-editor"> Cancel</button>
      //       <button id="wd-assignments-editor"> Save</button>

      //       </td>
      //     </tr>
      //     <br />


      //   </table>
      // </div>


      <div className="container" id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          value="A1 - ENV + HTML"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="wd-description"
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web Application running on Netlify. 
            Make sure your deliverables include a link to your Github, Netlify, and all other relevant code repositories."
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            type="number"
            className="form-control"
            id="wd-points"
            defaultValue={100}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
          <select className="form-control" id="wd-group">
            <option value="assignments" selected>
              ASSIGNMENTS
            </option>
            <option value="quizzes">QUIZZES</option>
            <option value="discussions">DISCUSSIONS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
          <select className="form-control" id="wd-display-grade-as">
            <option value="PERCENTAGE" selected>
              Percentage
            </option>
            <option value="POINTS">Points</option>
            <option value="DECIMAL">Decimal</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select className="form-control" id="wd-submission-type">
            <option value="ONLINE" selected>
              Online
            </option>
            <option value="PAPER">Paper</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label>Online Entry Options</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-text-entry"
          />
          <label className="form-check-label" htmlFor="wd-text-entry">
            Text Entry
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-website-url"
          />
          <label className="form-check-label" htmlFor="wd-website-url">
            Website URL
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-media-recordings"
          />
          <label className="form-check-label" htmlFor="wd-media-recordings">
            Media Recordings
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-file-upload"
          />
          <label className="form-check-label" htmlFor="wd-file-upload">
            File Uploads
          </label>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign To
          </label>
          <input
            type="text"
            className="form-control"
            id="wd-assign-to"
            defaultValue="Everyone"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="wd-due-date"
            defaultValue="2024-05-13"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input
            type="date"
            className="form-control"
            id="wd-available-from"
            defaultValue="2024-05-06"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input
            type="date"
            className="form-control"
            id="wd-available-until"
            defaultValue="2024-05-20"
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );}
  