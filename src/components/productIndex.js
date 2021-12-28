import Header from "./header/header";
import User from "./user/User";
import {
    Route
} from "react-router-dom";
import Container from "./container/container";
import DetailsContainer from "./details-container/detailsContainer";
import HomeContainer from "./home/homeContainer";

function ProductIndex() {
    
    
    return (
        <>
            <Header />
            <Route exact path="/" component={HomeContainer} />
            <Route path="/home" component={HomeContainer}/>
            <Route exact path="/product" component={Container} />
            <Route path="/product/:id" component={DetailsContainer} />
            <Route path="/user" component={User} />
        </>
    )
}

export default ProductIndex;