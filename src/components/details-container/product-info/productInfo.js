
import ProductImg from "./product-img/productImg";
import ProductView from "./product-view/productView";

function ProductInfo(props) {
    const { shoes, id } = props;

    if (shoes) {
        return (
            <div className="product-info">
                <div className="row product-info-background">
                    <ProductImg shoes={shoes} />
                    <ProductView id={id} shoes={shoes} />
                </div>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ProductInfo;