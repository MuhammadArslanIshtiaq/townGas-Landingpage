import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from "react-animate-on-scroll";

import { Link } from "react-router-dom";

const CardsSection = () => {
  const CardsList = [
    { btnColor: "#F9D53F", img: "/assets/images/1.jpg" },
    { btnColor: "#0071BC", img: "/assets/images/2.jpg" },
    { btnColor: "#ADD136", img: "/assets/images/3.jpg" },
    { btnColor: "#8dd10b", img: "/assets/images/4.jpg" },
    { btnColor: "#8dd10c", img: "/assets/images/5.jpg" },
    { btnColor: "#8dd10d", img: "/assets/images/6.jpg" },
    { btnColor: "#8dd10e", img: "/assets/images/7.jpg" },
    { btnColor: "#8dd10f", img: "/assets/images/8.jpg" },
    { btnColor: "#8dd10g", img: "/assets/images/9.jpg" },
    { btnColor: "#8dd10h", img: "/assets/images/10.jpg" },
  ];

  return (
    <section className="pb-12">
      <div className="relative">
        <ScrollAnimation animateIn="fadeInLeft" duration={2}>
          <div className=" flex gap-3 md:gap-10 xl:gap-20 items-center">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {CardsList.map((item) => (
                <SwiperSlide key={item.btnColor}>
                  <div className="py-3">
                    <Link
                      to
                      className="block relative p-3 md:p-6 shadow-lg rounded-lg transition duration-300 transform hover:scale-95"
                    >
                      <img
                        className="block h-full w-full object-contain"
                        src={item.img}
                        alt=".."
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CardsSection;
