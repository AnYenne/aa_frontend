"use client";
import React from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function SigninForm() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("required"),
            password: Yup.string().required("required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    useEffect(() => {
        const handleLogin = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:8002/v1/auth/login",
                    formik.initialValues
                );

                // Xử lý response từ server, ví dụ: lưu token vào local storage.
                console.log(response.data);
            } catch (error) {
                // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi.
                console.error("Login failed", error);
            }
        };
    });
    return (
        <>
            <form id="form-1" className="px-6" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <div className="form__data space-y-2 py-1  flex flex-col items-start justify-center w-full ">
                        <Label htmlFor="username" className="text-lg text-yellow-600">
                            Số điện thoại hoặc email
                        </Label>
                        <Input
                            id="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            type="text"
                            className="py-6 rounded-lg focus-visible:outline-red-100  hover:border-red-300"
                        />
                        {formik.errors.username && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.username}
                            </div>
                        )}
                    </div>
                    <div className="form-message"></div>
                </div>
                <div className="form-group mt-4">
                    <div className="form__data space-y-2 py-1  flex flex-col items-start justify-center w-full ">
                        <Label htmlFor="password" className="text-lg text-yellow-600">
                            Mật khẩu
                        </Label>
                        <Input
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            type="password"
                            className="py-6 rounded-lg focus-visible:outline-red-100 hover:border-red-300 "
                        />
                        {formik.errors.password && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.password}
                            </div>
                        )}
                    </div>
                    <div className="form-message"></div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Button
                        className="flex flex-row justify-between items-center my-6 bg-yellow-600"
                        type="submit"
                    >
                        Đăng Nhập
                    </Button>
                    <Button variant="ghost">quên mật khẩu</Button>
                </div>
            </form>
        </>
    );
}
