import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { ImFacebook } from "react-icons/im";
import { FcRating } from "react-icons/fc";

const Stories = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mt-10 ">
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
          className="mySwiper bg-base-100 p-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="avatar flex flex-col items-center mt-4">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{review.name}</h2>
                  <p>{review.comment}</p>
                  <div className="card-actions">
                    <ImFacebook className="text-4xl text-blue-800" />
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
