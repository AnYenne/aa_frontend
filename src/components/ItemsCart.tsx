import { Button } from "./ui/button"

const ItemsCartList = (props) =>{
    return(
        <>
        <div className="rounded-2xl bg-white p-6">
            <div>
                
            </div>
            <div  className="flex flex-row items-start justify-between h-[300px] relative text-xl">
                {/* image and infor */}
                <div className="">
                    <h3 className="font-bold pb-4">Product</h3>
                    <div className="flex flex-row justify-start items-center">
                    
                        <div>
                            <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-gbxmxmy006144-bong-tai-vang-14k-dinh-da-cz-pnj-01.png" />
                        </div>
                        <div>
                            <div>Catalog</div>
                            <h3 className="font-bold">Name of Item</h3>
                            <div>Color: </div>
                            <div>Size:  </div>
                        </div>
                    </div>

                </div>
        
                {/* price */}
                <div className="">
                        <h3 className="font-bold pb-4">Price</h3>
                    <div className="absolute top-1/2">
                        <h3>$200.000</h3>
                    </div>
                </div>
                
                {/* quantity */}
                <div className=" flex flex-col items-center justify-between w-100%">
                        <h3 className="font-bold pb-4">Quantity</h3>
                        <div className="flex flex-row absolute top-1/2 justify-between items-center">
                            <Button size={"sm"} variant="outline" className="mx-6 -my-2">-</Button>
                            <p className="max-w-8">2</p>
                            <Button size={"sm"} variant="outline" className="mx-6 -my-2">+</Button>
                        </div>
                </div>
                {/* total price */}
                <div className="mb-4">
                    <h3 className="font-bold pb-4">Total Price</h3>
                    <h3 className="text-yellow-600 absolute top-1/2">$400.000</h3>
                </div>
                
        
            </div>
            <div className="border-b border-gray mb-4"></div>            
        </div>
        </>
    )
}
export default ItemsCartList

{/* <div className="w-full justify-between flex flex-row">




</div>
<div>
    
</div> */}