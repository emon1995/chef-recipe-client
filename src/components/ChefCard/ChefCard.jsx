import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-primary text-center">Chef</h1>
      <p className="text-2xl font-bold mb-12 text-center">Most Popular Chef</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
        {chefs.map((chef) => {
          return (
            <div key={chef.id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img src={chef?.img} alt="Shoes" />
              </figure>
              <div className="p-8">
                <div className="flex items-center justify-between ">
                  <h2 className="card-title">{chef?.name}</h2>
                  <p className="flex  items-center gap-1">
                    <AiOutlineLike /> {chef?.likes}
                  </p>
                </div>
                <div className="flex items-center justify-between ">
                  <h2 className="">Experience: {chef?.experience}y</h2>
                  <p className="flex  items-center gap-1">
                    Recipes: {chef?.recipes}
                  </p>
                </div>

                <div className="mt-4 ">
                  <Link to={`/chef_recipe/${chef.id}`}>
                    <button className="btn btn-primary text-white">
                      View Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChefCard;
