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

      <div className="thanks custom-wrapper py-5">
        <div className="container" id="about">
          <h1 className="mb-3">We Need Your Help</h1>
          <div className="row">
            <div className="col-md-6 order-1 p-5">
              <img
                src="/public/img/kids-cover.jpg"
                alt="donation drop off near me"
                className="img-fluid grn-box"
                loading="lazy"
              />
            </div>
            <div className="col-md-6 text-center py-5 px-3">
              <p className="text-left subtext quick-font">
                500,000+ kids spend time in foster care each year and 4.2M+
                youth are homeless in the United States. For many of them,
                Christmas time can be sad and lonely because they are undergoing
                stressful situations. With your generosity and kindness, we are
                able to provide a moment of happiness to the kids who are in
                crisis. By creating this platform, we wish to provide effortless
                and convenient ways to share the joy of the holidays. <br />
                Your gifts make it possible to bring happiness to the kids.
              </p>
              <a href="/contact" className="btn-white-navy-lg">
                How To Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
