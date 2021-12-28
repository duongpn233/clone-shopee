import { useEffect, useState } from 'react';
import './slideBanner.css'

const slideImg = ['https://cf.shopee.sg/file/d6060edf373f1e2e90b9bc1714249872_xxhdpi',
    'https://cf.shopee.sg/file/06369578a1bc513a818b70f32ea0de46_xxhdpi',
    'https://cf.shopee.sg/file/697f778d6e7dd13d0fa38b177f511b15_xxhdpi',
    'https://cf.shopee.sg/file/6668b4c0c1a760df25b1daad89a58e40_xxhdpi',
    'https://cf.shopee.sg/file/be99f85c9313cc8591325eab1e2a7c5d_xxhdpi',
    'https://cf.shopee.sg/file/940d3088b1d8894c04d069526cead3e0_xxhdpi']

function SlideBanner() {
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
            <div className="col l-8">
                <div className=" home__slide-wrap">
                    {
                        slideImg.map((img, index) => {
                            return (
                                <div key={index} className={`home__slide ${currentImg === -1 && index === 0 ? 'first' : ''} ${currentImg === index ? 'active' : ''} ${preImg === index ? 'out' : ''}`}
                                    style={{ backgroundImage: `url(${img})` }}>
                                </div>
                            )
                        })
                    }
                    <div className="home__slide-btn">
                        {
                            slideImg.map((img, index) => {
                                return (<div className={`home__slide-icon ${currentImg === index ? 'active' : ''} ${currentImg === -1 && index === 0 ? 'active' : ''}`} key={index} 
                                onClick={()=>handleClickSlide(index)}></div>)
                            })
                        }
                    </div>
                    <div className="home__slide-btn-next" onClick={handleNextSlide}>
                        <i className="fas fa-chevron-right home__slide-btn-icon"></i>
                    </div>
                    <div className="home__slide-btn-prev" onClick={handlePrevSlide}>
                        <i className="fas fa-chevron-left home__slide-btn-icon"></i>
                    </div>
                </div>
            </div>
            <div className="col l-4 home__slide-static-wrap">
                <div className="home__slide-static" style={{ backgroundImage: 'url(https://cf.shopee.sg/file/d007b2a93f22091068631958857959a6_xhdpi)' }}></div>
                <div className="home__slide-static" style={{ backgroundImage: 'url(https://cf.shopee.sg/file/71c17ac2388b007ee9feee1cd6f02e37_xhdpi)' }}></div>
            </div>
        </div>
    )
}

export default SlideBanner;