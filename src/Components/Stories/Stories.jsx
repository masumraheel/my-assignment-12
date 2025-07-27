import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Stories = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mt-10 max-w-screen-xl mx-auto">
      <div className="text-center">
        <h3 className="my-heading">Our Clients Story</h3>
        <h2 className="text-center text-2xl text-amber-600 font-bold tracking-tight sm:text-3xl">
          Read trusted reviews from our customers
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper bg-pink-100 p-4 max-w-screen-xl mx-auto mt-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="card bg-pink-100 w-96 h-[450px]">
                <div className="avatar flex flex-col items-center mt-4">
                  <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
                    <img src={review.img}/>
                  </div>
                </div>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">{review.name}</h2>
                  <p>{review.comment}</p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <div className="card-actions border-2 rounded-xl p-2">
                    <ImFacebook className="text-3xl text-blue-800" />
                    <SiInstagram className="text-3xl bg-gradient-to-r from-pink-400 to-yellow-600 rounded-lg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Stories;
