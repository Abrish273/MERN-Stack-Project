import { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = ({ history }) => {
  /* useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);
*/
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notes</h1>
              <p className="subtitle">One safe place for all your Notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  <Link to="/login">Login</Link>
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  <Link to="/register">Register</Link>
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
