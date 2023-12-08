"use server";
import NavItem from "./NavItem";

const NavItems = () => {
    return (
        <div className="lg:w-96 flex flex-row items-center justify-between shrink-0">
            <NavItem />
        </div>
    );
};
export default NavItems;
