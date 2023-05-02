import React from "react";
import quality from "../../assets/img/Food.png";
import health from "../../assets/img/Mask.png";
import delivery from "../../assets/img/delivery.png";

const Service = () => {
  return (
    <div className="text-center">
      <h1 className="text-primary">Service</h1>
      <p className="text-2xl font-bold mb-12">Why Choose Our Favorite Food</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border-2 hover:shadow-2xl rounded-3xl py-10 px-16">
          <div className="bg-orange-200 inline-block p-4 rounded-full">
            <img src={quality} alt="img" />
          </div>
          <h2 className="font-bold">Qualityful Food</h2>
          <p>
            Food quality is a concept often based on the organoleptic
            characteristics (e.g., taste, aroma, appearance) and nutritional
            value of food.
          </p>
        </div>
        <div className="border-2 hover:shadow-2xl rounded-3xl py-10 px-16">
          <div className="bg-orange-200 inline-block p-4 rounded-full">
            <img src={health} alt="img" />
          </div>
          <h2 className="font-bold">Healthy Food</h2>
          <p>
            Healthy Food Guide makes it easy and enjoyable to eat well and feel
            great. Thousands of healthy recipes, expert nutrition advice you can
            trust,
          </p>
        </div>
        <div className="border-2 hover:shadow-2xl rounded-3xl py-10 px-16">
          <div className="bg-orange-200 inline-block p-4 rounded-full">
            <img src={delivery} alt="img" />
          </div>
          <h2 className="font-bold">Fast Delivery</h2>
          <p>
            We are providing door to door delivery service within in Bangladesh
            with ... Fast Deliver is a fast growing and promising courier and
            parcel service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
