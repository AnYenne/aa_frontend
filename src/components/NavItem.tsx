"use client";
import { useContext, useState } from "react";
import { Icons } from "./Icons";
import ModalAccount from "./ModalAccount";
import { Button } from "./ui/button";
import { PcCaseIcon } from "lucide-react";

interface NavItemProps {}

function NavItem({}: NavItemProps) {
    const [activeModal, setActiveModal] = useState(false);
    const handleClick = () => {
        setActiveModal(!activeModal);
    };
    const handleClose = (closeParen) => {
        setActiveModal(closeParen);
    };

    return (
        <div>
            <div>
                <div className="text-yellow-600 text-xs">
                    <Button className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.notification />
                            <p className="text-xs">Thông báo</p>
                        </div>
                    </Button>
                    <Button onClick={handleClick} className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.account />
                            <p className="text-xs">Tài Khoản</p>
                        </div>
                    </Button>
                    {/* <Button className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.account />
                            <p className="text-xs">Đăng nhập</p>
                        </div>
                    </Button>
                    <Button className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.signUp />
                            <p className="text-xs">Đăng ký</p>
                        </div>
                    </Button> */}

                    <Button className="-mr-4" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.cart />
                            <p className="text-xs">Giỏ hàng (100)</p>
                        </div>
                    </Button>
                </div>
            </div>
            {activeModal && (
                <div className="">
                    <ModalAccount close={handleClose} />
                </div>
            )}
        </div>
    );
}

export default NavItem;
