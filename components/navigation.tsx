import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container, Navbar} from "react-bootstrap";
import Link from "next/link";


type TopMenuItem = {
    "label": string,
    "subpages": SubMenuItem[]
}
type SubMenuItem = {
    "label": string,
    "href": string,
}
type MenuItemDivider = {}
type MenuItem = TopMenuItem | SubMenuItem | MenuItemDivider

function isTopMenuItem(page: MenuItem): page is TopMenuItem {
    return "subpages" in page;
}
function isSubMenuItem(page: MenuItem): page is SubMenuItem {
    return "href" in page;
}


const pages: MenuItem[] = [{
    "label": "Výuka",
    "subpages": [{
        "label": "NPRG062 – Algoritmizace",
        "href": "/vyuka/2223/NPRG062/",
    },{
        "label": "NPRG030 – Programování 1",
        "href": "/vyuka/2223/NPRG030/",
    }, {}, {
        "label": "NPRG031 – Programování 2",
        "href": "/vyuka/2223/NPRG031/",
    }, {}, {
        "label": "Archiv",
        "href": "/vyuka"
    }],
}, {
    "label": "Projekty",
    "subpages": [{
        "label": "IVIS (bakalářská práce)",
        "href": "/bc",
    }, {
        "label": "ML-DEECo (diplomová práce)",
        "href": "/mgr",
    }, {
        "label": "Atletika",
        "href": "/alge",
    }]
}]


function pageToNavItem(page: MenuItem) {
    if (isTopMenuItem(page))
        return <DropdownMenuItem {...page} />
    else if (isSubMenuItem(page))
        return <LinkMenuItem {...page} />
    else return <NavDropdown.Divider />
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
