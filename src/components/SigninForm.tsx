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
import axios from "axios";

export default function SigninForm() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("required"),
            password: Yup.string().required("required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8001/v1/auth/login",
                formik.initialValues
            );

            // Xử lý response từ server, ví dụ: lưu token vào local storage.
            console.log(response.data);
        } catch (error) {
            // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi.
            console.error("Login failed", error);
        }
    };
    useEffect(() => {
        
    });
    return (
        <>
            <form id="form-1" className="px-6" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <div className="form__data space-y-2 py-1  flex flex-col items-start justify-center w-full ">
                        <Label htmlFor="email" className="text-lg text-yellow-600">
                            Số điện thoại hoặc email
                        </Label>
                        <Input
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            type="text"
                            className="py-6 rounded-lg focus-visible:outline-red-100  hover:border-red-300"
                        />
                        {formik.errors.email && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.email}
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
                        onClick={handleLogin}
                    >
                        Đăng Nhập
                    </Button>
                    <Button variant="ghost">quên mật khẩu</Button>
                </div>
            </form>
        </>
    );
}
