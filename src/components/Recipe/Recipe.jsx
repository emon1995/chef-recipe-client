import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Recipe = ({ id }) => {
  const [recipes, setRecipes] = useState([]);
  //   const [favorite, setFavorite] = useState(false);

  const handleFavorite = (e) => {
    e.target.setAttribute("disabled", "");
    // console.log(e.target);
    toast.success("Recipe is your Favorite");
  };

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
              <button
                onClick={handleFavorite}
                className="btn btn-primary cursor-pointer text-white gap-2"
              >
                Favorite
                {/* <MdOutlineFavoriteBorder /> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
