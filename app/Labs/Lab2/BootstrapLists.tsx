"use client";
import { ListGroup } from "react-bootstrap";

export default function BootstrapLists() {
  return (
    <div id="wd-css-styling-lists" className="mb-4">
      <h2>Favorite movies</h2>
      <ListGroup>
        <ListGroup.Item active>Aliens</ListGroup.Item>
        <ListGroup.Item>Terminator</ListGroup.Item>
        <ListGroup.Item>Blade Runner</ListGroup.Item>
        <ListGroup.Item>Lord of the Ring</ListGroup.Item>
        <ListGroup.Item disabled>Star Wars</ListGroup.Item>
      </ListGroup>

      <h3 className="mt-3">Favorite books</h3>
      <ListGroup>
        <ListGroup.Item action href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</ListGroup.Item>
        <ListGroup.Item action href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">Lord of the Rings</ListGroup.Item>
        <ListGroup.Item action href="https://en.wikipedia.org/wiki/The_Forever_War">The Forever War</ListGroup.Item>
        <ListGroup.Item action disabled href="https://en.wikipedia.org/wiki/Ender%27s_Game">Ender's Game</ListGroup.Item>
        <ListGroup.Item action onClick={() => alert("New book added")}>Add another book</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
