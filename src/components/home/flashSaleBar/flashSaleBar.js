import { useEffect } from 'react';
import { useState } from 'react';
import './flashSaleBar.css'

const unitsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dozensArray = [0, 1, 2, 3, 4, 5];

function FlashSaleBar() {
    const [hourDozens, setHourDozens] = useState(0);
    const [hourUnits, setHourUnits] = useState(0);
    const [minuteDozens, setMinuteDozens] = useState(3);
    const [minuteUnits, setMinuteUnits] = useState(0);
    const [secondDozens, setSecondDozens] = useState(0);
    const [secondUnits, setSecondUnits] = useState(0);

    const [beforeHourDozens, setBeforeHourDozens] = useState(null);
    const [beforeHourUnits, setBeforeHourUnits] = useState(null);
    const [beforeMinuteDozens, setbeforeMinuteDozens] = useState(null);
    const [beforeMinuteUnits, setbeforeMinuteUnits] = useState(null);
    const [beforeSecondDozens, setbeforeSecondDozens] = useState(null);
    const [beforeSecondUnits, setbeforeSecondUnits] = useState(null);

    const handleCountdowm = () => {
        if (secondUnits === 0 && (secondDozens > 0 || minuteUnits > 0 || minuteDozens > 0 || hourUnits > 0 || hourDozens > 0)) {
            setbeforeSecondUnits(secondUnits);
            setSecondUnits(9);
            if (secondDozens === 0 && (minuteUnits > 0 || minuteDozens > 0 || hourUnits > 0 || hourDozens > 0)) {
                setbeforeSecondDozens(secondDozens);
                setSecondDozens(5);
                if (minuteUnits === 0 && (minuteDozens > 0 || hourUnits > 0 || hourDozens > 0)) {
                    setbeforeMinuteUnits(minuteUnits);
                    setMinuteUnits(9);
                    if (minuteDozens === 0 && (hourUnits > 0 || hourDozens > 0)) {
                        setbeforeMinuteDozens(minuteDozens);
                        setMinuteDozens(5);
                        if (hourUnits === 0 && hourDozens > 0) {
                            setBeforeHourUnits(hourUnits);
                            setHourUnits(9);
                            setBeforeHourDozens(hourDozens);
                            setHourDozens(hourDozens - 1);
                        }
                        else if (hourUnits > 0) {
                            setBeforeHourUnits(hourUnits);
                            setHourUnits(hourUnits - 1);
                        }
                    }
                    else if (minuteDozens > 0) {
                        setbeforeMinuteDozens(minuteDozens);
                        setMinuteDozens(minuteDozens - 1);
                    }
                }
                else if (minuteUnits > 0) {
                    setbeforeMinuteUnits(minuteUnits);
                    setMinuteUnits(minuteUnits - 1);
                }
            }
            else if (secondDozens > 0) {
                setbeforeSecondDozens(secondDozens);
                setSecondDozens(secondDozens - 1);
            }
        }
        else if (secondUnits > 0) {
            setbeforeSecondUnits(secondUnits);
            setSecondUnits(secondUnits - 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(handleCountdowm, 1000);
        return (() => {
            clearTimeout(timer);
        });
    }, [secondUnits]);

    return (
        <div className="row sm-gutter container--space">
            <div className="col l-12">
                <div className="home__flash-sale-wrap">
                    <div className="home__flash-sale-title">
                        <div className="home__flash-sale-img" style={{ backgroundImage: 'url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png)' }}>
                        </div>
                        <div className="home__flash-sale-time">
                            <div className="home__flash-sale-time-h">
                                {
                                    unitsArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-h-dozens ${index === hourDozens ? 'active' : ''} ${index === beforeHourDozens ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                                {
                                    unitsArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-h-units ${index === hourUnits ? 'active' : ''} ${index === beforeHourUnits ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className="home__flash-sale-time-m">
                                {
                                    dozensArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-m-dozens ${index === minuteDozens ? 'active' : ''} ${index === beforeMinuteDozens ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                                {
                                    unitsArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-m-units ${index === minuteUnits ? 'active' : ''} ${index === beforeMinuteUnits ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className="home__flash-sale-time-s">
                                {
                                    dozensArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-s-dozens ${index === secondDozens ? 'active' : ''} ${index === beforeSecondDozens ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                                {
                                    unitsArray.map((num, index) => {
                                        return (
                                            <span key={index} className={`home__flash-sale-time-s-units ${index === secondUnits ? 'active' : ''} ${index === beforeSecondUnits ? 'out' : ''}`}>{num}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="home__flash-sale-show">
                        <h3 className="home__flash-sale-show-text">Xem tất cả</h3>
                        <span className="home__flash-sale-icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </div>
                </div>
                <div className="home__flash-sale-product-wrap">
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                    <div className="col l-2">
                        <a className="home__flash-sale-product">
                            <div className="home__flash-sale-product-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c04394c1151a459ae22b0abf68c502fc_tn)' }}>
                            </div>
                            <div className="home__flash-sale-product-img-extra" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/9846c56cafd5ec170cc3d81de4d9200c_tn)' }}>
                            </div>
                            <span className="home__flash-sale-product-price">365.000
                                <span className="home__flash-sale-product-unit">đ</span>
                            </span>
                            <div className="home__flash-sale-product-process-wrap">
                                <div className="home__flash-sale-product-process">
                                    <div className="home__flash-sale-product-sold"></div>
                                    <span className="home__flash-sale-product-sold-text">ĐÃ BÁN 56</span>
                                </div>
                            </div>
                            <div className="home__flash-sale-product-sale">
                                <span className="home__flash-sale-product-percent">68%</span>
                                <span className="home__flash-sale-product-reduction">GIẢM</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSaleBar;