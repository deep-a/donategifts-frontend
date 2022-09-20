import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export default function NavBar(): JSX.Element {
  const expand = 'lg';
  const { t } = useTranslation('common');
  const navItems: {
    items: {
      text: string;
      link: string;
    }[];
  } = {
    items: [
      {
        text: t('common:wishCardsHyperLink'),
        link: '/wishcards'
      },
      {
        text: t('common:missionHyperLink'),
        link: '/mission'
      },
      {
        text: t('common:howToHyperLink'),
        link: '/howto'
      },
      {
        text: t('common:signUpHyperLink'),
        link: '/signup'
      },
      {
        text: t('common:loginHyperLink'),
        link: '/login'
      }
    ]
  };

  return (
    <Navbar bg="light" expand={expand} className="nav-main">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <button className="btn-link">
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

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
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
