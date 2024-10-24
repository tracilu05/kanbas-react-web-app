export default function AssignmentEditor() {
    return (

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
  