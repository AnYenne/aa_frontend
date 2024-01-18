import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const User = () => {
    return (
        <MaxWidthWrapper>
            <div className="mx-auto w-full  sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl text-center flex flex-col items-center">
                <div className="flex w-full">
                    <div className="">
                        <div className="flex flex-col ">
                            <Link href="/user" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2  bg-gray-200 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Tài khoản
                                </Button>
                            </Link>
                            <Link href="/user/order-history" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Lịch sử đặt hàng
                                </Button>
                            </Link>
                            <Link href="/user/address" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Địa chỉ đặt hàng
                                </Button>
                            </Link>
                            <Link href="/user/favorite" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Yêu thích
                                </Button>
                            </Link>
                            <Link href="/user/suggest-items" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Giới thiệu sản phẩm
                                </Button>
                            </Link>
                            <Link href="/user/setting" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Cài đặt
                                </Button>
                            </Link>
                            <Link href="/user/card-payment" className="w-full">
                                <Button
                                    className=" w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    thông tin thanh toán
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow border border-gray-200 shadow-lg my-4 mx-8 rounded-md">
                        <div className="flex flex-grow border-b border-gray-300 mx-4 items-center justify-between">
                            <div className="flex flex-row items-center justify-start py-2  ">
                                <div>
                                    <img
                                        className="rounded-full "
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJr8TGx54dMnRSKrxWlT3-qaMBfvZggcbtSkG4jpWoAZxNJnjjBnr&usqp=CAE&s"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center ml-4">
                                    <h3 className="text-lg font-semibold">
                                        Alexsander để đại
                                    </h3>
                                    <div className="text-sm font-normal">
                                        benhoccutephomaique@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end">
                                <div>
                                    Hello,
                                    <span className="font-bold">user!</span>
                                    <a href="/user">
                                        <span className="ml-2 text-yellow-700 font-semibold">
                                            Đăng xuất
                                        </span>
                                    </a>
                                </div>
                                <div>
                                    Không phải bạn?
                                    <a
                                        href="/signin"
                                        className=" text-yellow-700"
                                    >
                                        <span className="ml-2">
                                            Đăng nhập tài khoản của bạn
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 mx-8">
                            <div className="shadow-sm">
                                địa chỉ, abchsjsjsjsj
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default User;
