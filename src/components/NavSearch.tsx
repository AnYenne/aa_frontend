import { Icons } from "./Icons";
import { Button } from "@/components/ui/button";

const NavSearch = () => {
    return (
        <div className=" flex items-center w-full lg:max-w-screen-lg bg-gray-200 rounded-xl">
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="flex-grow flex-1 bg-transparent h-full w-full p-2 border-transparent outline-transparent text-xl text-yellow-900"
            ></input>
            <Button className="bg-yellow-900 hover:opacity-75 hover:bg-yellow-900 ">
                <div className="flex flex-row items-center justify-between px-3">
                    <Icons.search className="h-6 w-6 p-3 items-center justify-center" />
                </div>
            </Button>
        </div>
    );
};

export default NavSearch;
