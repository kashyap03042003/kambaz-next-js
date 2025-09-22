export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select>
        <option value="all">Publish All:</option>
        <option value="selected">Selected Courses</option>
        <option value="none">None</option>
      </select>
      <button>+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
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
                <li className="wd-content-item">Full Stack Developer - Chapter 1: Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2: Creating Us</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Chapter 2: Formatting Web content with Headings and Paragraphs</li>
                <li className="wd-content-item">Chapter 3: Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2 - CSS Basics and Styling</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Learn CSS selectors and properties</li>
                <li className="wd-content-item">Chapter 2: Understand layout techniques: Flexbox and Grid</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Style a personal portfolio webpage</li>
                <li className="wd-content-item">Chapter 2: Apply responsive design techniques</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: CSS Fundamentals</li>
                <li className="wd-content-item">Chapter 2: Advanced CSS Layouts</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3 - JavaScript Fundamentals</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Understand variables, data types, and operators</li>
                <li className="wd-content-item">Chapter 2: Learn control flow: loops and conditionals</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">PRACTICE</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Build a simple calculator with JavaScript</li>
                <li className="wd-content-item">Chapter 2: Create an interactive to-do list app</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: JavaScript Basics</li>
                <li className="wd-content-item">Chapter 2: Functions and Events</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
