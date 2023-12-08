import { Subtitles } from "lucide-react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import ProductCardPrice from "@/components/ProductCardPrice";
import { cn } from "@/lib/utils";

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
        ],
    },
};

interface ProductCatalogRoundedProps {
    classNames?: string;
    children?: React.ReactNode;
    title?: string;
    subTitle?: string;
    size?: string;
}

const ProductCatalogRounded = ({
    classNames,
    children,
    title,
    subTitle,
    size,
}: ProductCatalogRoundedProps) => {
    return (
        <div
            className={cn(
                `max-container mt-2  lg:mt-4 lg:w-full max-sm:mt-12`,
                classNames
            )}
        >
            <div className="flex flex-row items-center">
                <h2 className="font-bold text-3xl text-yellow-900 leading-9 capitalize mt-4 -mb-6">
                    {title || "Flash sale"}
                </h2>
                {subTitle && (
                    <span className="ml-6 leading-9 text-3xl">
                        {subTitle || ""}
                    </span>
                )}
            </div>

            <div className="relative mt-12">
                <ul className="flex flex-row justify-start items-center w-full overflow-hidden -mt-12">
                    {children ||
                        mockApi.Data.data.map((product) => {
                            return (
                                <li className="">
                                    <ProductCardPrice
                                        size={size}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        src={product.images}
                                    />
                                </li>
                            );
                        })}
                </ul>
                <div className="absolute top-1/2 -translate-y-full flex flex-row  w-full items-center justify-between ">
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 hover:bg-gray-300 m-2"
                        variant="ghost"
                    >
                        <Icons.arrowLeft />
                    </Button>
                    <Button
                        className="rounded-full p-0 w-[60px] h-[60px] bg-gray-50 hover:bg-gray-300 m-2"
                        variant="ghost"
                    >
                        <Icons.arrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCatalogRounded;
