import CartList from "@/components/CartList";
import Navbar from "@/components/Navbar";
function Cart() {
    
    return (
        <div className="mx-auto w-full sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl">
            <Navbar />
            <CartList/>
        </div>
    );
}
export default Cart;
