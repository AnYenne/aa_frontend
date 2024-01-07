import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import Filter from "@/components/Filter";
import NewProductSection from "@/components/NewProductSection";
import ProductCatalogRounded from "@/components/ProductCatalogRounded";
import ProductCardPrice from "@/components/ProductCardPrice";
import { ReactNode } from "react";
import Sort from "@/components/Sort";

interface productProps {
    children?: ReactNode;
}

const Products = ({ children }: productProps) => {
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
    return (
        <MaxWidthWrapper>
            <div className="mx-auto w-full  sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl">
                <div className="my-4 w-full ">
                    <h3 className="text-2xl font-bold inline-block">
                        Products list page
                    </h3>
                    <span className=" mx-4 text-lg text-gray-800">
                        125 quantity products
                    </span>
                </div>
                <div className="border-b h-1 border-l-gray-800 mb-4"></div>
                <div className="w-full flex flex-row  ">
                    <div className="w-3/5">
                        <Filter />
                    </div>
                    <div className="flex-grow ">
                        <div>
                            <Sort />
                        </div>
                        <ul className="flex flex-row justify-center items-center flex-wrap">
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
            </div>
        </MaxWidthWrapper>
    );
};
export default Products;
