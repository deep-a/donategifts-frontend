import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@components/layout/BaseLayout';
import PartnerCarousel from '@components/common/PartnerCarousel';
import InfoBlock from '@components/common/InfoBlock';
import TypeWriter from '@common/utils/TypeWriter';
import PropTypes from 'prop-types';

export async function getStaticProps({ locale }) {
  const images = await readdir(join(__dirname, '../../../public/assets/img/partnerLogos'));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      images
    }
  };
}

export default function Index({ images }) {
  const { t } = useTranslation('home');
  useEffect(() => {
    const txtElement = document.querySelector('.typing');
    const words = JSON.parse(txtElement.dataset.words);
    const wait = Number.parseInt(txtElement.dataset.wait, 10);
    const tw = new TypeWriter(txtElement, words, wait);
    tw.type();
  });

  return (
    <BaseLayout pageTitle={t('pageTitle')}>
      <div className="hero flex-center img-fluid" id="home-bg">
        <div className="grid auto-rows-auto">
          <div className="auto-cols-auto">
            <h1>
              Send Gifts to{' '}
              <span
                className="typing"
                data-wait="2000"
                data-words='["Foster Children", "Homeless Youth", "Kids in Emergency Shelters"]'
              />
            </h1>
            <h4 className="hide">Every child should feel valued and loved</h4>
            <h4 className="m-mobile">Donate holiday gifts and school supplies to kids in need</h4>
            <div className="my-6">
              <Link href="/howto">
                <button type="button" className="btn-white-navy-lg">
                  How It Works
                </button>
              </Link>
              <Link href="/index">
                <button type="button" className="btn-orange-navy-lg">
                  See Wish Cards
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel">
        <PartnerCarousel images={images} />
      </div>

      <div className="wishcards">
        <h1>Become Our Secret Santa</h1>
      </div>

      <div className="wishcards">
        <h1>Donate School Supplies</h1>
      </div>

      <InfoBlock
        heading={t('infoBlock.heading')}
        content={t('infoBlock.content')}
        button={{ link: '/contact', text: t('infoBlock.button') }}
        image={{ link: '/assets/img/kids-cover.jpg', alt: t('infoBlock.imageAlt') }}
      />
    </BaseLayout>
  );
}

Index.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
