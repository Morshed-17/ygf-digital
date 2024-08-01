import React from "react";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <div className=" bg-gray-100 pb-12">
      <div className="container px-4">
        <div
          className=" px-6  py-6 rounded-lg xl:flex xl:items-center"
          style={{ backgroundColor: "#483786" }}
        >
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Get the latest updates!
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Subscribe to our newsletter and stay updated on the latest
              developments.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <div id="mc_embed_signup">
              <form className="sm:flex">
                <input
                  className="required rounded-md w-full px-4 py-2 email"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                  type="email"
                  defaultValue=""
                  aria-required="true"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button
                  
                    className="rounded-lg"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
