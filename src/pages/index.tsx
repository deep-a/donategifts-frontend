import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@/components/layout/BaseLayout';
import TypeWriter from '@/components/common/TypeWriter';
import PartnerCarousel from '@/components/common/PartnerCarousel';
import InfoBlock from '@/components/common/InfoBlock';

export async function getStaticProps({ locale }: Record<string, string>) {
  const images = await readdir(join(__dirname, '../../../public/assets/img/partnerLogos'));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      images
    }
  };
}

export default function Index({ images }): JSX.Element {
  const { t } = useTranslation('home');
  useEffect(() => {
    const txtElement: HTMLElement = document.querySelector('.typing');
    const words = JSON.parse(txtElement.dataset.words);
    const wait = Number.parseInt(txtElement.dataset.wait, 10);
    const tw = new TypeWriter(txtElement, words, wait);
    tw.type();
  });

  return (
    <BaseLayout pageTitle="Donate Gifts | School Supply Donation, Holiday Gift Donation, Virtual Toy Drive For Foster Care And Children In Crisis">
      <div className="hero flex-center" id="home-bg">
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
                <button className="btn-white-navy-lg">How It Works</button>
              </Link>
              <Link href="/wishcards">
                <button className="btn-orange-navy-lg">See Wish Cards</button>
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
        heading={t('infoblock.heading')}
        content={t('infoblock.content')}
        button={{ link: '/contact', text: t('infoblock.button') }}
        image={{ link: '/assets/img/kids-cover.jpg', alt: t('infoblock.imageAlt') }}
      />
    </BaseLayout>
  );
}
