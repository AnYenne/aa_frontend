import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { Icons } from "./Icons";
import AddressPage from "@/app/user/address/page";
import { Interface } from "readline";

interface ModalNewProps {
    toggleClose: any;
    data:any
}

const ModalNewAddress = ({ toggleClose, data }: ModalNewProps) => {
    const [animate, setAnimate] = useState("top-center");
    const [isName, setName] = useState("");
    const [isPhone, setPhone] = useState("");
    const [isStreet, setStreet] = useState("");
    const [isCity, setCity] = useState("");
    const [isId, setId] = useState("");
    const [isDefault, setIsDefault] = useState(false);
    const [isUserid, setUserId] = useState();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setAnimate("top-center");
        console.log(data);

        return () => {
            document.body.style.overflow = "auto";
            console.log("clean up");
        };
    }, [animate]);

    const handleAdd = (data: any) => {
        console.log(data);
        var apiNew = `http://localhost:8002/v1/address/new/${isUserid}
`;
        fetch(apiNew, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
        handleClose();
    };

    const handleClose = () => {
        setAnimate("center-top");
        toggleClose(false);
    };
    return (
        <>
            <div className="fixed inset-0 z-[60]  flex flex-row w-full min-h-screen items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
                <div
                    className={`bg-white p-4 rounded-md animate-${animate} w-[500px] h-[460px]`}
                >
                    <h3 className="text-xl font-normal my-4">
                        Cập nhật địa chỉ
                    </h3>
                    <div className="flex flex-row justify-between items-center  ">
                        <div className="border  border-gray-400 py-2 rounded-sm mr-2 pr-6 relative">
                            {isName !== "" ? (
                                <label
                                    htmlFor="name"
                                    className="absolute -top-2 left-2 bg-white text-gray-500 text-sm "
                                >
                                    Họ và tên
                                </label>
                            ) : null}
                            <input
                                type="text"
                                id="name"
                                placeholder="họ và tên"
                                value={isName}
                                onChange={(e) => setName(e.target.value)}
                                className="block h-[25px] mx-2 outline-none "
                            ></input>
                        </div>
                        <div className="border  border-gray-400 py-2 rounded-sm ml-2 relative">
                            {isPhone !== "" ? (
                                <label
                                    htmlFor="phone"
                                    className="absolute -top-2 left-2 bg-white text-gray-500 text-sm "
                                >
                                    Số điện thoại
                                </label>
                            ) : null}
                            <input
                                type="text"
                                id="phone"
                                placeholder="số điện thoại"
                                value={isPhone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="block h-[25px] mx-2 outline-none "
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center relative my-4 border py-2 border-gray-400 rounded-sm">
                        {isCity !== "" ? (
                            <label
                                htmlFor="city"
                                className="absolute -top-2 left-2 bg-white text-gray-500 text-sm "
                            >
                                Tỉnh/ Thành phố, Quận/huyện, Phường/xã
                            </label>
                        ) : null}

                        <input
                            type="text"
                            id="city"
                            placeholder="Tỉnh/ Thành phố, Quận/huyện, Phường/xã"
                            value={isCity}
                            onChange={(e) => setCity(e.target.value)}
                            className="block h-[25px] mx-2 outline-none w-full"
                        ></input>
                    </div>
                    <div className="flex flex-row justify-between items-center relative my-4 border py-2 border-gray-400 rounded-sm">
                        {isStreet !== "" ? (
                            <label
                                htmlFor="street"
                                className="absolute -top-2 left-2 bg-white text-gray-500 text-sm "
                            >
                                Địa chỉ cụ thể
                            </label>
                        ) : null}

                        <input
                            type="text"
                            id="street"
                            placeholder="Địa chỉ cụ thể"
                            value={isStreet}
                            onChange={(e) => setStreet(e.target.value)}
                            className="block h-[25px] ml-2 outline-none "
                        ></input>
                    </div>
                    <div>
                        <p> Loại địa chỉ </p>
                        <div className="flex flex-row items-center justify-start mt-2">
                            <Button
                                className="mx-1 outline outline-yellow-900 outline-1 text-yellow-900"
                                variant="outline"
                            >
                                Nhà riêng
                            </Button>
                            <Button className="mx-1" variant="outline">
                                Văn phòng
                            </Button>
                        </div>
                    </div>
                    <div className="my-2 ">
                        {isDefault ? (
                            <div className="cursor-default opacity-40">
                                <input
                                    type="checkbox"
                                    value="isDefault"
                                    className=" checked:text-yellow-900 checked:bg-yellow-900"
                                    checked
                                ></input>
                                <label
                                    htmlFor="default"
                                    className="  opacity-2 ml-2"
                                >
                                    Đặt làm địa chỉ mặc định
                                </label>
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="checkbox"
                                    value="isDefault"
                                    className="mr-2 my-2"
                                ></input>
                                <label htmlFor="default">
                                    Đặt làm địa chỉ mặc định
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row justify-end">
                        <div>
                            <Button
                                className="mx-2 my-2 hover:bg-red-300"
                                variant="outline"
                                onClick={(e) => {
                                    handleClose();
                                }}
                            >
                                Trở về
                            </Button>
                        </div>
                        <Button
                            className="mx-2 my-2 bg-yellow-900 hover:bg-yellow-500"
                            variant="default"
                            onClick={(e) =>
                                handleAdd({
                                    street: isStreet,
                                    city: isCity,
                                    phone: isPhone,
                                    name: isName,
                                    isDefault,
                                })
                            }
                        >
                            Lưu
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalNewAddress;
