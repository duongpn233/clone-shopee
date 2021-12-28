import ProductDetail from "./product-detail/productDetail"
import ProductLink from "./product-link/productLink"
import ProductInfo from "./product-info/productInfo"
import ShopInfo from "./shop-info/shopInfo"
import ProductEvaluate from "./product-evaluate/productEvaluate"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { getShoes } from "../../redux/shoes/shoesSlice"

function DetailsContainer(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const shoes = useSelector((state)=>{
        return state.shoes.shoesList.find((shoes)=>shoes._id === id)
    });

    useEffect(()=>{
        dispatch(getShoes());
     },[]);

    return(
        <div className="product-details-container">
            <div className="grid wide">
                <ProductLink shoes={shoes} />
                <ProductInfo id={id} shoes={shoes} />
                <ShopInfo />
                <ProductDetail shoes={shoes} />
                <ProductEvaluate />
            </div>
        </div>
    )
}

export default DetailsContainer;