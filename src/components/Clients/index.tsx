/* eslint-disable @next/next/no-img-element */
import { CLIENTS, CLIENTS_TAGLINE } from "@constant/index";

type Props = {};

const Clients = (props: Props) => {
  return (
    <div>
      <h2 className=" text-lightPurple text-base text-center mb-8 md:text-2xl">
        {CLIENTS_TAGLINE}
      </h2>
      <div className="clients-wrapper grid grid-cols-2 md:grid-cols-5 gap-8">
        {CLIENTS.map(({ id, alt, src, mobileOnly }) => (
          <div
            key={id}
            className={`md:w-4/5 ${mobileOnly ? "block md:hidden" : ""}`}
          >
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
