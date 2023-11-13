import React, { useState, useEffect } from "react";
import heart from "../../assets/homeImg/heart.png";
import eyes from "../../assets/homeImg/eyes.png";
import jostic from "../../assets/homeImg/jostic.svg";
import keyBoard from "../../assets/homeImg/keyboard.svg";
import TV from "../../assets/homeImg/TV.svg";
import chair from "../../assets/homeImg/chair.svg";
import Rating from "./Rating";
import RatingStar from "./Rating";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import VisitProduct from "../../pages/visitProduct/VisitProduct";




const ProductCard = ({ img, name, price, buttonName }) => {
    const [buttonBuy, setButtonBuy] = useState(false);

    const dispatch = useDispatch()


    return (
        <div
            className="mx-auto w-[90%]  mb-[30px]"
            onMouseLeave={() => setButtonBuy(false)}
            onMouseEnter={() => setButtonBuy(true)}
            onChange={(e) => setButtonBuy(e.target)}
        >
            <div
                className="bg-[#F5F5F5] rounded-[4px] mb-[16px] overflow-hidden h-[300px] flex flex-col "
                style={{ justifyContent: buttonBuy ? "space-between" : "start" }}
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
                        <Link to="visitProduct">
                            <img
                                onClick={() => dispatch(VisitProduct(e))}
                                src={eyes}
                                className=" mr-[0px] inline justify-self-center"
                                style={{cursor: "pointer"}}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={img}
                        className="mx-auto w-[100px] h-[150px]  object-cover m-auto"
                        // style={{ height: buttonBuy ? "83%" : "90%" }}
                        alt=""
                    />
                </div>
                {buttonBuy ? (

                    <button className="w-[100%] h-[41px] text-[#fff] bg-black ">
                        {buttonName}
                    </button>

                ) : null}
            </div>
            <div className="">
                <h3 className="mb-[8px] font-[500]">{name}</h3>
                <div className="mb-[8px] flex gap-[12px]">
                    <p className="text-[#DB4444] font-[500]">
                        {price == null || price == "" ? Date.now() % 1000 : price}
                    </p>
                    <p className="opacity-[0.5] line-through">$1160</p>
                </div>
                <RatingStar />
            </div>
        </div>
    );
};

export default ProductCard;