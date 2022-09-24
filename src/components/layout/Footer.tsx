import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(): JSX.Element {
  const { t } = useTranslation('common');
  const breadCrumbs: {
    link: string;
    text: string;
  }[] = [
    {
      link: '/contact',
      text: t('footer.contactUsHyperLink')
    },
    {
      link: '/mission',
      text: t('navBar.missionHyperLink')
    },
    {
      link: '/howto',
      text: t('footer.howItWorksHyperLink')
    },
    {
      link: '/team',
      text: t('footer.whoWeAreHyperLink')
    },
    {
      link: '/wishcards',
      text: t('navBar.wishCardsHyperLink')
    },
    {
      link: '/community',
      text: t('footer.communityHyperLink')
    },
    {
      link: '/terms',
      text: t('footer.termsHyperLink')
    },
    {
      link: '/faq',
      text: t('footer.faqHyperLink')
    }
  ];

  return (
    <div className="footer_main">
      <div className="footer_main_container">
        <p className="footer_main_paypal">
          <a
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LA5DA2K2C8HLW"
            rel="noreferrer"
            title="support our organization by paypal donation"
            target="_blank"
            className="footer_main_paypal"
          >
            <FontAwesomeIcon fixedWidth={true} icon={faHeart} />
            <span className="mx-2">{t('footer.supportOurCause')}</span>
            <FontAwesomeIcon fixedWidth={true} icon={faHeart} />
          </a>
        </p>
        <div className="footer_main_row">
          <div>
            <button type="button" className="footer_main_row_button">
              <Link href={'https://www.instagram.com/donategifts/'}>
                <span className="hover:underline">{'Social Media'}</span>
              </Link>
            </button>
            <span>|</span>
          </div>
          {breadCrumbs.map((item, index) => (
            <div key={item.text}>
              <button type="button" className="footer_main_row_button">
                <Link href={item.link}>
                  <span className="hover:underline">{item.text}</span>
                </Link>
              </button>
              {index + 1 !== breadCrumbs.length && <span>|</span>}
            </div>
          ))}
        </div>
        <div className="footer_main_row">
          <div>501(c)(3) non profit charitable organization</div>
        </div>
        <div className="footer_main_row">
          <div>Donate Gifts Inc.Copyright © 2022 All rights reserved!</div>
        </div>
      </div>
    </div>
  );
}
