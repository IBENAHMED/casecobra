import {
  snake1,
  line,
  horsePhone,
  horse,
  phoneTemplate,
  testimonials1,
  testimonials2,
  testimonials3,
  testimonials4,
  testimonials5,
  testimonials6,
  yourImage,
  user1,
  user2,
  user3,
  user4,
  user5,
} from "../../public/img";
import { FaCheck, FaStar, FaArrowRight } from "react-icons/fa";
import "./page.css";
import Phone from "@/components/Phone";
import Link from "next/link";

export default function Home() {
  return (
    // container mx-auto p-5
    <main>
      <section className="container mx-auto landing flex items-center pb-32">
        <div className="landing-content">
          <img src={`${snake1.src}`} alt="image snake1" style={{ "width": "100px" }} />

          <h1 className='landing-title relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
            Your Image on a{' '}
            <span className='bg-green-600 px-2 text-white'>Custom</span>{' '}
            Phone Case
          </h1>

          <p className='landing-description mt-8 text-lg lg:pr-10 max-w-prose text-balance md:text-wrap'>

            Capture your favorite memories with your own,{' '}
            <span className='font-semibold'>one-of-one</span> phone case.
            CaseCobra allows you to protect your memories, not just your
            phone case.
          </p>

          <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
            <div className='space-y-2'>
              <li className='flex gap-1.5 items-center text-left'>
                <FaCheck className='h-5 w-5 shrink-0 text-green-600' />
                High-quality, durable material
              </li>
              <li className='flex gap-1.5 items-center text-left'>
                <FaCheck className='h-5 w-5 shrink-0 text-green-600' />5 year
                print guarantee
              </li>
              <li className='flex gap-1.5 items-center text-left'>
                <FaCheck className='h-5 w-5 shrink-0 text-green-600' />
                Modern iPhone models supported
              </li>
            </div>
          </ul>

          <div className="landing-user mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <ul className="flex -space-x-4">
              <li>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                  src={`${user1.src}`}
                  alt="img user1"
                />
              </li>
              <li>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src={`${user2.src}`}
                  alt="img user2" />
              </li>
              <li>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src={`${user3.src}`}
                  alt="img user3"
                />
              </li>
              <li>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src={`${user4.src}`}
                  alt="img user4"
                />
              </li>
              <li>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                  src={`${user5.src}`}
                  alt="img user5"
                />
              </li>
            </ul>

            <div className='flex flex-col justify-between items-center sm:items-start'>
              <div className='flex gap-0.5'>
                <FaStar className='star h-4 w-4 text-green-600 fill-green-600' />
                <FaStar className='star h-4 w-4 text-green-600 fill-green-600' />
                <FaStar className='star h-4 w-4 text-green-600 fill-green-600' />
                <FaStar className='star h-4 w-4 text-green-600 fill-green-600' />
                <FaStar className='star h-4 w-4 text-green-600 fill-green-600' />
              </div>

              <p>
                <span className='font-semibold'>1.250</span> happy customers
              </p>
            </div>
          </div>
        </div>

        <div className='phone col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
          <div className='relative max-w-56'>
            <img
              src={`${yourImage.src}`}
              className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
            />
            <img
              src={`${line.src}`}
              className='absolute w-20 -left-6 -bottom-6 select-none'
            />

            <Phone
              className='w-64'
              phoneTemplate={phoneTemplate.src}
              testimonials1={testimonials1.src}
            />

          </div>
        </div>
      </section>


      {/* value proposition section */}
      <section className='bg-slate-100 grainy-dark py-24'>
        <div className='container mx-auto p-5 flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              What our{' '}
              <span className='relative px-2'>
                customers{' '}
              </span>{' '}
              say
            </h2>
            {/* <img src='/snake-2.png' className='w-24 order-0 lg:order-2' /> */}
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src={`${user1.src}`}
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <FaCheck className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
                <FaStar className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src={`${user4.src}`}
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Josh</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <FaCheck className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="container mx-auto p-5 pt-32">
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-4">
              <div className="max-w-56 bg-white px-4 mx-auto animate-pulse">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials1.src}
                />
              </div>
            </div>
            <div className="col-span-4">

              <div className="max-w-56 bg-white px-4 mx-auto ">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials2.src}
                />
              </div>
            </div>
            <div className="col-span-4">

              <div className="max-w-56 bg-white px-4 mx-auto ">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials3.src}
                />
              </div>
            </div>
            <div className="col-span-4">

              <div className="max-w-56 bg-white px-4 mx-auto ">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials4.src}
                />
              </div>
            </div>
            <div className="col-span-4">

              <div className="max-w-56 bg-white px-4 mx-auto">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials5.src}
                />
              </div>
            </div>
            <div className="col-span-4">

              <div className="max-w-56 bg-white px-4 mx-auto animate-pulse">
                <Phone
                  className='w-64'
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={testimonials6.src}
                />
              </div>
            </div>
          </div>
          <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100' />
        </div>
      </section>

      <section>
        <div className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Upload your photo and get{' '}
                <span className='relative px-2 bg-green-600 text-white'>
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src={`${horse.src}`}
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <div className="max-w-56">
                <Phone
                  phoneTemplate={phoneTemplate.src}
                  testimonials1={horsePhone.src}
                />
              </div>
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <FaCheck className='h-5 w-5 text-green-600 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <FaCheck className='h-5 w-5 text-green-600 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <FaCheck className='h-5 w-5 text-green-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <FaCheck className='h-5 w-5 text-green-600 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                href='/configure/upload'
                className="flex items-center bg-green-600 text-white py-1 px-3 rounded hover:bg-green-400 duration-300">
                Create case
                <FaArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </main>
  );
}
