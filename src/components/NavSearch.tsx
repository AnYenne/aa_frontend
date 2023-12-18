import { Icons } from "./Icons";
import { Button } from "@/components/ui/button";

const NavSearch = () => {
    return (
        <div className=" flex items-center w-full h-full  lg:max-w-screen-lg bg-transparent rounded-e-none border-b border-gray-300  ">
            <div className="min-h-full  ">
                <Icons.search className="" />
            </div>
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="flex-grow bg-transparent
                focus-visible:outline-0 h-12 w-full ml-2  p-2 border-transparent outline-0  text-xl text-yellow-900"
            ></input>
            {/* <Button className="bg-yellow-900 hover:opacity-75 hover:bg-yellow-900 ">
                <div className="flex flex-row items-center justify-between px-3">
                    <Icons.search className="h-6 w-6 p-3 items-center justify-center" />
                </div>
            </Button> */}
        </div>
    );
};

export default NavSearch;
