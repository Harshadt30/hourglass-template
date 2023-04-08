/* eslint-disable @next/next/no-img-element */
import Container from "@components/Container";
import Logo from "@components/Logo";
import {
  EMAIL_PLACEHOLDER,
  EMAIL_SUB_TITLE,
  FOOTER_LINKS,
  FOOTER_LINKS_EXTRA,
  SITE_NAME,
} from "@constant/index";
import Link from "next/link";
const year = new Date().getFullYear();
const Footer = (props: {}) => {
  return (
    <footer>
      <Container>
        <div className={`border-t border-b py-12 md:py-16 lg:flex`}>
          <div className="col lg:flex-1">
            <Logo />
            <div className="footer-links-wrapper mt-8 flex flex-wrap gap-y-3 lg:gap-x-8">
              {FOOTER_LINKS.map(({ href, title, id }) => (
                <Link
                  key={id}
                  href={href}
                  className="w-1/2 lg:w-auto text-marbleBlue hover:text-black transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col">
            <div className="news-letter-wrapper mt-12 lg:mt-0">
              <label htmlFor="email-input" className="text-sm	">
                {EMAIL_SUB_TITLE}
              </label>
              <div className="input-wrapper mt-4">
                <input
                  type="email"
                  name="email"
                  id="email-input"
                  className="py-2.5 px-3.5 w-full lg:w-auto rounded-lg	border outline-none border-[#D0D5DD] shadow-nomal"
                  placeholder={EMAIL_PLACEHOLDER}
                />
                <button
                  type="submit"
                  className="w-full lg:w-auto mt-4 lg:mt-0 text-white bg-accentColor rounded-lg lg:ml-4 py-2.5 px-[18px] shadow-nomal"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy pt-8 flex flex-col-reverse md:flex-row justify-between">
          <div className="copyright-brand mt-4 md:mt-0">
            <p className="text-coolGray">
              <span>&copy;</span> {year} {SITE_NAME} company. All rights
              reserved.
            </p>
          </div>
          <div className="footer-copy-links-wrapper flex gap-x-8">
            {FOOTER_LINKS_EXTRA.map(({ href, title, id }) => (
              <Link
                key={id}
                href={href}
                className="text-coolGray hover:text-black transition-colors"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
