import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const FAQ = () => {
  return (
    <div>
      <div className="mt-10 p-4  rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center text-teal-900 mb-2">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>

          <div className="space-y-3">
            <details open className=" border  rounded-md p-4">
              <summary className="font-semibold cursor-pointer text-teal-900">
                How does this posture corrector work?
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day. Here’s how it
                typically functions: A posture corrector works by providing
                support and gentle alignment to your shoulders.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer text-gray-900">
                Is it suitable for all ages and body types?
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Yes, it is designed to fit all ages and body types comfortably.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer text-gray-900">
                Does it really help with back pain and posture improvement?
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Absolutely! Many users have reported significant improvement in
                back pain and posture after consistent use.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer text-gray-900">
                Does it have smart features like vibration alerts?
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Yes, some advanced models come with smart vibration alerts to
                remind you to maintain correct posture.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer text-gray-900">
                How will I be notified when the product is back in stock?
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                You can sign up for our mailing list to receive notifications
                when the product is restocked.
              </p>
            </details>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 shadow-md transition">
              See More FAQ
              <GoArrowUpRight
                className="h-9 w-9 text-lime-400 bg-black rounded-full p-2"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
