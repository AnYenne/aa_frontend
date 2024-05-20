import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { Icons } from "./Icons";

const ModalAddToCart = (action) => {
    const [setData, data] = useState([]);
    return (
        <div>
            <div className="bg-white w-[426px] h-[386px] relative top-4">
                {!data.data ? <h3>There are no item </h3> : <p>{data.data}</p>}
            </div>
        </div>
    );
};
export default ModalAddToCart;
