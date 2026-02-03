/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import NavBar from "../../components/navBar/NavBar";
import About from "../../components/outlines/About/About";
import Career from "../../components/outlines/Career";
import Snow from "../../components/Snow/Snow";
import { swiperContainer } from "./Home.style";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import Skill from "../../components/outlines/Skills/Skill";

const Home = () => {
    const [swiper, setSwiper] = useState<any>(null);

    return (
        <>
            <NavBar />
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                direction="vertical"
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                modules={[Mousewheel, Pagination]}
                css={swiperContainer}
            >
                <SwiperSlide>
                    <Snow />
                    <About />
                </SwiperSlide>

                <SwiperSlide>
                    <Snow />
                    <Career />
                </SwiperSlide>
                <SwiperSlide>
                    <Snow />
                    <Skill />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Home;