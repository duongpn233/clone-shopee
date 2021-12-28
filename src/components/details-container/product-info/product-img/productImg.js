function ProductImg({ shoes }) {
    if (shoes) {
        return (
            <div className="col l-5">
                <div className="product-info__img">
                    <div className="product-info__img-main" style={{ backgroundImage: `url(${shoes.img})` }}>
                    </div>
                    <div className="product-info__img-slide">
                        <div className="product-info__img-slide-wrap">
                            <div className="product-info__img-slide-item" style={{ backgroundImage: `url(${shoes.imgSlide[0]})` }}>
                            </div>
                            <div className="product-info__img-slide-layout" style={{ backgroundImage: `url(${shoes.imgSlide[0]})` }}>
                            </div>
                        </div>
                        <div className="product-info__img-slide-wrap">
                            <div className="product-info__img-slide-item" style={{ backgroundImage: `url(${shoes.imgSlide[1]})` }}>
                            </div>
                            <div className="product-info__img-slide-layout" style={{ backgroundImage: `url(${shoes.imgSlide[1]})` }}>
                            </div>
                        </div>
                        <div className="product-info__img-slide-wrap">
                            <div className="product-info__img-slide-item" style={{ backgroundImage: `url(${shoes.imgSlide[2]})` }}>
                            </div>
                            <div className="product-info__img-slide-layout" style={{ backgroundImage: `url(${shoes.imgSlide[2]})` }}>
                            </div>
                        </div>
                        <div className="product-info__img-slide-wrap">
                            <div className="product-info__img-slide-item" style={{ backgroundImage: `url(${shoes.imgSlide[3]})` }}>
                            </div>
                            <div className="product-info__img-slide-layout" style={{ backgroundImage: `url(${shoes.imgSlide[3]})` }}>
                            </div>
                        </div>
                        <div className="product-info__img-slide-wrap">
                            <div className="product-info__img-slide-item" style={{ backgroundImage: `url(${shoes.imgSlide[4]})` }}>
                            </div>
                            <div className="product-info__img-slide-layout" style={{ backgroundImage: `url(${shoes.imgSlide[4]})` }}>
                            </div>
                        </div>
                    </div>
                    <div className="product-info__img-interactive">
                        <span className="product-info__img-interactive-share">Chia sẻ</span>
                        <div className="product-info__img-interactive-like">
                            <span className="product-info__img-interactive-icon">
                                <i className="product-info__img-interactive-icon far fa-heart" />
                            </span>
                            <span className="product-info__img-interactive-liked">Đã thích(105)</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return false
    }
}

export default ProductImg;