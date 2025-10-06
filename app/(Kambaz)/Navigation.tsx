"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      {/* NEU logo */}
      <ListGroup.Item
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width={75} alt="Northeastern University" />
      </ListGroup.Item>

      {/* Account (icon/text white) */}
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br /> Account
        </Link>
      </ListGroup.Item>

      {/* Dashboard (active = white bg + red text) */}
      <ListGroup.Item
        className={`border-0 text-center ${isActive("/Dashboard") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${isActive("/Dashboard") ? "text-danger" : "text-white"}`}
        >
          <AiOutlineDashboard className={`fs-1 ${isActive("/Dashboard") ? "text-danger" : "text-danger"}`} />
          <br /> Dashboard
        </Link>
      </ListGroup.Item>

      {/* Courses */}
      <ListGroup.Item
        className={`border-0 text-center ${isActive("/Courses") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/Courses"
          id="wd-course-link"
          className={`text-decoration-none ${isActive("/Courses") ? "text-danger" : "text-white"}`}
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br /> Courses
        </Link>
      </ListGroup.Item>

      {/* Calendar */}
      <ListGroup.Item
        className={`border-0 text-center ${isActive("/Calendar") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className={`text-decoration-none ${isActive("/Calendar") ? "text-danger" : "text-white"}`}
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <br /> Calendar
        </Link>
      </ListGroup.Item>

      {/* Inbox */}
      <ListGroup.Item
        className={`border-0 text-center ${isActive("/Inbox") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className={`text-decoration-none ${isActive("/Inbox") ? "text-danger" : "text-white"}`}
        >
          <FaInbox className="fs-1 text-danger" />
          <br /> Inbox
        </Link>
      </ListGroup.Item>

      {/* Labs (optional extra) */}
      <ListGroup.Item
        className={`border-0 text-center ${isActive("/Labs") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/Labs"
          id="wd-labs-link"
          className={`text-decoration-none ${isActive("/Labs") ? "text-danger" : "text-white"}`}
        >
          <LiaCogSolid className="fs-1 text-danger" />
          <br /> Labs
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
