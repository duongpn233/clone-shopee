import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { getDistrict, getProvince, getWard, searchDistrict, searchProvince, searchWard } from "../../../../redux/address/addressSlice";
import { postCart } from "../../../../redux/cartUser/cartUserSlicce";
import { selectSize } from "../../../../redux/shoes/shoesSlice";
import convertToString from "../../../../until/convert";
import requireString from "../../../../until/requireString";

function ProductView({ shoes, id }) {
    const [quantity, setQuantity] = useState(1);
    const [sizeActive, setSizeActive] = useState(null);
    const [chooseSize, setChooseSize] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [isAddr, setIsAddr] = useState(false);
    const [address, setAddress] = useState({});
    const [addressLv, setAddressLv] = useState('province');
    const [selectedAddr, setSelectedAddr] = useState({
        province: 'Thành phố Hà Nội',
        district: 'Quận Hai Bà Trưng',
        ward: 'Phường Quỳnh Lôi'
    });
    const [valueSearch, setValueSearch] = useState('');
    const beforeProvince = useRef();
    const refIntoVeiw = useRef();
    const user = useSelector(state => state.user.user);
    const addressList = useSelector(state => state.address.addressList);
    const history = useHistory();
    const disptach = useDispatch();

    const handleBtnSize = (index) => {
        const payload = {
            sizeIndex: index,
            shoesId: id
        }
        setSizeActive(index);
        setChooseSize(true);
        disptach(selectSize(payload));
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }
    const handleReduce = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAdd = () => {
        if (user.userName && (sizeActive !== null) && shoes) {
            const data = {
                shopId: shoes.shopId,
                shoesId: shoes._id,
                imgItem: shoes.img,
                itemName: shoes.name,
                itemPrice: shoes.newPrice,
                itemAmount: quantity,
                itemclassify: "giầy",
                itemSize: shoes.sizes[sizeActive].size,
            };
            disptach(postCart(data));
        }
        else {
            if (user.userName) {

                setChooseSize(false);
            }
            else {
                setIsLogin(false);
            }
        }
    };

    const handleBack = () => {
        setIsLogin(true);
    };
    const handleLogin = () => {
        history.push("/login");
    };
    const handleLoadAddr = () => {
        setIsAddr(!isAddr);
    };
    const handleChooseAddr = (address) => {
        if (addressLv === 'province') {
            const params = {
                id: address.code,
                param: {
                    depth: 2
                }
            };
            setAddress({...address});
            setAddressLv('district');
            disptach(getDistrict(params));
            setValueSearch('');
            setSelectedAddr({
                ...selectedAddr,
                province: address.name
            });
            beforeProvince.current = address;
        }
        else if (addressLv === 'district') {
            const params = {
                id: address.code,
                param: {
                    depth: 2
                }
            };
            disptach(getWard(params));
            setAddress({...address});
            setAddressLv('ward');
            setValueSearch('');
            setSelectedAddr({
                ...selectedAddr,
                district: address.name
            });
        }
        else if( addressLv === 'ward'){
            setAddressLv('province');
            setIsAddr(false);
            disptach(getProvince());
            setAddress({});
            setValueSearch('');
            setSelectedAddr({
                ...selectedAddr,
                ward: address.name
            });
        }
        refIntoVeiw.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const handleAddrBack = () => {
        if(addressLv === 'district'){
            disptach(getProvince());
            setAddress({});
            setAddressLv('province');
            setValueSearch('');
        }
        else if( addressLv === 'ward'){
            const params = {
                id: beforeProvince.current.code,
                param: {
                    depth: 2
                }
            };
            disptach(getDistrict(params));
            setAddressLv('district');
            setAddress({...beforeProvince.current});
            setValueSearch('');
        }
        refIntoVeiw.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const handleSearchAddr = (event) => {
        setValueSearch(event.target.value);
        if (addressLv === 'province'){
            const params = {
                q: requireString(event.target.value),
            };
            disptach(searchProvince(params));
        }
        else if( addressLv === 'district'){
            const params = {
                q: requireString(event.target.value),
                p: address.code
            };
            disptach(searchDistrict(params));
        }
        else if( addressLv === 'ward'){
            const params = {
                q: requireString(event.target.value),
                d: address.code
            };
            disptach(searchWard(params));
        }
    }

    useEffect(() => {
        disptach(getProvince());
    }, []);
    if (shoes) {
        return (
            <div className="col l-7">
                <div className={`product-info__view ${chooseSize ? '' : 'show'}`}>
                    <div className="product-info__view-header">
                        <span className="product-info__view-header-like">Yêu thích</span>
                        <h3 className="product-info__view-header-name">{shoes.name}</h3>
                    </div>
                    <div className="product-info__view-feedback">
                        <span className="product-info__view-feedback-icon">
                            <span className="product-info__view-feedback-icon-count">4.0</span>
                            <i className="product-info__view-feedback-star fas fa-star" />
                            <i className="product-info__view-feedback-star fas fa-star" />
                            <i className="product-info__view-feedback-star fas fa-star" />
                            <i className="product-info__view-feedback-star fas fa-star" />
                            <i className="product-info__view-feedback-star far fa-star" />
                        </span>
                        <span className="product-info__view-feedback-count">99 Đánh giá</span>
                        <span className="product-info__view-feedback-sold">{convertToString(shoes.sold, true)} Đã bán</span>
                    </div>
                    <div className="product-info__view-price">
                        <span className="product-info__view-price-old">{convertToString(shoes.oldPrice)}đ</span>
                        <span className="product-info__view-price-new">{convertToString(shoes.newPrice)}đ</span>
                        <span className="product-info__view-price-sale">Giảm {shoes.sale}</span>
                    </div>
                    <div className="product-info__view-transport">
                        <span className="product-info__view-transport-title">Vận chuyển</span>
                        <div className="product-info__view-transport-describe">
                            <div className="product-info__view-transport-wrap">
                                <div className="product-info__view-transport-logo">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png" alt="" className="product-info__view-transport-img-free" />
                                </div>
                                <div className="product-info__view-transport-free">
                                    <span className="product-info__view-transport-free-title">Miễn phí vận
                                        chuyển</span>
                                    <span className="product-info__view-transport-free-condition">Miễn phí vận
                                        chuyển khi đơn đạt giá trị tối thiểu</span>
                                </div>
                            </div>
                            <div className="product-info__view-transport-wrap">
                                <div className="product-info__view-transport-logo">
                                    <img src="https://www.nicepng.com/png/detail/393-3938275_cargo-truck-png-transparent-images-delivery-truck-icon.png" alt="" className="product-info__view-transport-img" />
                                </div>
                                <div className="product-info__view-transport-ship">
                                    <div className="product-info__view-transport-ship-wrap">
                                        <span className="product-info__view-transport-ship-title">Vận chuyển
                                            đến</span>
                                        <span className="product-info__view-transport-ship-palce" onClick={handleLoadAddr}>{`${selectedAddr.district}, ${selectedAddr.province}`}
                                            <i className={`product-info__view-transport-ship-icon ${isAddr ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`} />
                                        </span>
                                        <div className={`product-info__view-transport-adr-block ${isAddr ? '' : 'hide'}`}>
                                            <div className="product-info__view-transport-adr-input-block">
                                                <input placeholder="Tìm kiếm" type="text" value={valueSearch} className="product-info__view-transport-adr-input" onChange={handleSearchAddr}></input>
                                            </div>
                                            <div className="product-info__view-transport-adr-wrap">
                                                <div className={`product-info__view-transport-level ${address.name ? '' : 'hide'}`} onClick={handleAddrBack}>
                                                    <span className="product-info__view-transport-level-back">
                                                        <i className="fas fa-chevron-left"></i>
                                                    </span>
                                                    <span className="product-info__view-transport-level-content ">{address.name}</span>
                                                </div>
                                                <ul className="product-info__view-transport-list">
                                                    {
                                                        addressList.map((address, index) => {
                                                            return (
                                                                <li key={index} ref={index === 0 ? refIntoVeiw : null} className="product-info__view-transport-item" onClick={() => { handleChooseAddr(address) }}>{address.name}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info__view-transport-ship-wrap">
                                        <span className="product-info__view-transport-ship-title">Phí vận
                                            chuyển</span>
                                        <span className="product-info__view-transport-ship-price">0đ - 15.000đ
                                            <i className="product-info__view-transport-ship-icon fas fa-chevron-down" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info__view-size">
                        <span className="product-info__view-size-title">Size</span>
                        <div className="product-info__view-size-wrap">
                            {
                                shoes.sizes.map((size, index) => {
                                    return (
                                        <div className="product-info__view-size-select" key={index}>
                                            <span className={size.count ? (size.isActive ? "product-info__view-size-btn active" : "product-info__view-size-btn") : "product-info__view-size-btn disable"}
                                                onClick={size.count ? () => { handleBtnSize(index) } : () => { }}
                                            >{size.size}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <span className="product-info__view-size-mess">Bạn chưa chọn size</span>
                    <div className="product-info__view-count">
                        <span className="product-info__view-count-title" >Số lượng</span>
                        <div className="product-info__view-count-wrap">
                            <span className="product-info__view-count-reduce" onClick={handleReduce}>
                                <i className="product-info__view-count-reduce-icon fas fa-minus" />
                            </span>
                            <span className="product-info__view-count-num">{quantity}</span>
                            <span className="product-info__view-count-increase" onClick={handleIncrease}>+</span>
                        </div>
                        <span className="product-info__view-count-inventory">{convertToString(shoes.amount, true)} Sản phẩm có sẵn</span>
                    </div>
                    <div className="product-info__view-action">
                        <button className="product-info__view-action-add">
                            <span className="product-info__view-action-add-block">
                                <i className="product-info__view-action-add-icon fas fa-cart-plus" />
                            </span>
                            <span className="product-info__view-action-add-title" onClick={handleAdd}>Thêm vào giỏ hàng</span>
                        </button>
                        <button className="product-info__view-action-buy">Mua ngay</button>
                    </div>
                    <div className="product-info__view-policy">
                        <div className="product-info__view-policy-wrap">
                            <span className="product-info__view-policy-logo">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/67454c89080444c5997b53109072c9e0.png" alt="" className="product-info-view-policy-img" />
                            </span>
                            <span className="product-info__view-policy-title">Shopee đảm bảo</span>
                        </div>
                        <span className="product-info__view-policy-content">3 Ngày trả hàng / Hoàn tiền</span>
                    </div>
                </div>
                <div className={`layout ${isLogin ? 'hide' : ''}`}>
                    <div className="layout-mess">
                        <div className="layout-mess-wrap">
                            <h3 className="layout-mess__header">Bạn chưa đăng nhập. Vui lòng đăng nhập!</h3>
                            <div className="layout-mess__btn-block">
                                <button className="layout-mess__btn-back" onClick={handleBack}>Trở về</button>
                                <button className="layout-mess__btn-login" onClick={handleLogin}>Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return false
    }
}

export default ProductView;