import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefRecipe = () => {
  const chef = useLoaderData();

  const { id } = useParams();
  // console.log(id);

  return (
    <div>
      <div className="hero lg:max-h-screen bg-base-200 my-20">
        <div className="hero-content gap-8 flex-col lg:flex-row">
          <img
            src={chef?.img}
            className="md:max-w-sm rounded-lg shadow-2xl object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">{chef?.name}</h1>
            <p className="py-6">{chef?.description}</p>
            <div className="flex flex-col lg:flex-row  lg:items-center  justify-between mb-8">
              <h2 className="">Years of experience: {chef?.experience}y</h2>
              <p className="flex  items-center gap-1">
                Number of Recipes: {chef?.recipes}
              </p>
              <p className="flex  items-center gap-1">
                <AiOutlineLike /> {chef?.likes}
              </p>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div className="my-20">
        <Recipe id={id}></Recipe>
      </div>
    </div>
  );
};

export default ChefRecipe;
