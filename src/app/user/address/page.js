"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { useEffect, useRef, useState } from "react";
import ModalUpdateAddress from "@/components/ModalUpdateAddress";
import ModalNewAddress from "@/components/ModalNewAddress";

const AddressPage = () => {
    // get idUser after login
    // const [idUser, setIdUser] = useState(1);
    const idUser = 1;
    // the address backup for api

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
    // initial data before fetch api
    const [data, setData] = useState([]);

    // fetch api from backend and set the deps are idUser and data
    useEffect(() => {
        var api = `http://localhost:8002/v1/address/list/${idUser}`;

        fetch(api)
            .then(function (response) {
                return response.json();
            })
            .then(function (address) {
                return setData(address.Data);
            })
            .catch(function (err) {
                console.log(err);
                return setData(addres);
            });
        return () => {};
    }, [idUser, data]);

    // useEffect(() => {
    //     const t = 2;
    //     var api = `http://localhost:8002/v1/address/list/${t}`;

    //     fetch(api)
    //         .then((response) => response.json())
    //         .then((address) => {
    //             console.log("adres: ", address);
    //             setData(address.Data);
    //         })
    //         .catch(function (err) {
    //             console.log("adres2: ", err);
    //             console.log(err);
    //             return setData(addres);
    //         });
    // }, [idUser, data]);

    // create toggle open-close for modals
    const [updateModal, setUpdateModal] = useState(false);
    const [addNewModal, setAddNewModal] = useState(false);
    const [currentInfor, setCurrentInfor] = useState({});
    const [currentElement, setCurrentElement] = useState(null);

    //  fn get exacly the data when the user taps on its button
    const handleGetInfor = (infor, dataForChild, idUser) => {
        // var currentDiv = infor.parentElement.parentElement;
        // setCurrentElement(currentDiv.id);
        dataForChild.user = idUser;
        setCurrentInfor(dataForChild);
        setUpdateModal(!updateModal);
    };

    // transform data from child to parent to connect toggle on-off
    const getDataFromChild = (datafromChild) => {
        setUpdateModal(datafromChild);
    };
    const getDataFromChildNew = (datafromChild) => {
        setAddNewModal(datafromChild);
    };

    //     const handleDelete = (dataId: number) => {
    //         console.log(data);
    //         var apiDelete = `delete api
    // `;
    //         fetch(apiDelete, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8",
    //             },
    //         })
    //             .then((response) => response.json())
    //             .then((data) => console.log("Delete successful:", data))
    //             .catch((error) => console.error("Error deleting resource:", error));
    //     };

    const handleDefault = (userId, addressId, value, listData) => {
        const setDefault = () => {
            var apiDefault = `http://localhost:8002/v1/address/set_default/${userId}/${addressId}`;
            fetch(apiDefault, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(value),
            })
                .then((response) => response.json())
                .then((data) => console.log("SetDefault successful:", data))
                .catch((error) =>
                    console.error("Error Set default resource:", error)
                );
        };
        const handleClearDefault = (listData, newId) => {
            for (var i = 0; i < listData.length; i++) {
                var iD = listData[i].id;
                if (listData[i].isDefault == "true" && iD !== newId) {
                    listData[i].isDefault = "false";
                }
            }
            var apiUpdateDefault = `http://localhost:8002/v1/address/update/${userId}/${addressId}`;
            fetch(apiUpdateDefault, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(value),
            })
                .then((response) => response.json())
                .then((data) => console.log(" successful:", data))
                .catch((error) =>
                    console.error("Error  resource:", error)
                );
        };
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
                            <Button
                                className="my-2 bg-yellow-900"
                                onClick={() => setAddNewModal(!addNewModal)}
                            >
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
                                                    key={addr.id}
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
                                                    <div className="flex flex-col w-[152px] items-center justify-center">
                                                        <div className="w-full">
                                                            <div className="w-full">
                                                                <Button
                                                                    className="w-full text-center"
                                                                    variant="ghost"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        handleGetInfor(
                                                                            e
                                                                                .currentTarget
                                                                                .parentElement,
                                                                            addr,
                                                                            idUser
                                                                        );
                                                                    }}
                                                                >
                                                                    Cập nhật
                                                                </Button>
                                                            </div>
                                                            {!addr.isDefault && (
                                                                <Button
                                                                    className="w-full"
                                                                    variant="ghost"
                                                                    // onClick={() => {
                                                                    //     handleDelete(
                                                                    //         addr.id
                                                                    //     );
                                                                    // }}
                                                                >
                                                                    Xóa
                                                                </Button>
                                                            )}
                                                        </div>
                                                        {!addr.isDefault && (
                                                            <Button
                                                                className="w-full mb-4 mt-2"
                                                                variant="outline"
                                                                onClick={() =>
                                                                    handleDefault()
                                                                }
                                                            >
                                                                Thiết lập mặc
                                                                định
                                                            </Button>
                                                        )}
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
            <div>
                {updateModal && (
                    <div className="">
                        <ModalUpdateAddress
                            toggleClose={getDataFromChild}
                            data={currentInfor}
                        />
                    </div>
                )}
                {addNewModal && (
                    <div className="">
                        <ModalNewAddress
                            toggleClose={getDataFromChildNew}
                            data={idUser}
                        />
                    </div>
                )}
            </div>
        </MaxWidthWrapper>
    );
};

export default AddressPage;
