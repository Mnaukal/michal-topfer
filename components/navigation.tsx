import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";
import { isSubMenuItem, isTopMenuItem, MenuItem, SubMenuItem, TopMenuItem } from "@/types/navigation";
import pages from "@/preBuild/navigation.json";

function pageToNavItem(page: MenuItem, i: Number) {
  if (isTopMenuItem(page))
    return <DropdownMenuItem {...page} key={page.label} />
  else if (isSubMenuItem(page))
    return <LinkMenuItem {...page} key={page.href} />
  else return <NavDropdown.Divider key={String(i)} />
}

function DropdownMenuItem(page: TopMenuItem) {
  return (
    <NavDropdown title={page.label}>
      {page.subpages.map(pageToNavItem)}
    </NavDropdown>
  )
}

function LinkMenuItem(page: SubMenuItem) {
  return (
    <Link href={page.href} passHref legacyBehavior>
      <NavDropdown.Item>{page.label}</NavDropdown.Item>
    </Link>
  )
}

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" aria-label="Main navigation">
      <Container fluid="xl">
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>Mgr. Michal Töpfer</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-main" />

        <Navbar.Collapse id="navbar-main">
          <Nav className="me-auto mb-2 mb-lg-0">
            {pages.map(pageToNavItem)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
