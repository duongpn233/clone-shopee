function ProductEvaluate() {
    return (
        <div className="product-evaluate">
            <div className="row product-evaluate-background">
                <div className="col l-12">
                    <span className="product-evaluate-header">ĐÁNH GIÁ SẢN PHẨM</span>
                    <div className="product-evaluate-wrap">
                        <div className="product-evaluate-ratio">
                            <span className="product-evaluate-ratio-max"><span
                                className="product-evaluate-ratio-num">4</span>trên 5</span>
                            <div className="product-evaluate-ratio-icon">
                                <i className="product-evaluate-ratio-star fas fa-star"></i>
                                <i className="product-evaluate-ratio-star fas fa-star"></i>
                                <i className="product-evaluate-ratio-star fas fa-star"></i>
                                <i className="product-evaluate-ratio-star fas fa-star"></i>
                                <i className="product-evaluate-ratio-star far fa-star"></i>
                            </div>
                        </div>
                        <div className="product-evaluate-statistical">
                            <div className="product-evaluate-statistical-star">
                                <button className="product-evaluate-statistical-star-btn active">Tất cả</button>
                                <button className="product-evaluate-statistical-star-btn">5 Sao (89)</button>
                                <button className="product-evaluate-statistical-star-btn">4 Sao (5)</button>
                                <button className="product-evaluate-statistical-star-btn">3 Sao (2)</button>
                                <button className="product-evaluate-statistical-star-btn">2 Sao (1)</button>
                                <button className="product-evaluate-statistical-star-btn">1 Sao (1)</button>
                            </div>
                            <div className="product-evaluate-statistical-cmt">
                                <button className="product-evaluate-statistical-cmt-btn">Có bình luận (0)</button>
                                <button className="product-evaluate-statistical-cmt-btn">Có video/Hình ảnh (0)</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-evaluate-page">
                        <button className="product-evaluate-page-before">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="product-evaluate-page-num active">1</button>
                        <button className="product-evaluate-page-num">2</button>
                        <button className="product-evaluate-page-after">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEvaluate;