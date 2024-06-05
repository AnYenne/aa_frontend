'use client'
import ItemsCartList from "./ItemsCart"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
const CartList = () => {
    const [count, setCount]= useState(0)
    return (
        <MaxWidthWrapper>
            <div className="bg-gray-200 w-full h-full">
                <div className="flex flex-row justify-between items-start">
                    {/* list product in cart */}
                    <div className="w-full bg-slate-300">
                        <div className="mb-6">
                            <h2>Shopping Bag</h2>
                            <h4>{count} <span>{count > 2 ? 'items' : 'item'}</span> in your bag</h4>
                        </div>
                        <div className="">
                           
                            <ItemsCartList number="1"/>
                        </div>
                    </div>
                    {/* list for checkout */}
                    <div>calculated shipping</div>
                </div>
                {/* list for adverti */}
                <div>list ad cart</div>
            </div>
        </MaxWidthWrapper>
        )
}
export default CartList 