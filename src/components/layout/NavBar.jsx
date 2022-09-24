import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export default function NavBar() {
  const { t } = useTranslation('common');
  const navItems = {
    items: [
      {
        text: t('navBar.wishCardsHyperLink'),
        link: '/wishcards'
      },
      {
        text: t('navBar.missionHyperLink'),
        link: '/mission'
      },
      {
        text: t('navBar.howToHyperLink'),
        link: '/howto'
      },
      {
        text: t('navBar.signUpHyperLink'),
        link: '/signup'
      },
      {
        text: t('navBar.loginHyperLink'),
        link: '/login'
      }
    ]
  };

  return (
    <Navbar bg="light" expand="lg" className="nav-main">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <button type="button" className="btn-link">
              <Image
                src="/assets/img/new-donate-gifts-logo-2.png"
                alt="donate-gifts-logo"
                width="65"
                height="65"
                className="d-block"
              />
            </button>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navItems.items.map((item) => (
                <Link href={item.link} key={item.text}>
                  <button type="button" className="btn-link">
                    {item.text}
                  </button>
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
