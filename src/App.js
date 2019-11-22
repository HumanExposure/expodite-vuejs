import React from 'react';
import { Container, Navbar } from 'react-bootstrap'
import Results from "./components/Results";


function App() {
  return (
    <div className="App">
      <Navbar fixed="top" bg="light" variant="light">
      <Navbar.Brand href="#Expodite">
        Expodite
      </Navbar.Brand>
    </Navbar>
      <Container>
        <p />

      </Container>
      <Results/>

    </div>
  );
}

export default App;
