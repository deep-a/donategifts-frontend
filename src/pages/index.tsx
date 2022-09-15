import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}

export default function Index(): JSX.Element {
  return (
    <BaseLayout pageTitle="Donate Gifts | School Supply Donation, Holiday Gift Donation, Virtual Toy Drive For Foster Care And Children In Crisis">
      <div className="hero flex-center" id="home-bg">
        <div className="grid auto-rows-auto">
          <div className="auto-cols-auto">
            <h1>Send Gifts to Foster Children</h1>
            <h4 className="hide">Every child should feel valued and loved</h4>
            <h4 className="m-mobile">
              Donate holiday gifts and school supplies to kids in need
            </h4>
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
      <div className="wishcards">
        <h1>Become Our Secret Santa</h1>
      </div>
      <div className="wishcards">
        <h1>Donate School Supplies</h1>
      </div>
    </BaseLayout>
  );
}
