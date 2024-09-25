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


        <table>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label> {/* clicking this label */}
            </td>
            <td>
              <input id="wd-points" value={100} /> {/* selects this field */}
            </td>
          </tr>


          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label> {/* clicking this label */}
            </td>
            <td>
              <input id="wd-group" value={"ASSIGNMENTS"} /> {/* selects this field */}
            </td>
          </tr>
        </table>
      </div>
  );}
  