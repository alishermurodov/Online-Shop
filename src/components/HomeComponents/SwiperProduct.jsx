import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import jostic from '../../assets/homeImg/jostic.svg';
import heart from "../../assets/homeImg/heart.png";
import eyes from "../../assets/homeImg/eyes.png";
import keyBoard from '../../assets/homeImg/keyboard.svg';
import TV from '../../assets/homeImg/TV.svg';
import chair from '../../assets/homeImg/chair.svg';
import RatingStar from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../reducers/online-shop';

export default function SwiperProduct() {
    const [activeCard, setActiveCard] = useState(null);
    const products = useSelector((store) => store.onlineShop.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <div className="w-[]">
            <Swiper
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {products?.map((e, i) => {
                    return (
                        <div key={e?.id} className="bg-[#000]">
                            <SwiperSlide>
                                <div
                                    className="mx-auto w-[90%]  mb-[30px]"
                                    onMouseLeave={() => setActiveCard(null)}
                                    onMouseEnter={() => setActiveCard(i)}
                                >
                                    <div
                                        className="bg-[#F5F5F5] rounded-[4px] mb-[16px] overflow-hidden h-[300px] flex flex-col"
                                        style={{ justifyContent: activeCard === i ? "space-between" : "start" }}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="bg-[#DB4444] w-[55px] h-[26px] text-[#fff] flex items-center m-[12px]">
                                                <p>-40%</p>
                                            </div>
                                            <div className="text-center grid">
                                                <img
                                                    className="m-[12px] inline justify-self-center"
                                                    src={heart}
                                                    alt=""
                                                />
                                                <img
                                                    src={eyes}
                                                    className="mr-[0px] inline justify-self-center"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={"http://localhost:3000/" + products[i]?.media[0]?.src}
                                                className="mx-auto w-[100px] h-[150px]  object-cover m-auto"
                                                alt=""
                                            />
                                        </div>
                                        {activeCard === i && (
                                            <button className="w-[100%] h-[41px] text-[#fff] bg-black">
                                                Add To Cart
                                            </button>
                                        )}
                                    </div>
                                    <div className="">
                                        <h3 className="mb-[8px] font-[500]">{e?.name}</h3>
                                        <div className="mb-[8px] flex gap-[12px]">
                                            <p className="text-[#DB4444] font-[500]">
                                                {e?.price}
                                            </p>
                                            <p className="opacity-[0.5] line-through">$1160</p>
                                        </div>
                                        <RatingStar />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    );
                })}
            </Swiper>
        </div>
    );
}
