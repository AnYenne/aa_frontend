"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Icons } from "./Icons";
import test from "node:test";
import { transform } from "next/dist/build/swc";

interface ModalAccountProps {
    activeModal?: boolean;
    props: ReactNode;
    close: void;
}
const ModalAccount = ({ activeModal, close }: ModalAccountProps) => {
    const modal = useRef();
    const [animate, setAnimate] = useState("top-center");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setAnimate("top-center");
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [animate]);
    const closebtn = useRef();
    const handleClose = () => {
        setAnimate("center-top");
        close(false);
    };
    return (
        <div className="fixed inset-0 z-[60]  flex flex-row w-full min-h-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
            <div
                className={`bg-white p-4 rounded-md animate-${animate}`}
                ref={modal}
            >
                <div
                    className="w-full  flex flex-row items-center justify-end "
                    ref={closebtn}
                    onClick={handleClose}
                >
                    <div className="w-fit rounded-full p-1 hover:bg-gray-100 mb-2 cursor-pointer">
                        <Icons.close className="" />
                    </div>
                </div>
                <Tabs defaultValue="signIn" className="w-[500px]">
                    <TabsList className="grid w-full h-full grid-cols-2 ">
                        <TabsTrigger
                            className="text-xl font-Bold"
                            value="signIn"
                        >
                            Đăng Nhập
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-xl font-Bold"
                            value="signUp"
                        >
                            Đăng ký
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="signIn">
                        <Card>
                            <CardHeader>
                                <CardTitle></CardTitle>
                                <CardDescription>
                                    Đăng nhập tài khoản của bạn tại đây
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1 py-0.5 ">
                                    <Label htmlFor="username"></Label>
                                    <Input
                                        id="username"
                                        defaultValue=""
                                        placeholder="Nhập số điện thoại / email"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5 ">
                                    <Label htmlFor="password"></Label>
                                    <Input
                                        id="password"
                                        defaultValue=""
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="">
                                <Button className="">Đăng Nhập</Button>
                                <Button variant="ghost">quên mật khẩu</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signUp">
                        <Card>
                            <CardHeader>
                                <CardTitle></CardTitle>
                                <CardDescription>
                                    Tạo tài khoản để trải nghiệm mua hàng tại
                                    A&A
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1  py-0.5">
                                    <Label htmlFor="name"></Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Họ và tên"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5">
                                    <Label htmlFor="phonenumber"></Label>
                                    <Input
                                        id="phonenumber"
                                        type="tel"
                                        placeholder="Số điện thoại"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5">
                                    <Label htmlFor="email"></Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5">
                                    <Label htmlFor="dateofbirth"></Label>
                                    <Input
                                        id="dateofbirth"
                                        type="date"
                                        placeholder="Ngày sinh"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5">
                                    <Label htmlFor="password"></Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                <div className="space-y-1 py-0.5">
                                    <Label htmlFor="retypePassword"></Label>
                                    <Input
                                        id="retypePassword"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-row justify-between items-center">
                                <Button>Đăng ký</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ModalAccount;
