import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import Link from "next/link";

const Signin = () => {
    return (
        <MaxWidthWrapper>
            <div className="mx-auto w-full  sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl text-center flex flex-col items-center">
                <div className="w-full flex flex-row items-center rounded-3xl mt-10">
                    <div className="w-2/4 h-full ">
                        <img
                            className="rounded-3xl"
                            alt="hinh nen dang nhap"
                            src="https://lili.vn/wp-content/uploads/2020/12/day-chuyen-bac-mat-pha-le-swaroski-trai-tim-dai-duong-LILI_295787-1-1.jpg"
                        ></img>
                    </div>
                    <div className="w-2/4 h-full flex flex-col items-center justify-start ml-6">
                        <div className="-my-6 py-6">
                            <div className="flex flex-row justify-between items-center h-full w-full  mb-6 ">
                                <Icons.logo className="h-full w-16 mr-20 " />
                                <h3 className="text-yellow-900 text-3xl font-bold capitalize">
                                    Chào mừng bạn trở lại
                                </h3>
                            </div>

                            <div className="w-full flex flex-col justify-center items-">
                                <div className="space-y-2 py-1  flex flex-col items-start justify-center w-full ">
                                    <Label
                                        htmlFor="username"
                                        className="text-lg"
                                    >
                                        Số điện thoại hoặc email
                                    </Label>
                                    <Input
                                        id="username"
                                        defaultValue=""
                                        type="text"
                                        className="py-6 rounded-lg focus-visible:outline-red-100  hover:border-red-300"
                                    />
                                </div>
                                <div className="space-y-2 py-1 flex flex-col items-start justify-center w-full mt-4">
                                    <Label
                                        htmlFor="password"
                                        className="text-lg "
                                    >
                                        Mật khẩu
                                    </Label>
                                    <Input
                                        id="password"
                                        defaultValue=""
                                        type="password"
                                        className="py-6 rounded-lg focus-visible:outline-red-100 hover:border-red-300 "
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center my-6">
                                <Button className="">Đăng Nhập</Button>
                                <Button variant="ghost">quên mật khẩu</Button>
                            </div>
                            <div class="flex items-center justify-center space-x-2">
                                <div class="bg-gray-300 h-px flex-1"></div>
                                <span class="text-gray-500 text-sm px-2">
                                    Hoặc đăng nhập bằng
                                </span>
                                <div class="bg-gray-300 h-px flex-1"></div>
                            </div>
                            <div className="flex flex-col w-full my-2">
                                <Button
                                    className="my-2 rounded-3xl"
                                    variant="outline"
                                >
                                    đăng nhập bằng google
                                </Button>
                                <Button
                                    className="my-2 rounded-3xl"
                                    variant="outline"
                                >
                                    đăng nhập bằng github
                                </Button>
                                <Button
                                    className="my-2 rounded-3xl"
                                    variant="outline"
                                >
                                    đăng nhập bằng facebook
                                </Button>
                                <Button
                                    className="my-2 rounded-3xl"
                                    variant="outline"
                                >
                                    đăng nhập bằng apple
                                </Button>
                            </div>
                            <p className="text-gray-500">
                                Nếu chưa có tài khoản?
                                <a href="/" className="text-yellow-900 ml-4">
                                    Đăng ký
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Signin;