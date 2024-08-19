import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-gray-600 body-font container">
      <div className="container px-5 py-24 mx-auto flex md:items-center justify-center lg:items-start md:flex-row  flex-col">
        <div className="w-full md:w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="#"
            className="flex title-font items-center md:justify-start justify-center main-color text-3xl font-extrabold"
          >
            {/* <Image
              src="/images/echo-logo.jpg"
              alt="company-logo"
              height={80}
              width={80}
            /> */}
             <h1 className="text-start text-2xl font-bold main-color">Nimra Nisar</h1>
          </Link>
          <p className="mt-2 text-sm dark-gray-text dark:text-gray-400">
            We are Echo, a digital agency specializing in creating innovative
            websites and applications.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium main-color tracking-widest text-sm mb-3">
              Sites
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="https://iyzil.com/"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  Iyzil
                </Link>
              </li>
              <li>
                <Link
                  href="https://iylus.com/"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  Iylus
                </Link>
              </li>
              <li>
                <Link
                  href="https://zigron.com/"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  Zigron
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium main-color tracking-widest text-sm mb-3">
              Sections
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  Services
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium main-color tracking-widest text-sm mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  info@Cololib
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  +1 222 212 3819
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:hover:text-gray-200 text-xs"
                >
                  43 Raymouth Rd. Baltemoer, London 3910
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="main-color text-sm text-center sm:text-left">
            © 2024 Portfolio —
            <Link
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="custom_grey ml-1"
              target="_blank"
            >
              @ibrahimghani030
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="#" className="main-color">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="ml-3 main-color">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href="#" className="ml-3 main-color">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="#" className="ml-3 main-color">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
