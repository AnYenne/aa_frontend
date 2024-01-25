"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { useEffect, useState } from "react";
import ModalUpdateAddress from "@/components/ModalUpdateAddress";

const AddressPage = () => {
    const [id, setId] = useState(1);
    const addres = [
        {
            id: 1,
            name: "Ti tò",
            phone: "03124192349",
            street: "43 dường jkfj",
            city: "phường 17, quận 10, Hồ Chí Minh",
            isDefault: true,
        },
        {
            id: 2,
            name: "Ti tò 2",
            phone: "03124192349",
            street: "43 dường jkfj",
            city: "phường 17, quận 10, Hồ Chí Minh",
            isDefault: false,
        },
        {
            id: 3,
            name: "Ti tò 3",
            phone: "03124192349",
            street: "43 dHoàng",
            city: "quận 8 Hồ Chí Minh",
            isDefault: false,
        },
    ];
    var api = `http://localhost:8002/v1/address/list/${id}`;
    useEffect(() => {
        fetch(api)
            .then(function (response) {
                return response.json();
            })
            .then(function (address) {
                setData(address.Data);
            })
            .catch(function (err) {
                console.log(err);
                setData(addres);
            });
    }, [api]);

    useEffect(() => {
        
    })

    const [data, setData] = useState();
    const [updateModal, setUpdateModal] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);

    const getInfor = (infor) => {
        var currentDiv = infor.parentElement.parentElement;
        setCurrentElement(currentDiv.id);
    };

    const openModalUpdateAddress = (addr, currentElement) => {
        if (addr.id == currentElement) {
            console.log("id" + addr.id + "curre" + currentElement);
            return (
                <ModalUpdateAddress
                    id={addr.id}
                    name={addr.name}
                    phone={addr.phone}
                    street={addr.street}
                    city={addr.city}
                    is_default={addr.isDefault}
                    close={updateModal}
                />
            );
        } else return null;
    };

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
                                    className="w-full py-2 my-2 rounded-none hover:rounded-sm border-b border-gray-200"
                                    variant="ghost"
                                >
                                    Lịch sử đặt hàng
                                </Button>
                            </Link>
                            <Link href="/user/address" className="w-full">
                                <Button
                                    className="w-full py-2  bg-gray-200  my-2 rounded-none hover:rounded-sm border-b border-gray-200"
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
                    <div className="flex-grow border border-gray-200 shadow-lg p-6 my-4 mx-8 rounded-md w-full ">
                        <div className="flex flex-row justify-between items-center border-b border-gray-400">
                            <h4 className="font-semibold">Địa chỉ của tôi</h4>
                            <Button className="my-2 bg-yellow-900">
                                Thêm địa chỉ mới
                            </Button>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full">
                            <h4>Địa chỉ</h4>
                            <div className="flex flex-row  justify-between w-full ">
                                <div className="flex flex-col w-full">
                                    {data &&
                                        data.map((addr, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    id={addr.id}
                                                    className="flex flex-row justify-between items-center border-b my-2 border-gray-200"
                                                >
                                                    <div className="flex flex-col items-start justify-center w-full">
                                                        <div className="flex flex-row">
                                                            <h3 className="font-semibold">
                                                                {addr.name}
                                                            </h3>
                                                            <p className="ml-4 px-2 border-l border-gray-400">
                                                                {addr.phone}
                                                            </p>
                                                        </div>
                                                        <p>{addr.street}</p>
                                                        <p>{addr.city}</p>
                                                        {addr.isDefault && (
                                                            <span className="p-1 mt-2 mr-2 mb-2 border border-red-200">
                                                                Mặc định
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div>
                                                            <Button
                                                                variant="ghost"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    getInfor(
                                                                        e
                                                                            .currentTarget
                                                                            .parentElement
                                                                    );

                                                                    setUpdateModal(
                                                                        true
                                                                    );
                                                                }}
                                                            >
                                                                {updateModal &&
                                                                    openModalUpdateAddress(
                                                                        addr,
                                                                        currentElement
                                                                    )}
                                                                Cập nhật
                                                            </Button>
                                                            {!addr.isDefault && (
                                                                <Button variant="ghost">
                                                                    Xóa
                                                                </Button>
                                                            )}
                                                        </div>
                                                        <Button
                                                            variant="outline"
                                                            className="mb-4 mt-2"
                                                        >
                                                            Thiết lập mặc định
                                                        </Button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default AddressPage;
