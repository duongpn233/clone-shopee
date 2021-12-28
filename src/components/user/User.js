import { Route, Redirect } from "react-router-dom";
import UserSideBar from "./User-sidebar/UserSideBar";
import UserProfile from "./User-profile/UserProfile";
import UserAddress from "./User-address/UserAddress";
import UserPass from "./User-pass/UserPass";
import UserBank from "./User-bank/UserBank";
import './User.css';
function User() {
    return (
        <div className="user-container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <UserSideBar />
                    <Route path="/user/profile" component={UserProfile} />
                    <Route path="/user/address" component={UserAddress} />
                    <Route path="/user/pass" component={UserPass} />
                    <Route path="/user/bank" component={UserBank} />
                    {/* <Redirect exact path="/user" to="/user/profile" /> */}
                </div>
            </div>
        </div>
    )
}

export default User;