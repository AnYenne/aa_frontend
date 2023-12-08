import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";

const Navbar = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="bg-white relative">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center justify-between">
                            {/* TODO: mobile nav */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-full w-16" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:w-7/12 lg:block lg:self-center max-w-[600px]">
                                <NavSearch />
                            </div>
                            <div className="hidden z-50 lg:block  ">
                                <NavItems />
                            </div>
                        </div>
                        <div className="hidden z-50 lg:block ">
                            <NavMenu />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
