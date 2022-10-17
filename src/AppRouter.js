import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HomePage from './pages/homepage'
import Search from './pages/search'
import Profile from './pages/profile'

import './App.css'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar className="nav" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Symptoms List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/search">Search</Nav.Link>
            <Nav.Link as={Link} to ="/profile">Profile</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Log in</Button>
          </Form>
        </Container>
      </Navbar>
        <div>
        <Routes>
            < Route path="/" element={<HomePage/>} />
            < Route path="/search" element={<Search/>} />
            < Route path="/profile" element={<Profile/>} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter