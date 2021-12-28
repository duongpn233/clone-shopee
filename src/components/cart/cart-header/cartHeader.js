import "./cartHeader.css";
import Navbar from "../../header/navbar/navbar";
import CartSearch from "./cart-search/cartSearch";

function CartHeader({user}) {

    return (
        <header className="cart-header">
            <div className="cart-header-navbar-wrap">
                <div className="grid wide">
                    <Navbar user={user} />
                </div>
            </div>
            <div className="cart-header-search-wrap">
                <div className="grid wide">
                    <CartSearch />
                </div>
            </div>
        </header>
    )
}

export default CartHeader;