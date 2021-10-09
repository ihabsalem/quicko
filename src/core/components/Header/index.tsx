import { NextPage } from "next";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

export const Header: NextPage = () => (
  <Navbar collapseOnSelect className="px-4" expand="lg" bg="light" variant="light">
    <Navbar.Brand>
      <Link href="/">
        <img src="/logo.png" alt="Vercel Logo" width={72} height={16} />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link href={{ pathname: "/Stores", query: { zipCode: "1234" } }}>
          Stores
        </Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Ihab Salem</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
