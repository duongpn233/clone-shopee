import CartContainer from "./cart-container/cartContainer";
import CartHeader from "./cart-header/cartHeader";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getUser} from "../../redux/users/userSlice";

function Cart() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser());
        }
    }, []);
    return (
        <>
            <CartHeader user={user} />
            <CartContainer user={user} />
        </>
    )
}

export default Cart;