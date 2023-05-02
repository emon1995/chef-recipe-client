import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {
  const feedbackReview = [
    {
      clientId: 1,
      clientName: "John Doe",
      clientImageUrl:
        "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__340.jpg",
      foodImages:
        "https://cdn.pixabay.com/photo/2015/03/07/13/55/pasta-663096__340.jpg",
      comment: "I had a delicious pizza slice and burger at this restaurant!",
    },
    {
      clientId: 2,
      clientName: "Jessica Lee",
      clientImageUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574__340.jpg",
      foodImages:
        "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078__340.jpg",
      comment:
        "Both the rice and pasta were well-cooked - great value for money!",
    },
    {
      clientId: 3,
      clientName: "Samantha Chan",
      clientImageUrl:
        "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg",
      foodImages:
        "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg",
      comment: "I loved the flavourful stir fry and curry sauce.",
    },
    // ...and many more...
  ];

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
