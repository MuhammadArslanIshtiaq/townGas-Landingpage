import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MainCard from "../../../components/cards/MainCard";
import ScrollAnimation from "react-animate-on-scroll";

const CardsSection = () => {
  const CardsList = [
    { btnColor: "#F9D53F" },
    { btnColor: "#0071BC" },
    { btnColor: "#ADD136" },
    { btnColor: "#8dd10b" },
    { btnColor: "#F9D53E" },
    { btnColor: "#0071BB" },
    { btnColor: "#ADD137" },
    { btnColor: "#8dd10c" },
  ];

  return (
    <section className="pb-12">
      <div className="relative">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className=" flex gap-3 md:gap-10 xl:gap-20 items-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
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
                  <MainCard item={item} />
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
