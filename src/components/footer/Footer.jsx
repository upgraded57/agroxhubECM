import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <>
      <div className="container max-w-screen-xl px-[4vw] mx-auto mb-12">
        <div className="flex justify-between items-center mb-3">
          <h3 className="h-100">About AgroXhub</h3>
          <Link href="#" className="flex items-center gap-3">
            <p className="text-sm">Learn More About Us</p>
            <FaArrowRightLong className="text-dark-green-clr" />
          </Link>
        </div>
        <p className="text-sm mb-3">
          At Agroxhub, we believe in making agricultural transactions simple,
          efficient, and rewarding for both farmers and buyers. Our platform is
          designed with you in mind, providing a seamless experience that
          connects quality products with eager buyers.
        </p>

        <p className="text-sm">
          Our mission is to empower farmers and buyers by providing a platform
          that fosters growth, convenience, and fair transactions. We aim to
          create a community where agriculture thrives, and everyone benefits
        </p>
      </div>

      <div className="bg-dark-green-clr flex items-center justify-center py-8">
        <img src={logo} alt="logo" className="w-[150px] md:w-[200px]" />
      </div>

      <div className="bg-white py-8 px-[4vw] flex flex-col gap-3 items-center justify-center">
        <h1 className="text-dark-green-clr text-lg md:text-2xl font-semibold">
          JOIN OUR NEWSLETTER
        </h1>
        <form className="flex w-full max-w-screen-sm">
          <label className="input flex items-center w-full gap-2 bg-light-grey-clr rounded-r-none">
            <HiOutlineEnvelope className="text-gray-300" />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <button type="submit" className="btn green-gradient rounded-l-none">
            Subscribe
          </button>
        </form>
      </div>

      <footer className="bg-dark-green-clr py-8 px-[4vw] text-white">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-start mx-auto container">
          <span className="max-w-[150px]">
            <p className="text-sm font-semibold mb-2">CONTACT US</p>
            <p className="text-sm mb-4">
              123, Sample Location, Some state, Nigeria
            </p>
            <p className="text-sm mb-4">
              123 Sample Location, Some state, Nigeria
            </p>
            <p className="text-sm">
              +2348011223344 +2349055667788 +2347088776655
            </p>
          </span>
          <span className="max-w-[150px]">
            <p className="text-sm font-semibold mb-2">QUICK LINKS</p>
            <p className="text-sm">About</p>
            <p className="text-sm">Contact</p>
            <p className="text-sm">Sitemap</p>
            <p className="text-sm">Register / Login</p>
            <p className="text-sm">Become a Member</p>
            <p className="text-sm">Affiliate Marketing</p>
          </span>
          <span className="max-w-[150px]">
            <p className="text-sm font-semibold mb-2">OUR PARTNERS</p>
            <p className="text-sm">DHL</p>
            <p className="text-sm">Jumia Pay</p>
            <p className="text-sm">Interswitch</p>
            <p className="text-sm">NGNC</p>
            <p className="text-sm">Opay</p>
          </span>
          <span className="max-w-[150px]">
            <p className="text-sm font-semibold mb-2">SOCIAL MEDIA</p>
            <p className="text-sm">Facebook</p>
            <p className="text-sm">Intagram</p>
            <p className="text-sm">Twitter</p>
            <p className="text-sm">LinkedIn</p>
            <p className="text-sm">Youtube</p>
          </span>
        </div>

        <p className="text-sm text-center mt-8">
          (C) 2024 Agroxhub. All right reserved
        </p>
      </footer>
    </>
  );
}
