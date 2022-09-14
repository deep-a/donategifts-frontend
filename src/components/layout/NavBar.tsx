import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

function toggleMenu() {
  document.querySelector('#nav-content').classList.toggle('hidden');
}

export default function NavBar(): JSX.Element {
  const { t } = useTranslation('common');
  const navItems: {
    style: string;
    items: {
      text: string;
      link: string;
    }[];
  } = {
    style:
      'font-quick font-medium text-lg transition ease-in-out background-transparent px-3 py-1 outline-none focus:outline-none text-primary hover:text-primary-hover',
    items: [
      {
        text: t('common:wishCardsHyperLink'),
        link: '/wishcards',
      },
      {
        text: t('common:missionHyperLink'),
        link: '/mission',
      },
      {
        text: t('common:howToHyperLink'),
        link: '/howto',
      },
      {
        text: t('common:signUpHyperLink'),
        link: '/signup',
      },
      {
        text: t('common:loginHyperLink'),
        link: '/login',
      },
    ],
  };

  return (
    <nav className="flex flex-wrap justify-between my-2 z-10 bg-white">
      <div id="logo" className="lg:w-1/3 flex justify-center">
        <div className="flex items-center">
          <Link href="/">
            <button
              type="button"
              className="background-transparent px-3 py-1 outline-none focus:outline-none"
            >
              <Image
                src="/assets/img/new-donate-gifts-logo-2.png"
                alt="donate-gifts-logo"
                width="65"
                height="65"
              />
            </button>
          </Link>
        </div>
      </div>

      <div className="block lg:hidden my-auto mr-7">
        <button
          type="button"
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600"
          onClick={toggleMenu}
        >
          <div id="navbar-toggler-item" />
        </button>
      </div>

      <div
        id="nav-content"
        className="w-full flex-grow lg:flex lg:self-center justify-center hidden lg:block pt-6 lg:pt-0 lg:w-2/3"
      >
        <ul className="lg:flex justify-end sm:text-right items-center">
          {navItems.items.map((item) => (
            <li key={item.text}>
              <Link href={item.link}>
                <button type="button" className={navItems.style}>
                  {item.text}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
