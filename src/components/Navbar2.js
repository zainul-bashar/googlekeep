import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar2() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Google Keep</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navbar2;