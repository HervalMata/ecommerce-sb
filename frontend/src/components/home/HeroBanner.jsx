import {Swiper, SwiperSlide} from "swiper/react";
import {bannerLists} from "../../utils/index.js";
import {Link} from "@mui/material";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import "swiper/css"
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'

const colors = ["bg-banner-color-1", "bg-banner-color-2", "bg-banner-color-3"];

const HeroBanner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor={true}
                autoPlay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
            >
                {bannerLists.map((item, i) => (
                   <SwiperSlide key={item.id}>
                       <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                           <div className="flex items-center justify-center">
                               <div className="hidden lg:flex justify-center w-1/2 p-8">
                                   <div className="text-center">
                                       <h3 className="text-3xl text-pink-500 font-bold">{item.title}</h3>
                                       <h1 className="text-5xl text-pink-500 font-bold mt-2">{item.subtitle}</h1>
                                       <p className="text-pink-500 font-bold mt-4">{item.description}</p>
                                       <Link
                                           className="mt-6 inline-block bg-black text-pink-500 py-2 px-4 rounded hover:bg-gray-800"
                                           to="/products">Loja</Link>
                                   </div>
                               </div>
                               <div className="w-full flex justify-center lg:w-1/2 p-4">
                                   <img src={item?.image} alt="" />
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroBanner;