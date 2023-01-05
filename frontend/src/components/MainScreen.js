import "./MainScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            }
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
