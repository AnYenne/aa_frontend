"use client";
import { ReactNode, useEffect, useState } from "react";
import { Icons } from "./Icons";

interface expandProps {
    header?: string;
    children?: ReactNode;
    width?: string;
    height?: string;
    background?: string;
    style?: string;
}

const ExpandMenu = ({
    header,
    children,
    width,
    background,
    height,
    style,
}: expandProps) => {
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {};

    return (
        <div className="flex flex-col justify-center items-center rounded-md overflow-hidden mt-8">
            <div className="relative rounded-tr-sm rounded-tl-sm  bg-slate-200  px-4 h-[50px] w-[700px]">
                <div className="h-full flex flex-row justify-between items-center py-2">
                    <h3
                        onClick={() => setExpand(true)}
                        className={
                            (!expand && `flex-grow font-normal`) ||
                            `flex-grow font-bold`
                        }
                    >
                        {header}
                    </h3>
                    {!expand && (
                        <div onClick={() => setExpand(true)}>
                            <Icons.arrowRight />
                        </div>
                    )}
                    {expand && (
                        <div
                            onClick={() => setExpand(false)}
                            className="text-gray-400"
                        >
                            <Icons.close />
                        </div>
                    )}
                </div>
                {expand && (
                    <div className="absolute border-b border-gray-500 w-[650px]"></div>
                )}
            </div>

            {expand && (
                <div className="px-4  rounded-br-sm rounded-bl-sm bg-slate-200  w-[700px]">
                    <div className="my-2">{children}</div>
                </div>
            )}
        </div>
    );
};

export default ExpandMenu;
