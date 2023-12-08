"use client";
import React, {
    useCallback,
    useRef,
    useEffect,
    useState,
    useImperativeHandle,
} from "react";

import Slide from "@/components/Slide";
const bannerImages = [
    {
        id: 1,
        name: "hinh1",
        src: "https://cdn.pnj.io/images/promo/191/kimcuong-t11-1200x450CTA.jpg",
    },
    {
        id: 2,
        name: "hinh2",
        src: "https://cdn.pnj.io/images/promo/191/day-chuyen-t11-1200x450-CTA.jpg",
    },
    {
        id: 3,
        name: "hinh3",
        src: "https://cdn.pnj.io/images/promo/187/phong-thuy-t10-1200x450-CTA.jpg",
    },
    {
        id: 4,
        name: "hinh1",
        src: "https://cdn.pnj.io/images/promo/195/disney-t12-1200X450CTA__8_.jpg",
    },
    {
        id: 5,
        name: "hinh2",
        src: "https://cdn.pnj.io/images/promo/191/day-chuyen-t11-1200x450-CTA.jpg",
    },
    {
        id: 6,
        name: "hinh3",
        src: "https://cdn.pnj.io/images/promo/194/Tabsale_Style_t12_1200x450-CTA.png",
    },
    {
        id: 7,
        name: "hinh1",
        src: "https://cdn.pnj.io/images/promo/191/ngoc-trai-t11-1200x450-2.jpg",
    },
    {
        id: 8,
        name: "hinh2",
        src: "https://cdn.pnj.io/images/promo/194/ts_cuoi_t12-1200x450CTA.jpg",
    },
    {
        id: 9,
        name: "hinh3",
        src: "	https://cdn.pnj.io/images/promo/195/ldp-y-t12-1200x450-cta.jpg",
    },
];

const SlideShow = () => {
    return (
        <Slide
            classNames="xl:w-full"
            widthBtnLarge
            BtnColor="text-white"
            bloomCSS="text-white"
            imagesNum={bannerImages}
        >
            {bannerImages.map((image) => {
                return (
                    <img
                        className="object-cover xl:min-w-full"
                        key={image.id}
                        src={image.src}
                    />
                );
            })}
        </Slide>
    );
};
export default SlideShow;
