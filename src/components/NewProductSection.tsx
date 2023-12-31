"use client";
import { Subtitles } from "lucide-react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import ProductCardPrice from "@/components/ProductCardPrice";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

const mockApi = {
    Code: 200,
    Message: "Product found successfully",
    Data: {
        total: 14,
        currentTotal: 2,
        currentPage: 1,
        data: [
            {
                id: 9,
                name: "Dây chuyền kim cương",
                code: "DAYCHUYEN003",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-gbxmxmy006144-bong-tai-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "USA",
                material: "Kim cương",
                size: "40cm",
                warranty: "Lifetime",
                description: "Dây chuyền kim cương cao cấp, bền vững.",
                price: 499,
                category: "Dây chuyền",
                inventory: 5,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 1,
                name: "Vòng tay đá xanh",
                code: "VONGTAY001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-glxmxmy000993-lac-tay-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "Vietnam",
                material: "Đá",
                size: "Free size",
                warranty: "6 months",
                description: "Vòng tay đá xanh dành cho mọi lứa tuổi.",
                price: 25,
                category: "Vòng tay",
                inventory: 1,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 7,
                name: "Dây chuyền vàng hồng",
                code: "DAYCHUYEN001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-glxmxmy000997-lac-tay-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "France",
                material: "Vàng hồng 14K",
                size: "45cm",
                warranty: "1 year",
                description: "Dây chuyền vàng hồng 14K đẳng cấp.",
                price: 149,
                category: "Dây chuyền",
                inventory: 75,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 6,
                code: "KHUYENTAI",
                name: "Khuyên tai lấp lánh",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gcxmxmw000391-day-co-vang-14k-dinh-da-ecz-disney-pnj-snow-white-the-seven-dwarfs-d100-1.png",
                origin: "VN",
                material: "Kim cương",
                size: "nhỏ 4x6",
                warranty: "1 năm",
                description: "Khuyên tai lấp lánh phù hợp cho mọi lứa tuổi",
                price: 10,
                categoryId: 1,
                quantity: 10,
                discountId: 0,
            },
            {
                id: 5,
                name: "Dây chuyền kim cương",
                code: "DAYCHUYEN003",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-gbxmxmy006144-bong-tai-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "USA",
                material: "Kim cương",
                size: "40cm",
                warranty: "Lifetime",
                description: "Dây chuyền kim cương cao cấp, bền vững.",
                price: 499,
                category: "Dây chuyền",
                inventory: 5,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 4,
                name: "Vòng tay đá xanh",
                code: "VONGTAY001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-glxmxmy000993-lac-tay-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "Vietnam",
                material: "Đá",
                size: "Free size",
                warranty: "6 months",
                description: "Vòng tay đá xanh dành cho mọi lứa tuổi.",
                price: 25,
                category: "Vòng tay",
                inventory: 1,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 8,
                name: "Dây chuyền vàng hồng",
                code: "DAYCHUYEN001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gv0000w060419-vong-tay-vang-trang-y-18k-pnj-1.png",
                origin: "France",
                material: "Vàng hồng 14K",
                size: "45cm",
                warranty: "1 year",
                description: "Dây chuyền vàng hồng 14K đẳng cấp.",
                price: 149,
                category: "Dây chuyền",
                inventory: 75,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 3,
                code: "KHUYENTAI",
                name: "Khuyên tai lấp lánh",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gnxmxmw004435-nhan-vang-14k-dinh-da-ecz-disney-pnj-general-disney-princess-d100-1.png",
                origin: "VN",
                material: "Kim cương",
                size: "nhỏ 4x6",
                warranty: "1 năm",
                description: "Khuyên tai lấp lánh phù hợp cho mọi lứa tuổi",
                price: 10,
                categoryId: 1,
                quantity: 10,
                discountId: 0,
            },
            {
                id: 2,
                code: "KHUYENTAI",
                name: "Khuyên tai lấp lánh",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gnxmxmw004434-nhan-vang-14k-dinh-da-ecz-disney-pnj-snow-white-the-seven-dwarfs-d100-1.png",
                origin: "VN",
                material: "Kim cương",
                size: "nhỏ 4x6",
                warranty: "1 năm",
                description: "Khuyên tai lấp lánh phù hợp cho mọi lứa tuổi",
                price: 10,
                categoryId: 1,
                quantity: 10,
                discountId: 0,
            },
            //
            //
            //
            //
            // \
            //
            {
                id: 4,
                name: "Vòng tay đá xanh",
                code: "VONGTAY001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-glxmxmy000993-lac-tay-vang-14k-dinh-da-cz-pnj-01.png",
                origin: "Vietnam",
                material: "Đá",
                size: "Free size",
                warranty: "6 months",
                description: "Vòng tay đá xanh dành cho mọi lứa tuổi.",
                price: 25,
                category: "Vòng tay",
                inventory: 1,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 8,
                name: "Dây chuyền vàng hồng",
                code: "DAYCHUYEN001",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gv0000w060419-vong-tay-vang-trang-y-18k-pnj-1.png",
                origin: "France",
                material: "Vàng hồng 14K",
                size: "45cm",
                warranty: "1 year",
                description: "Dây chuyền vàng hồng 14K đẳng cấp.",
                price: 149,
                category: "Dây chuyền",
                inventory: 75,
                createdAt: "2023-11-30T21:51:36.000Z",
                updatedAt: "2023-11-30T21:51:36.000Z",
                deletedAt: null,
            },
            {
                id: 3,
                code: "KHUYENTAI",
                name: "Khuyên tai lấp lánh",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gnxmxmw004435-nhan-vang-14k-dinh-da-ecz-disney-pnj-general-disney-princess-d100-1.png",
                origin: "VN",
                material: "Kim cương",
                size: "nhỏ 4x6",
                warranty: "1 năm",
                description: "Khuyên tai lấp lánh phù hợp cho mọi lứa tuổi",
                price: 10,
                categoryId: 1,
                quantity: 10,
                discountId: 0,
            },
            {
                id: 2,
                code: "KHUYENTAI",
                name: "Khuyên tai lấp lánh",
                images: "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gnxmxmw004434-nhan-vang-14k-dinh-da-ecz-disney-pnj-snow-white-the-seven-dwarfs-d100-1.png",
                origin: "VN",
                material: "Kim cương",
                size: "nhỏ 4x6",
                warranty: "1 năm",
                description: "Khuyên tai lấp lánh phù hợp cho mọi lứa tuổi",
                price: 10,
                categoryId: 1,
                quantity: 10,
                discountId: 0,
            },
        ],
    },
};

