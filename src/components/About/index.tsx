/* eslint-disable @next/next/no-img-element */
import Container from "@components/Container";
import { AboutUs } from "@constant/index";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="pt-24 pb-20 bg-ghostWhite">
      <Container>
        <div className="row flex flex-col md:flex-row">
          <div className="col w-full md:w-1/2">
            <div className="wrapper md:w-10/12 mb-12 md:mb-0">
              <span className="block text-accentColor text-base	mb-3 font-semibold">
                Who we are
              </span>
              <h6 className="md:text-4xl text-3xl mb-4 md:mb-5 font-semibold text-blackPearl">
                Commercial interior designers
              </h6>
              <p className="text-marbleBlue text-lg	 md:text-md2">
                Untitled are a commercial interior design studio. We specialise
                in customised office design, restaurant design, shop design, and
                studio design.
              </p>
            </div>
          </div>
          <div className="col w-full md:w-1/2">
            <div className="wrapper">
              {AboutUs.map(({ alt, heading, id, src, subHeading }) => (
                <div
                  key={id}
                  className="service-wrapper flex items-start gap-4 mb-12"
                >
                  <img src={src} alt={alt} />
                  <div className="text-wrapper md:pt-2.5">
                    <p className="text-md2 text-blackPearl font-medium mb-2">
                      {heading}
                    </p>
                    <p className="text-marbleBlue text-base">{subHeading}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
