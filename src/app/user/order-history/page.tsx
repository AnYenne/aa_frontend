import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderPage = () => {
    return (
        <MaxWidthWrapper>
            <div className="mx-auto w-full  sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl text-center flex flex-col items-center">
                <div className="flex w-full">
                    <div className="">
                        <div className="flex flex-col ">
                            <Link href="/user" className="w-full">
                                <Button
                                    className="w-full py-2 my-2  rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Tài khoản
                                </Button>
                            </Link>
                            <Link href="/user/order-history" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 w-full bg-gray-200 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Lịch sử đặt hàng
                                </Button>
                            </Link>
                            <Link href="/user/address" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Địa chỉ đặt hàng
                                </Button>
                            </Link>
                            <Link href="/user/favorite" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Yêu thích
                                </Button>
                            </Link>
                            <Link href="/user/suggest-items" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Giới thiệu sản phẩm
                                </Button>
                            </Link>
                            <Link href="/user/setting" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Cài đặt
                                </Button>
                            </Link>
                            <Link href="/user/card-payment" className="w-full">
                                <Button
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    thông tin thanh toán
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow border border-gray-200 shadow-lg my-4 mx-8 rounded-md ">
                        <p>Hello, You have not placed an order yet.</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default OrderPage;
