import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/users/userSlice";
import Navbar from "./navbar/navbar";
import Search from "./search/search";
function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser());
        }
    }, []);

    return (
        <header className="header">
            <div className="grid wide">
                <Navbar user={user} />
                <Search user={user} />
            </div>
        </header>
    )
}
export default Header;