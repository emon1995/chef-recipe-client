import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {
  const [feedbackReview, setFeedbackReview] = useState([]);

  useEffect(() => {
    fetch("comment.json")
      .then((res) => res.json())
      .then((data) => setFeedbackReview(data));
  }, []);

  return (
    <div className="text-center my-20">
      <h1 className="text-primary">Testimonial</h1>
      <p className="text-2xl font-bold mb-12">Our Happy Client Says</p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {feedbackReview.map((review, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{ "--image-url": `url(${review?.foodImages})` }}
              className="bg-[image:var(--image-url)] bg-cover h-full py-40"
            >
              <div className="text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={review?.clientImageUrl} alt="img" />
                  </div>
                </div>
                <h1 className="text-black font-bold text-xl">
                  {review?.clientName}
                </h1>
                <p className="text-black font-bold">{review.comment}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
