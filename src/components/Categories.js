// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from './CategoryCard';
// Import Swiper styles
import 'swiper/css';

export const Categories = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={2.25}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><CategoryCard img="categories/milk.png" title="Milk" /></SwiperSlide>
        <SwiperSlide><CategoryCard img="categories/egg.png" title="Eggs" /></SwiperSlide>
        <SwiperSlide><CategoryCard img="categories/vegetable.png" title="Vegetables" /></SwiperSlide>
        <SwiperSlide><CategoryCard img="categories/yogurt.png" title="Yogurt" /></SwiperSlide>
    </Swiper>
  );
};