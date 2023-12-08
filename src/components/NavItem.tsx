import { Icons } from "./Icons";
import { Button } from "./ui/button";

function NavItem() {
    return (
        <div className="text-yellow-600 text-xs  ">
            <Button className="" variant="ghost">
                <div className="flex flex-col items-center">
                    <Icons.notification />
                    <p className="text-xs">Thông báo</p>
                </div>
            </Button>
            <Button className="" variant="ghost">
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
            </Button>

            <Button className="" variant="ghost">
                <div className="flex flex-col items-center">
                    <Icons.cart />
                    <p className="text-xs">Giỏ hàng (100)</p>
                </div>
            </Button>
        </div>
    );
}

export default NavItem;
