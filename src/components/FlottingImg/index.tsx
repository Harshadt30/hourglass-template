/* eslint-disable @next/next/no-img-element */
import Container from "@components/Container";
import React from "react";

type Props = {};

const FlottingImg = (props: Props) => {
  return (
    <section>
      <Container>
        <div className="img-wrapper relative -mt-16 mb-24">
          <img
            src={"/images/about-image.png"}
            alt="about us"
            className="hidden md:block"
          />
          <img
            src={"/images/about-image-sm.png"}
            alt="about us"
            className="block md:hidden"
          />
        </div>
      </Container>
    </section>
  );
};

export default FlottingImg;
