/* eslint-disable @next/next/no-img-element */
import Clients from "@components/Clients";
import Container from "@components/Container";
import { BANNER_HEADING, BANNER_SUBHEADING } from "@constant/index";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="bg-primaryColor text-white  py-16 md:py-20 	lg:py-24">
      <Container>
        <div className="text-wrapper">
          <h1
            dangerouslySetInnerHTML={{ __html: BANNER_HEADING }}
            className="text-lg2 md:text-xxl lg:w-4/5 font-medium mb-6"
          />
          <p
            dangerouslySetInnerHTML={{ __html: BANNER_SUBHEADING }}
            className="lg:w-5/12 text-lg md:text-md2 text-lightPurple"
          />
        </div>
        <div className="bnts-wrapper mt-8 md:mt-12 flex flex-col md:flex-row gap-3">
          <button className="text-accentColor text-lg justify-center items-center inline-flex py-4 px-7 shadow-nomal bg-[#F9F5FF] gap-3.5 rounded-lg">
            <img src="/images/play-circle.png" alt="play" />
            <span> Showreel</span>
          </button>
          <button className="bg-accentColor text-white text-lg py-4 px-7 shadow-nomal rounded-lg">
            Get in touch
          </button>
        </div>
        <div className="img-wrapper my-16 md:mt-12 md:mb-24">
          <img
            className="hidden md:block"
            src={"/images/hero-image.jpg"}
            alt="Hero image"
          />
          <img
            className="block md:hidden"
            src={"/images/hero-image-sm.png"}
            alt="Hero image"
          />
        </div>
        <Clients />
      </Container>
    </section>
  );
};

export default Banner;
