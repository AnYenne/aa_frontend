import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@mui/material"
import Link from "next/link"
const SucceedPage = () => {
    const handleEmail = () => {
        alert("dang ky email thanh cong")
    }    
    return (
        <MaxWidthWrapper>
            <div className="mx-auto w-full  sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl text-center flex flex-col items-center">

                <div className="flex flex-row justify-between items-center mt-6">
                    <div className="flex flex-col w-1/2">
                        <h2 className="text-xl font-bold text-yellow-600 p-2">Sign up successfully</h2>
                        <h3 className="my-2 text-lg">Thank you!
<br></br>
Your account has been successfully created. 
Subscribe us for receive newest discount voucher and latest release product.
</h3>
                        <label htmlFor="emailSubscribe" ></label>
                        <input id="emailSubscribe" className="border border-yellow-600 p-4" type="email" placeholder="example@email.com" />
                        <div className="bg-yellow-600 text-white p-4 font-medium my-4 rounded-md">
                        <button onClick={handleEmail} >Subscribe to monthly newsletter</button>
                        </div>
                        <Link href="/">
                        <div className="bg-blue-900 text-white p-2 font-medium my-4 rounded-md">
                        <button>back to homepage</button>
                        </div>
                        </Link>
                        
                    </div>
                    <div className="w-1/2 rounded-lg overflow-hidden ml-6">
                        <img src="../../../Flodesk_Blog_7Newsletters-Inline01.jpg" />
                    </div>
                </div>
        </div>
        </MaxWidthWrapper>
    )
}
export default SucceedPage