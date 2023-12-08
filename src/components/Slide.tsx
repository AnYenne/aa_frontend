"use client";
import { Button } from "@/components/ui/button";

import React, {
    useCallback,
    useRef,
    useEffect,
    useState,
    forwardRef,
    useLayoutEffect,
} from "react";
import { Icons } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import css from "styled-jsx/css";

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
];

type Image = (typeof bannerImages)[];

interface SlideProps {
    classNames?: string; //css image
    width?: string;
    height?: string;
    onClick: () => void;
    children: React.ReactNode; //img tag
    widthBloom?: number; //  bloom width
    bloomCSS?: string; //css bloom
    imagesNum: Image;
    widthBtnLarge?: boolean;
    widthBtnSmall?: boolean;
    BtnColor: string;
}

const Slide = ({
    classNames,
    width,
    height,
    onClick,
    bloomCSS,
    children,
    widthBloom,
    widthBtnLarge,
    widthBtnSmall,
    imagesNum,
    BtnColor,
}: SlideProps) => {
    const [clicked, setClicked] = useState(false);
    const childrenImage = useRef<HTMLImageElement | null>(null);
    const [transl, setTransl] = useState(0);
    const timeClick = imagesNum.length - 1;

    const HandleNext = (e: React.MouseEvent<HTMLDivElement>) => {
        setTransl((prev) => prev - 100);
        console.log(transl);
    };
    const HandleBack = (e: React.MouseEvent<HTMLDivElement>) => {
        setTransl((prev) => prev + 100);
        // console.log(transl);
        console.log(childrenImage.current?.clientWidth);
    };

    useLayoutEffect(() => {
        console.log(timeClick);
        if (transl < timeClick * -100) {
            setTransl(0);
        }
        console.log(timeClick);
        if (transl > 0) {
            setTransl(timeClick * -100);
        }
    }, [transl]);

    return (
        <div
            className={cn(
                "lg:w-full xl:w-full overflow-hidden sm:h-full relative"
            )}
        >
            <div
                ref={childrenImage}
                style={{
                    transition: "transform 2s",
                    transform: ` translateX(${transl}%)`,
                }}
                className={cn("flex flex-row w-full", classNames)}
            >
                {children}
            </div>
            <div className="lg:flex flex-row justify-between items-center w-full  absolute lg:top-2/4 hidden lg:-translate-y-2/4 ">
                <div
                    // ref={backBtn}
                    onClick={HandleBack}
                    className={cn(" p-4 lg:left-5 xl:left-20", BtnColor)}
                >
                    {widthBtnLarge && (
                        <Button className="rounded-full p-0   bg-yellow-900 hover:bg-yellow-800">
                            <Icons.chevronLeftCircleLarge />
                        </Button>
                    )}
                    {widthBtnSmall && (
                        <Button className="rounded-full p-0   bg-yellow-900 hover:bg-yellow-800">
                            <Icons.chevronLeftCircleSmall />
                        </Button>
                    )}
                </div>
                <div
                    // ref={nextBtn}
                    onClick={HandleNext}
                    className={cn("p-4 lg:right-5 xl:right-20", BtnColor)}
                >
                    {widthBtnLarge && (
                        <Button className="rounded-full p-0   bg-yellow-900 hover:bg-yellow-800">
                            <Icons.chevronRightCircleLarge />
                        </Button>
                    )}
                    {widthBtnSmall && (
                        <Button className="rounded-full p-0   bg-yellow-900 hover:bg-yellow-800">
                            <Icons.chevronRightCircleSmall />
                        </Button>
                    )}
                </div>
            </div>
            <div className="flex flex-row relative bottom-10  justify-center">
                {imagesNum &&
                    imagesNum.map((imageNum) => {
                        return (
                            <FontAwesomeIcon
                                onClick={(e: React.MouseEvent) => {
                                    setTransl(imageNum.id * -100 + 100);
                                }}
                                key={imageNum.id}
                                className={cn(
                                    `p-1 cursor-pointer  ${
                                        imageNum.id * -100 == transl - 100
                                            ? "text-yellow-900"
                                            : bloomCSS
                                    }`
                                )}
                                width="24"
                                icon={faCircle}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Slide;
