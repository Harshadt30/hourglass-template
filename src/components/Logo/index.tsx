/* eslint-disable @next/next/no-img-element */
import { SITE_NAME } from "@constant/index";
import Link from "next/link";

type Props = {
  titleColor?: string;
  logo?: string;
  classes?: string;
};

const Logo = (props: Props) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${
        props.classes ? props.classes : ""
      }`}
    >
      <img
        className={`max-h-[44px]`}
        src={props.logo ? props.logo : "/images/logo.png"}
        alt="Hourglass"
      />
      <h3
        className={`max-h-[44px] ml-6 font-bold text-xl ${
          props.titleColor ? props.titleColor : "text-accentColor"
        }`}
      >
        {SITE_NAME}
      </h3>
    </Link>
  );
};

export default Logo;
