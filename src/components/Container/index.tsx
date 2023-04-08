import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return <div className="px-4 md:px-0 container">{props.children}</div>;
};

export default Container;
