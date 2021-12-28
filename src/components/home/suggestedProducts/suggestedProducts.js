import './suggestedProducts.css'
import { Link } from "react-router-dom";
function SuggestedProducts() {
    return (
        <div className="row sm-gutter container--space">
            <div className="col l-12">
                <div className="home__suggested-title-wrap">
                    <h3 className="home__suggested-title-text">GỢI Ý HÔM NAY</h3>
                </div>
                <div className="home__suggested-product-wrap">
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Giày đá bóng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Adidas</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite home__suggested-product-mall">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                                <span className="home__suggested-product-mall-text">Mall</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Giày đá bóng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Adidas</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite home__suggested-product-mall">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                                <span className="home__suggested-product-mall-text">Mall</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Giày đá bóng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Adidas</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite home__suggested-product-mall">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                                <span className="home__suggested-product-mall-text">Mall</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Giày đá bóng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Adidas</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite home__suggested-product-mall">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                                <span className="home__suggested-product-mall-text">Mall</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Giày đá bóng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Adidas</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite home__suggested-product-mall">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                                <span className="home__suggested-product-mall-text">Mall</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col l-2">
                        <Link className="home__suggested-product" to="/" >
                            <div className="home__suggested-product-img" style={{ backgroundImage: `url(https://cf.shopee.vn/file/e83eb0b26d79f555140502740abe87fd_tn)` }}>
                            </div>
                            <h4 className="home__suggested-product-name">Áo hoodie nam nữ form rộng</h4>
                            <div className="home__suggested-product-price">
                                <span className="home__suggested-product-price-old">199.000đ</span>
                                <span className="home__suggested-product-price-new">99.000đ</span>
                            </div>
                            <div className="home__suggested-product-interactive">
                                <span className="home__suggested-product-interactive-like home__suggested-product-interactive-like-liked">
                                    <i className="home__suggested-product-interactive-like-icon-not_like far fa-heart" />
                                    <i className="home__suggested-product-interactive-like-icon-liked fas fa-heart" />
                                </span>
                                <span className="home__suggested-product-interactive-evaluate">
                                    <i className="home__suggested-product-interactive-evaluate-icon fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                    <i className="home__suggested-product-interactive-evaluate-icon--gold fas fa-star" />
                                </span>
                                <span className="home__suggested-product-sold">Đã bán 4.8k</span>
                            </div>
                            <div className="home__suggested-product-origin">
                                <span className="home__suggested-product-origin-brand">Hoodie</span>
                                <span className="home__suggested-product-origin-nation">Mỹ</span>
                            </div>
                            <div className="home__suggested-product-favourite">
                                <i className="home__suggested-product-favourite-icon fas fa-check" />
                                <span className="true">Yêu thích</span>
                            </div>
                            <div className="home__suggested-product-sale">
                                <span className="home__suggested-product-sale-percent">50%</span>
                                <span className="home__suggested-product-sale-reduction">Giảm</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="home__suggested-product-more">Xem thêm</div>
            </div>
        </div>
    )
}

export default SuggestedProducts;