interface NewProductProps {
    children?: React.ReactNode;
    title?: string;
    subTitle?: string;
}

const NewProductSection = ({ children, title, subTitle }: NewProductProps) => {
    const parentDiv = useRef<HTMLDivElement | null>(null);
    const lists = useRef<HTMLDivElement | null>(null);
    const [translate, setTranslate] = useState(0);
    const [space, setSpace] = useState(0);
    const [disableLeft, setDisableLeft] = useState(true);
    const [disableRight, setDisableRight] = useState(false);

    const handleNext = () => {
        console.log("width:" + lists.current.scrollWidth);
        console.log("div" + parentDiv.current?.clientWidth);
        console.log("translate" + translate);
        console.log("space" + space);

        if (lists.current.scrollWidth - parentDiv.current?.clientWidth !== 0) {
            if (space >= parentDiv.current?.clientWidth) {
                setTranslate((pre) => pre + parentDiv.current?.clientWidth);
            } else {
                setTranslate((pre) => pre + space);
            }
        } else {
            setTranslate(0);
        }
    };
    const handleBack = () => {
        console.log("width:" + lists.current.scrollWidth);
        console.log("div" + parentDiv.current?.clientWidth);
        console.log("translate" + translate);
        console.log("space" + space);

        if (lists.current.scrollWidth - parentDiv.current?.clientWidth !== 0) {
            if (translate <= parentDiv.current?.clientWidth) {
                setTranslate(0);
            } else if (translate > parentDiv.current?.clientWidth) {
                setTranslate((pre) => pre - parentDiv.current?.clientWidth);
            }
        } else {
            setTranslate(0);
        }
    };

    useLayoutEffect(() => {
        setSpace(
            lists.current.scrollWidth -
                parentDiv.current?.clientWidth -
                translate
        );
        if (
            translate ===
            lists.current.scrollWidth - parentDiv.current?.clientWidth
        ) {
            setDisableRight(true);
            setDisableLeft(false);
        } else if (translate === 0) {
            setDisableLeft(true);
        } else {
            setDisableLeft(false);
            setDisableRight(false);
        }
    }, [translate, space]);

    return (
        <div className="max-container lg:w-full sm:w-full max-sm:mt-12">
            <div className="flex flex-row items-center">
                <h2 className="font-bold text-3xl text-yellow-900 leading-9 capitalize">
                    {title || "Flash sale"}
                </h2>
                <span className="ml-6 leading-9 text-3xl">
                    {subTitle || "timeline"}
                </span>
            </div>
            <div className="flex flex-row flex-grow w-full h-full items-center justify-end shrink ">
                {(disableLeft && (
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 user-select: none opacity-20"
                        variant="ghost"
                    >
                        <Icons.arrowLeft />
                    </Button>
                )) || (
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 hover:bg-gray-300 m-2"
                        variant="ghost"
                        onClick={handleBack}
                    >
                        <Icons.arrowLeft />
                    </Button>
                )}
                {(disableRight && (
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 user-select: none opacity-20"
                        variant="ghost"
                    >
                        <Icons.arrowRight />
                    </Button>
                )) || (
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 hover:bg-gray-300 m-2"
                        variant="ghost"
                        onClick={handleNext}
                    >
                        <Icons.arrowRight />
                    </Button>
                )}
            </div>
            {/* overflow-hidden */}
            <div className="overflow-hidden" ref={parentDiv}>
                <ul
                    style={{
                        transition: "transform 2s",
                        transform: ` translateX(-${translate}px)`,
                    }}
                    className="flex flex-row justify-start items-center w-fit"
                    ref={lists}
                >
                    {children ||
                        mockApi.Data.data.map((product) => {
                            return (
                                <li className="">
                                    <ProductCardPrice
                                        size="w-60"
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        src={product.images}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default NewProductSection;
