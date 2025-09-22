import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
          <br />
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
          <br />
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>
      </ul>

      <h3 id="wd-quizzes-title">
        QUIZZES 20% of Total <button>+</button>
      </h3>
      <ul id="wd-quiz-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Quizzes/201" className="wd-assignment-link">
            Quiz 1 - HTML & CSS
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 10 at 12:00am |
          <br />
          <b>Due</b> May 12 at 11:59pm | 50 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Quizzes/202" className="wd-assignment-link">
            Quiz 2 - JavaScript Basics
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 17 at 12:00am |
          <br />
          <b>Due</b> May 19 at 11:59pm | 50 pts
        </li>
      </ul>

      <h3 id="wd-exams-title">
        EXAMS 25% of Total <button>+</button>
      </h3>
      <ul id="wd-exam-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Exams/301" className="wd-assignment-link">
            Midterm Exam
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 22 at 12:00am |
          <br />
          <b>Due</b> May 23 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Exams/302" className="wd-assignment-link">
            Final Exam
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 29 at 12:00am |
          <br />
          <b>Due</b> June 1 at 11:59pm | 150 pts
        </li>
      </ul>

      <h3 id="wd-projects-title">
        PROJECT 15% of Total <button>+</button>
      </h3>
      <ul id="wd-project-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Projects/401" className="wd-assignment-link">
            Final Project - Portfolio Website
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 28 at 12:00am |
          <br />
          <b>Due</b> June 10 at 11:59pm | 200 pts
        </li>
      </ul>
    </div>
  );
}
