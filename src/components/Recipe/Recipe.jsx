import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipe = ({ id }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="card w-full bg-base-100 shadow-xl border"
        >
          <div className="card-body">
            <h2 className="card-title">{recipe?.name}</h2>
            <p>
              <span className="font-bold">Cooking Method:</span>{" "}
              {recipe?.cookingMethod}
            </p>
            <div>
              <p className="font-bold">Ingredients:</p>
              <ul>
                {recipe?.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-8 mb-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={recipe?.rating}
                readOnly
              />
              <p>{recipe?.rating}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white gap-2">
                Favorite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
