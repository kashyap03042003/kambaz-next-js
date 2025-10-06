"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function BootstrapLists() {
  return (
    <>
      {/* 2.3.8 — Favorite movies */}
      <div id="wd-css-styling-lists" className="mb-4">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroupItem active>Aliens</ListGroupItem>
          <ListGroupItem>Terminator</ListGroupItem>
          <ListGroupItem>Blade Runner</ListGroupItem>
          <ListGroupItem>Lord of the Ring</ListGroupItem>
          <ListGroupItem disabled>Star Wars</ListGroupItem>
        </ListGroup>
      </div>

      {/* 2.3.9 — Favorite books hyperlink list */}
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroupItem action active href="https://en.wikipedia.org/wiki/Dune_(novel)">
            Dune
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
            Lord of the Rings
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Forever_War">
            The Forever War
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
            2001 A Space Odyssey
          </ListGroupItem>
          <ListGroupItem
            action
            disabled
            href="https://en.wikipedia.org/wiki/Ender&apos;s_Game"
            title="Disabled link"
          >
            Enders Game
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
          </ListGroupItem>
        </ListGroup>
      </div>
    </>
  );
}
