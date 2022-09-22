import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import useTranslation from 'next-i18next';
// not going to worry about the i18 stuff for right now
import Image from 'next/image';
import Link from 'next/link';
import howToCheckOut from '../../public/assets/img/howto-checkout.svg';
import wishCardClick from '../../public/assets/img/wishcard-click.svg';
import howToGift from '../../public/assets/img/howto-gift.svg';
import registerImg from '../../public/assets/img/register.svg';
import notified from '../../public/assets/img/notified.svg';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission']))
    }
  };
}

export default function Howto(): JSX.Element {
  // const { t } = useTranslation('common');
  // unused var warnings, so I commented this out
  return (
    <BaseLayout pageTitle="How does Donategifts work?">
      <header>
        <div className="bg-cover">
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <h1 className="mt-4">How Does It Work For</h1>
            <div className="d-flex gap-3">
              <a href="#donor">{<button className="mt-4 btn-howto">Donors</button>}</a>
              <h2 className="align-self-center mt-3">&</h2>
              <a href="#partner">{<button className="mt-4 btn-howto">Partners</button>}</a>
            </div>
          </div>
        </div>
      </header>
      <section id="donor" className="pt-2">
        <div className="pt-2 d-flex flex-column container-md">
          <h2 className="text-center pt-5">How do I send gifts as a donor?</h2>
          <div className="card-container">
            <div className="text-card">
              <h3>Step 1</h3>
              <p className="heading-step">Choose a wish card to 'Donate Gift'</p>
              <p className="body-step">
                Each wish card is for a different foster child, created and managed by our certified foster agency
                partner. Browse the wishes and become a Secret Santa to make their wish come true.
              </p>
              <p className="body-step">
                Click the ‘Donate Gift’ button on the card or on their wish page to begin the donation process.
              </p>
            </div>
            <div className="image-card">
              <Image alt="select the wishcard to donate a gift" src={wishCardClick} />
            </div>
          </div>
          <div className="card-container">
            <div className="image-card">
              <Image alt="how to check out" src={howToCheckOut} />
            </div>
            <div className="text-card">
              <h3>Step 2</h3>
              <p className="heading-step">Wish donation secure checkout</p>
              <p className="body-step">
                Your payment transaction is powered by Stripe, which is audited by a PCI-certified auditor and is
                certified to PCI Service Provider Level 1. This is the most stringent level of certification available
                in the payments industry.
              </p>
              <p className="body-step">
                Simply enter the name on card, card number, expiration date, CVC (security code 3-4 digits), and the
                zipcode.
              </p>
              <p className="body-step">
                That's it! You will be notified after confirmed payment with the donation and shipping details.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>Step 3</h3>
              <p className="heading-step">Get 100% tax deductible receipt</p>
              <p className="body-step">
                After checkout, we will deliver the gift to each managing foster agency. All kids and youth are under
                our partner agencies' care and the agency staff will collect and distribute the shipped wish items.
              </p>
              <p className="body-step">
                We don't have a drop-off site because we handle all shipping orders to make the donation experience more
                easy and efficient for you.
              </p>
              <p className="body-step">
                You will receive a tax-exempt receipt, shipping details, and delivery proof in the confirmation email.
                If our partner agency permits, you will also get a thank you message and photos from the child.
              </p>
            </div>
            <div className="image-card">
              <Image alt="select the wishcard to donate a gift" src={howToGift} />
            </div>
          </div>
          <div className="card-container">
            <div className="text-center">
              <h2>Ready to make the foster kids happy?</h2>
              <Link href="/wishcards">
                <button className="mt-4 btn-start">Start Browsing Wishes</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="partner" className="pt-2 pb-5">
        <div className="pt-2 d-flex flex-column container-md">
          <div className="pt-5">
            <h2 className="text-center">How do I create wishes as a partner?</h2>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>Step 1</h3>
              <p className="heading-step">Register as a partner</p>
              <p className="body-step">
                We accept partnerships with state-certified foster care organizations, adoption agencies, licensed
                domestic foster homes, and other 501(c)(3) non-profit organizations that help homeless youth and
                children at risk.
              </p>
            </div>
            <div className="image-card">
              <Image alt="select the wishcard to donate a gift" src={registerImg} />
            </div>
          </div>
          <div className="card-container">
            <div className="text-card">
              <h3>Step 2</h3>
              <p className="heading-step">Become verified</p>
              <p className="body-step">
                Agency verification may take up to 1-2 business days due to our security regulations. You will be
                notified once your agency account is verified.
              </p>
            </div>
            <div className="text-card">
              <h3>Step 3</h3>
              <p className="heading-step">Create wish cards</p>
              <p className="body-step">
                Create wish cards by filling out a simple form. Choose wish items from our suggested list, or search and
                add the product link if the child wishes for a specific item. Your submission will be created as a draft
                and will be published after our review process.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="image-card">
              <Image alt="select the wishcard to donate a gift" src={notified} />
            </div>
            <div className="text-card">
              <h3>Step 4</h3>
              <p className="heading-step">Get notified</p>
              <p className="body-step">
                That’s it! You will be notified when your wish cards are published, as well as when gifts are on their
                way. More questions? Check out the FAQs.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="text-center">
              <h2>Ready to become our non profit partner?</h2>
              <Link href="/signup">
                <button className="mt-4 btn-start">Register your agency</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
