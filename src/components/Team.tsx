import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Team = () => {
  const { team } = config;
  const [firstItem] = team.items;

  return (
    <section className={`bg-background py-8`} id="team">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {team.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`w-full p-6 mt-20`}>
          <div className={`align-middle`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <b>
              <p className={`text-gray-600 mb-8 w-full font-dancing text-2xl`}>
                {firstItem?.description}
              </p>
            </b>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <div className="flex flex-row gap-4">
              <img
                className="h-3/6"
                src={firstItem?.img1}
                alt={firstItem?.title}
              />
              <img
                className="h-3/6"
                src={firstItem?.img2}
                alt={firstItem?.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
