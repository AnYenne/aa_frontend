"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

// async function getCategory() {
//     const res = await fetch("http://localhost:8000/v1/product_category");

//     if (!res.ok) {
//         throw Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function NavMenu() {
//     const data = await getCategory();
//     const catagories = data.Data;

// const NavMenu = () => {
//     const catagories = [
//         { name: "navigation 1", id: 1 },
//         { name: "navigation 2", id: 2 },
//         { name: "navigation 3", id: 3 },
//         { name: "navigation 4", id: 4 },
//         { name: "navigation 5", id: 5 },
//         { name: "navigation 6", id: 6 },
//         { name: "navigation 7", id: 7 },
//     ];

//     return (
//         <div className="">
//             <ul className="">
//                 {catagories.map((category) => {
//                     return (
//                         <li key={category.id} className="">
//                             {category.name}
//                         </li>
//                     );
//                 })}
//                 <li className="">Khuyến mãi</li>
//                 <li className="">cửa hàng</li>
//                 <li className="">thương hiệu</li>
//                 <li className="">Mới</li>
//             </ul>
//         </div>
//     );
// };

const NavMenu = () => {
    const catagories = [
        { name: "vòng tay", id: 1 },
        { name: "nhẫn", id: 2 },
        { name: "lắc chân", id: 3 },
        { name: "dây chuyền", id: 4 },
        { name: "khuyến mãi", id: 5 },
        { name: "mới", id: 6 },
    ];
    const contentCata = [
        {
            name: "vòng tay",
            id: 1,
            subMenu: [
                { name: "nhẫn", id: 2 },
                { name: "lắc chân", id: 3 },
                { name: "dây chuyền", id: 4 },
                { name: "khuyến mãi", id: 5 },
                { name: "mới", id: 6 },
            ],
        },
        {
            name: "Nhẫn",
            id: 1,
            subMenu: [
                { name: "nhẫn", id: 2 },
                { name: "lắc chân", id: 3 },
                { name: "dây chuyền", id: 4 },
                { name: "khuyến mãi", id: 5 },
                { name: "mới", id: 6 },
            ],
        },
        {
            name: "Lắc chân",
            id: 1,
            subMenu: [
                { name: "nhẫn", id: 2 },
                { name: "lắc chân", id: 3 },
                { name: "dây chuyền", id: 4 },
                { name: "khuyến mãi", id: 5 },
                { name: "mới", id: 6 },
            ],
        },
    ];
    contentCata.map((content) => {
        let contents = content.subMenu;
        return contents;
    });

    return (
        <div className="hidden lg:flex flex-row justify-center items-center">
            <div>{/* TODO: mobile nav */}</div>
            <NavigationMenu className="text-black-200 ">
                <NavigationMenuList>
                    {/* menu first start */}
                    {catagories.map((category) => {
                        return (
                            <NavigationMenuItem key={category.id}>
                                <NavigationMenuTrigger
                                    className={cn(
                                        "capitalize hover:text-yellow-700"
                                    )}
                                >
                                    {category.name}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="p-2 row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <Icons.logo className="h-6 w-6" />
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed
                                                        components built with
                                                        Radix UI and Tailwind
                                                        CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default NavMenu;
