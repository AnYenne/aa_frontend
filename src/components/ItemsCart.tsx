import { Button } from "./ui/button"

const ItemsCartList = (props) =>{
    return(
        <>
        <div className="p-6 mb-1">
            
            <div  className="flex flex-row items-start justify-end max-h-[300px] relative text-xl">
                {/* image and infor */}
                <div className="flex-grow">
                    {props.titleNumber ==1 ? (<h3 className="font-bold pb-4">Product</h3>) : <div></div>}
                    <div className="flex flex-row justify-start items-center">
                    
                        <div className="rounded-sm overflow-hidden">
                            <img src={props.itemImage || "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-gbxmxmy006144-bong-tai-vang-14k-dinh-da-cz-pnj-01.png"} />
                        </div>
                        <div className="w-full">
                            <div>{props.itemCatalog || 'Catalog' }</div>
                            <h3 className="font-bold">{props.itemName || 'Name of Item'}</h3>
                            <div>Color:{props.itemColor} </div>
                            <div>Size: {props.itemSize}</div>
                        </div>
                    </div>

                </div>
        
                {/* price */}
                <div className="w-1/6 flex flex-col justify-center items-center">
                        
                    {props.titleNumber ==1 ? (<h3 className="font-bold pb-4">Price</h3>) : <div></div>}

                    <div className="absolute top-1/2">
                        <h3>{props.itemPrice || '$200.000'}</h3>
                    </div>
                </div>
                
                {/* quantity */}
                <div className=" flex flex-col items-center justify-between w-100% w-1/6">
                    
                {props.titleNumber ==1 ? (<h3 className="font-bold pb-4">Quantity</h3>) : <div></div>}

                        <div className="flex flex-row absolute top-1/2 justify-between items-center">
                            <Button size={"sm"} variant="outline" className="mx-6 -my-2">-</Button>
                            <p className="max-w-8">{props.itemQuatity || 2}</p>
                            <Button size={"sm"} variant="outline" className="mx-6 -my-2">+</Button>
                        </div>
                </div>
                {/* total price */}
                <div className="mb-4 w-1/6 flex flex-col justify-center items-center">
                {props.titleNumber ==1 ? (<h3 className="font-bold pb-4">Total Price</h3>) : <div></div>}

                    <h3 className="text-yellow-600 absolute top-1/2">{props.itemTotalPrice || '$400.000'}</h3>
                </div>
                
        
            </div>
            <div className="border-b border-gray mb-4"></div>            
        </div>
        </>
    )
}
export default ItemsCartList
