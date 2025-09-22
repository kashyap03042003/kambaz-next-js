'use client';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>Assignment Name</h3>
      <div>
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      </div>
      <br />

      <div>
        <label htmlFor="wd-description">Description</label><br />
        <textarea id="wd-description" cols={40} rows={10}>
          The assignment is available online Submit a
          link to the landing page of your Web
          application running on Netlify. The landing
          page should include the following: Your
          full name and section Links to each of the lab
          assignments Link to the Kanbas application
          Links to all relevant source code repositories
          The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
      </div>
      <br />

      <div>
        <label htmlFor="wd-points">Points</label><br />
        <input id="wd-points" defaultValue={100} />
      </div>
      <br />

      <div>
        <label htmlFor="wd-group">Assignment Group </label>
        <select id="wd-group">
          <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
        </select>
      </div>
      <br />

      <div>
        <label htmlFor="wd-display-grade-as">Display Grade as </label>
        <select id="wd-display-grade-as">
          <option value="Percentage" selected>Percentage</option>
        </select>
      </div>
      <br />

      <div>
        <label htmlFor="wd-submission-type">Submission Type </label>
        <select id="wd-submission-type">
          <option value="Online" selected>Online</option>
        </select>
      </div>

      <div>
        <p>Online Entry Options</p>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label><br/>

        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label><br/>

        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Uploads</label>
      </div>
      <br />

      <div>
        <label htmlFor="wd-assign-to">Assign to</label><br />
        <input id="wd-assign-to" defaultValue="Everyone" />
      </div>
      <br />

      <div>
        <label htmlFor="wd-due-date">Due</label><br />
        <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
      </div>
      <br />

      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <label htmlFor="wd-available-from">Available from</label><br />
          <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
        </div>
        <div>
          <label htmlFor="wd-available-until">Until</label><br />
          <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
        </div>
      </div>
      <br />

      <hr />
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}