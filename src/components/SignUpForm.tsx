"use client";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import axios from "axios";
import Link from "next/link"; 
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";

export default function SignUpForm(props) {
    const [signEmail, setSignEmail] = useState(false);
    const [signOther, setSignOther] = useState(false);
    const emailBtn = useRef();
    const otherBtn = useRef();
    const backBtn = useRef();
    const [errorFromAPi, setErrorFromApi] = useState('')
    const router = useRouter();
    

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            password: "",
            confirmPass: "",
            phone: "",
            dob: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("required"),
            email: Yup.string()
                .matches(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    "please enter the valid email"
                )
                .required("required"),
            gender: Yup.string().required("required"),
            password: Yup.string()
                .required("required")
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    "between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
                )
                .min(6, "pass should over 6 characters"),
            confirmPass: Yup.string()
                .required("required")
                .oneOf([Yup.ref("password"), null], "password must match"),
            phone: Yup.string()
                .required("required")
                .matches(
                    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    "phone must be a valid number"
                ),
            dob: Yup.string()
                .required("required")
                .matches(
                    /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/,
                    "date of Birth need to valid"
                ),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const postApiSignUp =()=>{
        axios.post('http://localhost:8001/v1/auth/register', {
            name: `${formik.values.name}`,
            password: `${formik.values.password}`,
            phone: `${formik.values.phone}`,
            email: `${formik.values.email}`,
            gender: `${formik.values.gender}`,
            dob: `${formik.values.dob}`,
            })
            .then(response =>{
                console.log(response.data)
                switch(response.data.code){
                    case 409:
                        // console.log('409',response.data.message)
                        setErrorFromApi(response.data.message)
                        break;
                    case 201:
                        console.log('201',response.data.message)
                        setErrorFromApi('')

                        return  router.push('/signup/successfully')
                }

            })
            
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSignUp = () =>{
        if(JSON.stringify(formik.errors) === "{}"){
            postApiSignUp()
        } else {
            console.log(formik.errors)
        }
    }
    return (
        <div>
            <div className="absolute top-6 -left-12 " ref={backBtn}>
                <Button className="rounded-full py-4 px-2">
                    <Icons.arrowLeft />
                </Button>
            </div>
            {props.header == "true" && (
                <div className="text-center h-full w-full  mb-6 ">
                    <h3 className="text-yellow-900 text-4xl font-bold capitalize">
                        Tạo tài khoản tại A&A
                    </h3>
                </div>
            )}
            <div className="flex flex-col w-full my-2 items-center">
                <form
                    onSubmit={formik.handleSubmit}
                    className="space-y-2 px-6 w-full text-yellow-600"
                >
                    <div className="">
                        <div className="space-y-1  py-0.5">
                            <Label htmlFor="name"></Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Họ và tên"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.name && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.name}
                            </div>
                        )}
                        <div className="space-y-1 py-0.5 flex flex-row justify-between items-center">
                            <form className="flex flex-row  ">
                                <input
                                    type="radio"
                                    id="NAM"
                                    name="gender"
                                    value="NAM"
                                    className="cursor-pointer"
                                    checked={formik.values.gender == "NAM"}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="NAM" className="mr-6 ml-2">
                                    Nam
                                </label>
                                <input
                                    type="radio"
                                    id="NU"
                                    name="gender"
                                    value="NU"
                                    className="cursor-pointer"
                                    checked={formik.values.gender == "NU"}
                                    onChange={formik.handleChange}
                                />

                                <label htmlFor="NU" className="mr-6 ml-2">
                                    Nữ
                                </label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    className="cursor-pointer"
                                    checked={formik.values.gender == "other"}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="other" className="mr-6 ml-2">
                                    Khác
                                </label>
                            </form>
                        </div>
                        {formik.errors.gender && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.gender}
                            </div>
                        )}

                        <div className="space-y-1 py-0.5">
                            <Label htmlFor="phone"></Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Số điện thoại"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.phone && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.phone}
                            </div>
                        )}

                        <div className="space-y-1 py-0.5">
                            <Label htmlFor="email"></Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.email ||errorFromAPi && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.email || errorFromAPi}
                            </div>
                        )}

                        <div className="space-y-1 py-0.5">
                            <Label htmlFor="dob"></Label>
                            <Input
                                id="dob"
                                type="date"
                                placeholder="dd-mm-yyyy"
                                value={formik.values.dob}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.dob && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.dob}
                            </div>
                        )}

                        <div className="space-y-1 py-0.5">
                            <Label htmlFor="password"></Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Mật khẩu"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.password && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.password}
                            </div>
                        )}

                        <div className="space-y-1 py-0.5">
                            <Label htmlFor="confirmPass"></Label>
                            <Input
                                id="confirmPass"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={formik.values.confirmPass}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.confirmPass && (
                            <div className="text-red-600 items-start flex flex-row">
                                {formik.errors.confirmPass}
                            </div>
                        )}
                    </div>
                    <div >
                        {JSON.stringify(formik.errors) === "{}" ?
                        (<Button type="submit"  className="bg-yellow-600" onClick={handleSignUp}>
                            <button type="buton" >Đăng ký</button>
                        </Button>)
                        : 
                        (<Button type="submit" disabled className="bg-yellow-600 disabled:opacity-50" >
                            <button type="buton" >Đăng ký</button>
                        </Button>)
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}
