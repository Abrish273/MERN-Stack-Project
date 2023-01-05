import Button from "react-bootstrap/Button";
import MainScreen from "../components/MainScreen";
import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const MyNotes = () => {
  const [Notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log(Notes);
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Abreham Tilahun...">
      <Link to="createnote">
        <Button
          variant="primary"
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
        >
          Create a New Note
        </Button>
      </Link>

      {Notes.map((Note) => (
        <Accordion key={Note._id}>
          <Card style={{ margin: 10, width: "100%" }}>
            <Accordion.Header>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {Note.title}
                </span>
                <div>
                  <Button href={`/note/${Note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(Note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {Note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{Note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
/**/

/*<Accordion>
<Card style={{ margin: 10 }}>
<Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                title
              </Accordion.Toggle>
            </span>
            <div>
              <Button /**href={`/note/${note._id}`} >Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                /*onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h4>
                <Badge variant="success">Category - category</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>content</p>
                <footer className="blockquote-footer">Created On - date</footer>
              </blockquote>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>*/
