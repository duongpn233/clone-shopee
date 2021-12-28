function ShopInfo() {
    return (
        <div className="shop-info">
            <div className="row shop-info-background">
                <div className="col l-5">
                    <div className="shop-info-contact">
                        <div className="shop-info-contact-avt">
                            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/25943/logo_1618389701_545415682eb90a571e89b6c20dabee1e%20(1).png" alt="" className="shop-info-contact-img" />
                        </div>
                        <div className="shop-info-contact-wrap">
                            <span className="shop-info-contact-name">Grey.B</span>
                            <span className="shop-info-contact-time">Online 8 giờ trước</span>
                            <div className="shop-info-contact-wrap-btn">
                                <button className="shop-info-contact-mess">
                                    <span className="shop-info-contact-mess-block">
                                        <i className="shop-info-contact-mess-icon fas fa-comments-dollar" />
                                    </span>
                                    <span className="shop-info-contact-mess-title">Chat ngay</span>
                                </button>
                                <button className="shop-info-contact-view">
                                    <span className="shop-info-contact-view-block">
                                        <i className="shop-info-contact-view-icon fas fa-store" />
                                    </span>
                                    <span className="shop-info-contact-view-title">Xem shop</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l-7">
                    <div className="shop-info-statistical">
                        <div className="shop-info-statistical-wrap">
                            <div className="shop-info-statistical-evaluate">
                                <span className="shop-info-statistical-evaluate-title">Đánh giá</span>
                                <span className="shop-info-statistical-evaluate-num">99</span>
                            </div>
                            <div className="shop-info-statistical-product">
                                <span className="shop-info-statistical-product-title">Sản phẩm</span>
                                <span className="shop-info-statistical-product-num">199</span>
                            </div>
                        </div>
                        <div className="shop-info-statistical-wrap">
                            <div className="shop-info-statistical-response">
                                <span className="shop-info-statistical-response-title">Tỷ lệ phản hồi</span>
                                <span className="shop-info-statistical-response-num">69%</span>
                            </div>
                            <div className="shop-info-statistical-time">
                                <span className="shop-info-statistical-time-title">Thời gian phản hồi</span>
                                <span className="shop-info-statistical-time-num">Trong vài phút</span>
                            </div>
                        </div>
                        <div className="shop-info-statistical-wrap">
                            <div className="shop-info-statistical-join">
                                <span className="shop-info-statistical-join-title">Tham gia</span>
                                <span className="shop-info-statistical-join-num">48 tháng trước</span>
                            </div>
                            <div className="shop-info-statistical-follow">
                                <span className="shop-info-statistical-follow-title">Người theo dõi</span>
                                <span className="shop-info-statistical-follow-num">999</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopInfo;