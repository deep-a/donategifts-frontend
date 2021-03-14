import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';

export default function Mission(): JSX.Element {
	return (
		<BaseLayout pageTitle="Mission">
			<div className="flex items-center justify-center min-h-4 bg-mission bg-no-repeat bg-cover bg-center">
				<div className="text-center text-white">
					<h1 className="text-6xl font-crayoncool uppercase">Our mission</h1>
					<h4 className="text-2xl font-quicksand font-bold">
						Learn about our mission and commitment to making foster children happy
					</h4>
				</div>
			</div>
			<div className="lg:flex mt-6 pt-5 pb-3">
				<div className="lg:w-1/2 text-center flex justify-end items-center">
					<div className="lg:w-3/5 md:pr-4 sm:pl-4">
						<h3 className="font-crayoncool text-3xl font-light">Bringing smiles to kids</h3>
						<p className="font-bold font-quicksand mt-3">
							Mission: Every child should feel valued, remembered, and loved.
						</p>
						<p className="mt-3 font-quicksand font-light leading-8 text-justify">
							The DonateGifts project was founded and established in Chicago in August, 2020. We
							partner with over 35 certified foster care agencies all around the United States. And
							with your help, we collectively send holiday and birthday gifts to foster children and
							homeless youth. Our verified partner agencies create and manage wish cards for the
							kids under their care. Each wish card is unique and personal and linked with the gift
							item they want to receive. Donation is directly linked to the product sold on Amazon,
							and after your confirmed payment, we ship the gift to each managing foster agency. The
							agency staffs or social workers collect and distribute the delivered items to each
							kid.
						</p>
					</div>
				</div>
				<div className="lg:w-1/2 text-center flex justify-start pl-28 items-center">
					<img
						className="border-0 rounded-2xl shadow-mission mission-image"
						src="/assets/img/kids-smile.gif"
						alt="smiling kids"
					/>
				</div>
			</div>
			<div className="lg:flex mt-6 pt-5 pb-3">
				<div className="lg:w-1/2 text-center flex justify-end pr-28 items-center">
					<img
						className="mission-image border-0 rounded-2xl shadow-mission"
						src="/assets/img/three-kids-bg.jpg"
						alt="smiling kids"
					/>
				</div>
				<div className="lg:w-1/2 text-center lg:flex justify-start items-center">
					<div className="lg:w-3/5">
						<h3 className="font-crayoncool text-3xl font-light">
							What&apos;s special about DonateGifts
						</h3>
						<p className="font-bold font-quicksand mt-3">
							1. Easy, efficient, and transparent gift donation
						</p>
						<p className="mt-3 font-quicksand font-light leading-8 text-justify">
							Often, the in-kind material donation process is more complicated than expected. We
							want to simplify your donation experience. With one button click, it will
							automatically send the child&apos;s wish item to their address. You will receive a
							tax-exempt receipt, shipping details, and delivery proof, as well as photos and
							messages from the child if our partner agency permits. No need to shop at the store or
							drive to the drop-off site. No unnecessary hassle for doing good.
						</p>
						<p className="font-bold font-quicksand mt-3">
							2. No random gifts, they get what they wished for
						</p>
						<p className="mt-3 font-quicksand font-light leading-8 text-justify">
							Unlike other donation programs and toy drives, our foster child can wish for a
							specific gift, such as a basketball or new shoes, rather than getting random gifts
							delivered to them.
						</p>
						<p className="font-bold font-quicksand mt-3">3. Perfect solution for COVID-19</p>
						<p className="mt-3 font-quicksand font-light leading-8 text-justify">
							Minimal handling, no contact delivery, & no drop-off site with our secure payment and
							automated delivery system.
						</p>
						<p className="font-bold font-quicksand mt-3">
							4. Building personal connections and a loving community
						</p>
						<p className="mt-3 font-quicksand font-light leading-8 text-justify">
							It&apos;s more than just a simple donation. We are building a supportive community for
							the foster kids. Because they belong and they matter. Stay tuned for our new cool
							features in 2021.
						</p>
					</div>
				</div>
			</div>
		</BaseLayout>
	);
}
