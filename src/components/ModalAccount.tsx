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
import SignUpForm from "./SignUpForm";
import SigninForm from "./SigninForm";

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
                    <TabsList className="grid w-full h-full grid-cols-2">
                        <TabsTrigger
                            className="text-xl font-Bold "
                            value="signIn"
                        >
                            Đăng Nhập
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-xl font-Bold "
                            value="signUp"
                        >
                            Đăng ký
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="signIn" >
                        <Card >
                            <CardHeader >
                                <CardTitle></CardTitle>
                                <CardDescription>
                                    Đăng nhập tài khoản của bạn tại đây
                                </CardDescription>
                            </CardHeader>
                            {/* <CardContent className="space-y-2">
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
                            </CardContent> */}
                            <SigninForm />
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
                            <div className="w-full">
                                <SignUpForm header="false" />
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ModalAccount;
