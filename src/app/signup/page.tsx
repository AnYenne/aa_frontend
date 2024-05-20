"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

import { useEffect, useRef, useState } from "react";
import SignUpForm from "@/components/SignUpForm";

const Signup = () => {
    const [signEmail, setSignEmail] = useState(false);
    const [signOther, setSignOther] = useState(false);
    const emailBtn = useRef();
    const otherBtn = useRef();
    const backBtn = useRef();
    // const [Name, setName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Sex, setSex] = useState("");
    // const [Password, setPassword] = useState("");
    // const [ConfirmPass, setConfirmPass] = useState("");
    // const [PhoneNum, setPhoneNum] = useState("");
    // const [DateOfBirth, setDateOfBirth] = useState("");

    useEffect(() => {
        const handleEmail = (e: MouseEvent) => {
            setSignEmail(true);
            console.log(signEmail);
        };
        emailBtn &&
            emailBtn.current &&
            emailBtn.current.addEventListener("click", handleEmail);
        return () => {
            emailBtn &&
                emailBtn.current &&
                emailBtn.current.removeEventListener("click", handleEmail);
        };
    });
    useEffect(() => {
        const handleOther = (e: MouseEvent) => {
            setSignOther(true);
            console.log(signEmail);
        };
        otherBtn &&
            otherBtn.current &&
            otherBtn.current.addEventListener("click", handleOther);
        return () => {
            otherBtn &&
                otherBtn.current &&
                otherBtn.current.removeEventListener("click", handleOther);
        };
    });
    useEffect(() => {
        const handleBack = (e: MouseEvent) => {
            setSignEmail(false) || setSignOther(false);
        };
        backBtn &&
            backBtn.current &&
            backBtn.current.addEventListener("click", handleBack);
        return () => {
            backBtn &&
                backBtn.current &&
                backBtn.current.removeEventListener("click", handleBack);
        };
    });

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
                        <div className="-my-6 py-6 w-3/4 relative">
                            {!signOther && !signEmail && (
                                <>
                                    <div className="text-center h-full w-full  mb-6 ">
                                        <h3 className="text-yellow-900 text-4xl font-bold capitalize">
                                            Tạo tài khoản tại A&A
                                        </h3>
                                    </div>

                                    <div className="" ref={otherBtn}>
                                        <Button className="py-6 text-lg w-3/4 my-2 rounded-3xl">
                                            Đăng ký bằng cách thức khác
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 my-6">
                                        <div className="bg-gray-300 h-px flex-1"></div>
                                        <span className="text-gray-500 text-sm px-2">
                                            Hoặc đăng nhập bằng
                                        </span>
                                        <div className="bg-gray-300 h-px flex-1"></div>
                                    </div>
                                    <div className=" " ref={emailBtn}>
                                        <Button
                                            className="py-6 text-lg  w-3/4 my-2 rounded-3xl"
                                            variant="outline"
                                        >
                                            Đăng ký bằng email / Số điện thoại
                                        </Button>
                                    </div>

                                    <div className="my-6">
                                        Đăng ký tài khoản là bạn đồng ý với các
                                        <p className="block">
                                            <a
                                                href="/"
                                                className="text-yellow-900 mx-1 "
                                            >
                                                điều khoản
                                            </a>
                                            ,
                                            <a
                                                href="/"
                                                className="text-yellow-900 mx-1 "
                                            >
                                                nguyên tắc
                                            </a>
                                            và
                                            <a
                                                href="/"
                                                className="text-yellow-900 mx-1 "
                                            >
                                                chính sách
                                            </a>
                                        </p>
                                        của A&A
                                    </div>

                                    <p className="text-gray-500 my-6">
                                        Đã có tài khoản?
                                        <a
                                            href="/"
                                            className="text-yellow-900 ml-4"
                                        >
                                            Đăng nhập
                                        </a>
                                    </p>
                                </>
                            )}

                            {signOther && (
                                <>
                                    <div
                                        className="absolute top-6 -left-12 "
                                        ref={backBtn}
                                    >
                                        <Button className="rounded-full py-4 px-2">
                                            <Icons.arrowLeft />
                                        </Button>
                                    </div>
                                    <div className="text-center h-full w-full  mb-6 ">
                                        <h3 className="text-yellow-900 text-4xl font-bold capitalize">
                                            Tạo tài khoản tại A&A
                                        </h3>
                                    </div>
                                    <div className="flex flex-col w-full my-2 items-center">
                                        <Button
                                            className=" w-3/4 my-2 rounded-3xl"
                                            variant="outline"
                                        >
                                            đăng nhập bằng google
                                        </Button>
                                        <Button
                                            className=" w-3/4 my-2 rounded-3xl"
                                            variant="outline"
                                        >
                                            đăng nhập bằng github
                                        </Button>
                                        <Button
                                            className=" w-3/4 my-2 rounded-3xl"
                                            variant="outline"
                                        >
                                            đăng nhập bằng facebook
                                        </Button>
                                        <Button
                                            className=" w-3/4 my-2 rounded-3xl"
                                            variant="outline"
                                        >
                                            đăng nhập bằng apple
                                        </Button>
                                    </div>
                                </>
                            )}
                            {signEmail && (
                                <>
                                    <SignUpForm header="true"></SignUpForm>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Signup;
