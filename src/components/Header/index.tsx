/* eslint-disable @next/next/no-img-element */
import Container from "@components/Container";
import Logo from "@components/Logo";
import { HEADER_LINKS } from "@constant/index";
import Link from "next/link";
import { useState } from "react";

const Header = (props: {}) => {
  const [activeHeader, setActiveHeader] = useState<boolean>(false);

  return (
    <header
      className={`header bg-primaryColor text-white ${
        activeHeader ? "open" : ""
      }`}
    >
      <Container>
        <div className="header-wrapper flex flex-wrap items-center py-[18px]">
          <Logo
            classes="flex-1 md:flex-initial"
            titleColor="text-white"
            logo="/images/logo-darker.png"
          />
          <button
            className="md:hidden"
            onClick={() => setActiveHeader(!activeHeader)}
          >
            <img src="/images/hamburger-menu.png" alt="menu" />
          </button>
          <nav className="flex-col hidden md:flex-row w-full md:w-auto mt-8 md:mt-0  md:flex md:ml-10 gap-y-4 gap-x-8">
            {HEADER_LINKS.map(({ id, href, title, subLinks }) => (
              <Link
                key={id}
                href={href}
                className="link-wrapper inline-flex items-center text-base"
              >
                <span>{title}</span>
                {subLinks && (
                  <img
                    className="ml-2.5"
                    src={"/images/chevron-down.png"}
                    alt={title}
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="header-extra hidden md:ml-auto  md:block mt-8 md:mt-0">
            <Link href="/support" className="text-white">
              Suppport
            </Link>
            <Link
              href="/sales"
              className="ml-[30px] py-2.5 px-[18px] rounded-lg bg-accentColor text-white border border-accentColor shadow-nomal"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
