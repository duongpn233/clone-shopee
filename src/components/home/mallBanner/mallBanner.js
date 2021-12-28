import './mallBanner.css'
import { useEffect, useState } from 'react';

const slideImg = ['https://cf.shopee.sg/file/6ecf6574bcfd9e50c0d47dea42eb8c02',
    'https://cf.shopee.sg/file/0a8709a00061f412febdebc3e4f72f3b',
    'https://cf.shopee.sg/file/f9999c8aa9875efba7ef0828089c9c37',
    'https://cf.shopee.sg/file/e1ea8f3c509ccd7f02d72e0073b7568c'];

function MallBanner() {
    const [currentImg, setCurrentImg] = useState(-1);
    const [preImg, setPreImg] = useState(null);
    const count = slideImg.length;
    const handleNextSlide = () => {
        if (currentImg === -1) {
            setPreImg(0);
            setCurrentImg(currentImg + 2);
        }
        else if (currentImg < count - 1) {
            setPreImg(currentImg);
            setCurrentImg(currentImg + 1);
        }
        else {
            setPreImg(currentImg);
            setCurrentImg(0);
        }
    }

    const handlePrevSlide = () => {
        if (currentImg > 0) {
            setPreImg(currentImg);
            setCurrentImg(currentImg - 1);
        }
        else {
            setPreImg(currentImg);
            setCurrentImg(count - 1);
        }
    }

    const handleClickSlide = (index) => {
        setPreImg(currentImg);
        setCurrentImg(index);
    }

    useEffect(() => {
        const timerSlide = setTimeout(handleNextSlide, 3000);
        return (() => {
            clearTimeout(timerSlide);
        });
    }, [currentImg]);
    return (
        <div className="row sm-gutter container--space">
            <div className="col l-12">
                <div className="home__mall-title-wrap">
                    <div className="home__mall-title">
                        <h3 className="home__mall-title-text">SHOPEE MALL</h3>
                        <div className="home__mall-title-item">
                            <img className="home__mall-title-item-icon" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png"></img>
                            <span className="home__mall-title-item-text">7 Ngày miễn phí trả hàng</span>
                        </div>
                        <div className="home__mall-title-item">
                            <img className="home__mall-title-item-icon" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png"></img>
                            <span className="home__mall-title-item-text">Hàng chính hãng 100%</span>
                        </div>
                        <div className="home__mall-title-item">
                            <img className="home__mall-title-item-icon" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png"></img>
                            <span className="home__mall-title-item-text">Miễn phí vận chuyển</span>
                        </div>
                    </div>
                    <div className="home__mall-title-show">
                        <h3 className="home__mall-title-show-text">Xem tất cả</h3>
                        <span className="home__mall-title-show-icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </div>
                </div>
                <div className="home__mall-details-wrap">
                    <div className="col l-4">
                        <div className="home__mall-details-slide-wrap">
                            {
                                slideImg.map((img, index) => {
                                    return (
                                        <div key={index} className={`home__mall-details-img ${currentImg === -1 && index === 0 ? 'first' : ''} ${currentImg === index ? 'active' : ''} ${preImg === index ? 'out' : ''}`}
                                            style={{ backgroundImage: `url(${img})` }}>
                                        </div>
                                    )
                                })
                            }
                            <div className="home__mall-details-btn">
                                {
                                    slideImg.map((img, index) => {
                                        return (<div className={`home__mall-details-icon ${currentImg === index ? 'active' : ''} ${currentImg === -1 && index === 0 ? 'active' : ''}`} key={index}
                                            onClick={() => handleClickSlide(index)}></div>)
                                    })
                                }
                            </div>
                            <div className="home__mall-details-btn-next" onClick={handleNextSlide}>
                                <i className="fas fa-chevron-right home__mall-details-btn-icon"></i>
                            </div>
                            <div className="home__mall-details-btn-prev" onClick={handlePrevSlide}>
                                <i className="fas fa-chevron-left home__mall-details-btn-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col l-8">
                        <div className="row sm-gutter">
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/a97d42a549c56869ef4188089be5e5de_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Mua 1 tặng 1</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/446716c1faed032148da68d189594e4c_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Siêu deal quà tặng</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/31754d569ee2ef23f778825c318eb587_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Quà ngày ra mắt</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/6b1825bee369e8a39fbc2172c9aead32_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Mua là có quà</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/8d7904fa8f99ee509dda464d33d75143_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Mua là có quà</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/afa79df0b9180752fdb943d1bff44926_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Lễ hội Xiaomi</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F7d5ddd21cc10e484de60e12d6c58734e_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Giảm đến 50%</span>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="home__mall-details-category">
                                    <div className="home__mall-details-category-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/aa241c19f17e804f729c12af90e3f5fb_xhdpi)' }}>
                                    </div>
                                    <span className="home__mall-details-category-title">Da khoẻ sạch mụn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MallBanner;