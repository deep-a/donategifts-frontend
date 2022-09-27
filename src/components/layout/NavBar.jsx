import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LoginModal from '@components/authentication/LoginModal';
import useUserStore from '@store/userStore';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { isLoggedIn, logout } = useUserStore();
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  const handleLogout = async () => {
    logout();
    await router.push('/');
  };

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
      }
    ]
  };

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="nav-main">
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

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {navItems.items.map((item) => (
              <Link href={item.link} key={item.text}>
                <button type="button" className="btn-link my-3 my-sm-auto">
                  {item.text}
                </button>
              </Link>
            ))}
            {!isLoggedIn && (
              <button type="button" className="btn-link my-3 my-sm-auto" onClick={handleShowModal}>
                {t('navBar.loginHyperLink')}
              </button>
            )}
            {isLoggedIn && (
              <>
                <Link href="/profile">
                  <button type="button" className="btn-link my-3 my-sm-auto">
                    {t('navBar.profileHyperLink')}
                  </button>
                </Link>
                <button type="button" className="btn-link my-3 my-sm-auto" onClick={handleLogout}>
                  {t('navBar.logoutHyperLink')}
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        {!isLoggedIn && <LoginModal show={show} onHide={handleShowModal} />}
      </Container>
    </Navbar>
  );
}
