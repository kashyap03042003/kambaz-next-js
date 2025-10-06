"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";


const courses = [
  { title: "CS1 HTML5", img: "/images/HTML5.png" },
  { title: "CS2 CSS3", img: "/images/css3.jpg" },
  { title: "CS3 JavaScript", img: "/images/javascript.jpg" },
  { title: "CS4 React JS", img: "/images/reactjs.jpg" },
  { title: "CS5 Node.js", img: "/images/nodejs.jpg" },
  { title: "CS6 Mongodb", img: "/images/mongodb.jpg" },
  { title: "CS7 Devops", img: "/images/devops.jpg" },
  { title: "CS8 CyberSecurity", img: "/images/security.jpg" },
];


export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        {/* xs=1 (phones), md=4 (desktops). Use g-4 for spacing between cards */}
        <Row xs={1} md={4} className="g-4">
          {courses.map((c, i) => (
            <Col key={i} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                {/* Per spec: send all to the same course's Home page for now */}
                <Link
                  href="/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img variant="top" src={c.img} width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.title}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      Full Stack web developer
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
