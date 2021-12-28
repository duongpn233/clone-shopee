//import { useEffect } from "react";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import convertToString from "../../../../until/convert";
//import { getShoes } from "../../../../redux/shoes/shoesSlice";

function ProductList({currentShoes}) {
   
    //const dispatch = useDispatch();
    //const shoesList = useSelector(state => state.shoes.shoesList);
   
    // useEffect(() => {
    //     dispatch(getShoes());
    // }, []);

    return (
        <div className="product">
            <div className="row sm-gutter">
                {
                    currentShoes.map((shoes, index) => {
                        return (
                            <div className="col l-2-4 m-4 c-12" key={index}>
                                <Link className="product-item" to={`/product/${shoes._id}`} >
                                    <div className="product-item__img" style={{ backgroundImage: `url(${shoes.img})` }}>
                                    </div>
                                    <h4 className="product-item__name product-item__name--short">{shoes.name}</h4>
                                    <div className="product-item__price">
                                        <span className="product-item__price-old">{convertToString(shoes.oldPrice)}đ</span>
                                        <span className="product-item__price-new">{convertToString(shoes.newPrice)}đ</span>
                                    </div>
                                    <div className="product-item__interactive">
                                        <span className="product-item__interactive-like product-item__interactive-like-liked">
                                            <i className="product-item__interactive-like-icon-not_like far fa-heart" />
                                            <i className="product-item__interactive-like-icon-liked fas fa-heart" />
                                        </span>
                                        <span className="product-item__interactive-evaluate">
                                            <i className="product-item__interactive-evaluate-icon fas fa-star" />
                                            <i className="product-item__interactive-evaluate-icon--gold fas fa-star" />
                                            <i className="product-item__interactive-evaluate-icon--gold fas fa-star" />
                                            <i className="product-item__interactive-evaluate-icon--gold fas fa-star" />
                                            <i className="product-item__interactive-evaluate-icon--gold fas fa-star" />
                                        </span>
                                        <span className="product-item__sold">Đã bán {convertToString(shoes.sold, true)}</span>
                                    </div>
                                    <div className="product-item__origin">
                                        <span className="product-item__origin-brand">{shoes.brand}</span>
                                        <span className="product-item__origin-nation">{shoes.origin}</span>
                                    </div>
                                    <div className="product-item__favourite">
                                        <i className="product-item__favourite-icon fas fa-check" />
                                        <span>Yêu thích</span>
                                    </div>
                                    <div className="product-item__sale">
                                        <span className="product-item__sale-percent">{shoes.sale}</span>
                                        <span className="product-item__sale-reduction">Giảm</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList;