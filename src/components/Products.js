// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
// Import Swiper styles
import 'swiper/css';

export const Products = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2.25}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
    <ProductCard 
        img="products/1.png" 
        title="Laban Up Tetra Pack 200ml" 
        price="AED 0.75" 
        discount="20% OFF" 
        originalPrice="AED 1.5" /></SwiperSlide>
        <SwiperSlide>
        <ProductCard 
        img="products/3.png" 
        title="Laban Full Fat 2L" 
        price="AED 6.50" 
         />
        </SwiperSlide>
    </Swiper>
  );
};