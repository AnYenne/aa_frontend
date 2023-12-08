import { cn } from "@/lib/utils";

interface ProductCardProps {
    id?: number;
    src: string;
    name: string;
    price: number;
    discount?: number;
    size?: string;
    radius?: string;
}

const ProductCardPrice = ({
    id,
    src,
    name,
    price,
    discount,
    radius,
    size,
}: ProductCardProps) => {
    return (
        <div
            className={cn(
                `flex flex-col justify-center items-stretch max-w-60 rounded-md pl-6 ml-0 m-6`,
                size
            )}
        >
            <div className={cn("w-full lg:min-w-full", radius)}>
                <img
                    className={cn("bg-gray-100", radius)}
                    src={src}
                    title={name}
                ></img>
            </div>
            <p className="h-fit min-h-[40px] capitalize text-lg font-semibold mt-4 ">
                {name}
            </p>
            <p className="min-h-[40px] text-yellow-900 font-semibold text-lg ">
                {price}.000
            </p>
            {discount && <p>{discount}</p>}
        </div>
    );
};

export default ProductCardPrice;