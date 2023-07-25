import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TodaysTasks from './TodaysTasks';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CompletedTasks from './CompletedTasks';
import ImportantTasks from './ImportantTasks';

const Header = ({ taskList }) => {
  return (
    <Router>
      <Navbar expand="lg" bg="light">
        <Navbar.Brand as={Link} to="/">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">All Tasks</Nav.Link>
            <Nav.Link as={Link} to="/TodaysTasks">Today's Tasks</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/CompletedTasks">Completed Tasks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ImportantTasks">Important Tasks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Use <Routes> to wrap <Route> components */}
      <Routes>
        <Route path="/TodaysTasks" element={<TodaysTasks taskList={taskList} />} />
        <Route path="/CompletedTasks" element={<CompletedTasks taskList={taskList} />} />
        <Route path="/ImportantTasks" element={<ImportantTasks taskList={taskList} />} />
      </Routes>
    </Router>
  );
};

export default Header;
