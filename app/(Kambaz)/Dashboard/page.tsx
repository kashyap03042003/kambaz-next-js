import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React.js" width={200} height={150} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS2345" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" alt="Node.js" width={200} height={150} />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Building RESTful APIs</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS3456" className="wd-dashboard-course-link">
            <Image src="/images/mongodb.jpg" alt="Databases" width={200} height={150} />
            <div>
              <h5>CS3456 Databases</h5>
              <p className="wd-dashboard-course-title">MongoDB & SQL Fundamentals</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS4567" className="wd-dashboard-course-link">
            <Image src="/images/css3.jpg" alt="CSS" width={200} height={150} />
            <div>
              <h5>CS4567 CSS</h5>
              <p className="wd-dashboard-course-title">Layouts & Responsive Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS5678" className="wd-dashboard-course-link">
            <Image src="/images/javascript.jpg" alt="JavaScript" width={200} height={150} />
            <div>
              <h5>CS5678 JavaScript</h5>
              <p className="wd-dashboard-course-title">ES6+ and Frontend Logic</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS6789" className="wd-dashboard-course-link">
            <Image src="/images/devops.jpg" alt="DevOps" width={200} height={150} />
            <div>
              <h5>CS6789 DevOps</h5>
              <p className="wd-dashboard-course-title">CI/CD and Deployment</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS7890" className="wd-dashboard-course-link">
            <Image src="/images/security.jpg" alt="Security" width={200} height={150} />
            <div>
              <h5>CS7890 Security</h5>
              <p className="wd-dashboard-course-title">Web Security & Best Practices</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
