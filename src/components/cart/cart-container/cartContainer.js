import convertToString from "../../../until/convert";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartUser, getCartUser } from "../../../redux/cartUser/cartUserSlicce";
import { getShops } from "../../../redux/shops/shopSlice";
import "./cartContainer.css";
function CartContainer({ user }) {
    const cartUser = useSelector(state => state.cartUser.cartUser);
    const shops = [...useSelector(state => state.shops.shopsList)];
    const [shopsRender, setShopsRender] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0);
    const [voucherActive, setVoucherActive] = useState(null);
    const [checkAll, setCheckAll] = useState(false);
    const [shopCheked, setShopCheked] = useState([]);
    const [itemChecked, setItemChecked] = useState({});
    const refItemCheck = useRef({});
    const dispatch = useDispatch();
    refItemCheck.current = {};

    const handleCheckAll = () => {
        if (checkAll) {
            setCheckAll(!checkAll);
            setShopCheked([]);
            setItemChecked({});
        }
        else {
            const newShopcheck = shopsRender.map((item) => item._id);
            const newItemChecked = { ...refItemCheck.current };
            setItemChecked(newItemChecked);
            setShopCheked(newShopcheck);
            setCheckAll(!checkAll);
        }
    };

    const handleCheckAllShop = (id) => {
        const newItemChecked = { ...itemChecked };
        const isMatch = shopCheked.includes(id);
        if (isMatch) {
            const newShopcheck = shopCheked.filter(item => item !== id);
            newItemChecked[id] = [];
            setShopCheked(newShopcheck);
            setItemChecked(newItemChecked);
            setCheckAll(false);
        }
        else {
            const newItemCheckedArray = [...refItemCheck.current[id]];
            newItemChecked[id] = newItemCheckedArray;
            if (shopCheked.length === shopsRender.length - 1) {
                setCheckAll(true);
            }
            setShopCheked([...shopCheked, id]);
            setItemChecked(newItemChecked);
        }
    };

    const handleCheckItem = (shopId, itemId) => {
        const isMatch = itemChecked[shopId] ? itemChecked[shopId].includes(itemId) : false;
        const newItemChecked = { ...itemChecked };
        if (isMatch) {
            const newShopcheck = shopCheked.filter(item => item !== shopId);
            newItemChecked[shopId] = newItemChecked[shopId].filter(item => item !== itemId);
            setShopCheked(newShopcheck);
            setItemChecked(newItemChecked);
            setCheckAll(false);
        }
        else {
            if (itemChecked[shopId]) {
                if (itemChecked[shopId].length === refItemCheck.current[shopId].length - 1) {
                    setShopCheked([...shopCheked, shopId]);
                    if (shopCheked.length === shopsRender.length - 1) {
                        setCheckAll(true);
                    }
                }
                newItemChecked[shopId] = [...newItemChecked[shopId], itemId];
            }
            else {
                if (refItemCheck.current[shopId].length === 1) {
                    setShopCheked([...shopCheked, shopId]);
                    if (shopCheked.length === shopsRender.length - 1) {
                        setCheckAll(true);
                    }
                }
                newItemChecked[shopId] = [itemId];
            }
            setItemChecked(newItemChecked);
        }
    }

    const handleVoucher = (index) => {
        if (index === voucherActive) {
            setVoucherActive(null);
        }
        else {
            setVoucherActive(index);
        }
    };

    const handleDelete = (itemId, shopId, num) => {
        dispatch(deleteCartUser({
            id: itemId,
            index: num
        }));
        const newItemChecked = { ...itemChecked };
        if (newItemChecked[shopId]) {
            newItemChecked[shopId] = newItemChecked[shopId].filter(item => item !== itemId);
            if (newItemChecked[shopId].length === 0) {
                const newShopcheck = shopCheked.filter(item => item !== shopId);
                if (newShopcheck.length === 0) {
                    setCheckAll(false);
                }
                setShopCheked(newShopcheck);
            }
            else if(newItemChecked[shopId].length === refItemCheck.current[shopId].length - 1){
                if(shopCheked.length === shopsRender.length - 1){
                    setCheckAll(true);
                }
                setShopCheked([...shopCheked, shopId]);
            }
            setItemChecked(newItemChecked);
        }
        else if(shopCheked.length && shopCheked.length === shopsRender.length - 1 && refItemCheck.current[shopId].length === 1){
            setCheckAll(true);
        }
    };

    useEffect(() => {
        if (user.userName) {
            dispatch(getCartUser());
        }
    }, [user]);

    useEffect(() => {
        dispatch(getShops());
    }, [])

    useEffect(() => {
        if (cartUser.length != 0 && shops.length != 0) {
            const cloneShops = [];
            for (let i = 0; i < cartUser.length; i++) {
                for (let j = 0; j < shops.length; j++) {
                    if (cartUser[i].shopId === shops[j]._id) {
                        cloneShops.push(shops[j]);
                        shops.splice(j, 1);
                        break;
                    }
                }
            }
            setShopsRender(cloneShops);
        }
    }, [cartUser]);

    useEffect(() => {
        if (cartUser.length) {
            let cloneTotalPayment = 0;
            for (let item of Object.keys(itemChecked)) {
                for (let i = 0; i < itemChecked[item].length; i++) {
                    for (let j = 0; j < cartUser.length; j++) {
                        if (itemChecked[item][i] === cartUser[j]._id) {
                            cloneTotalPayment = cloneTotalPayment + cartUser[j].itemPrice * cartUser[j].itemAmount;
                        }
                    }
                }
            }
            setTotalPayment(cloneTotalPayment);
        }
    }, [itemChecked]);

    return (
        <div className={`cart-container ${cartUser.length ? '' : 'no-cart'}`}>
            <div className="cart-container-no-cart">
                <div className="cart-container-no-cart-img" style={{ backgroundImage: "url(/img/no-cart.png)" }}></div>
            </div>
            <div className="grid wide">
                <div className="cart-instruct">
                    <div className="cart-instruct-icon">
                        <img className="cart-instruct-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png"></img>
                    </div>
                    <div className="cart-instruct-title">Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
                </div>
                <div className="cart-detail-bar">
                    <div className="cart-detail-bar-left">
                        <div className="cart-detail-check-wrap">
                            <input className="cart-detail-check" type="checkbox" onChange={() => handleCheckAll()} checked={checkAll}></input>
                        </div>
                        <span className="cart-detail-bar-product">Sản phẩm</span>
                    </div>
                    <div className="cart-detail-bar-right">
                        <div className="cart-detail-bar-title">Đơn giá</div>
                        <div className="cart-detail-bar-title">Số lượng</div>
                        <div className="cart-detail-bar-title">Số tiền</div>
                        <div className="cart-detail-bar-title">Thao tác</div>
                    </div>
                </div>
                {
                    shopsRender.map((shop, index) => {
                        return (
                            <div className="cart-detail-info" key={index}>
                                <div className="cart-detail-shop">
                                    <div className="cart-detail-check-wrap">
                                        <input className="cart-detail-check" type="checkbox" onChange={() => handleCheckAllShop(shop._id)} checked={shopCheked.includes(shop._id)}></input>
                                    </div>
                                    <div className="cart-detail-shop-like">Yêu thích</div>
                                    <div className="cart-detail-shop-name">{shop.name}</div>
                                    <div className="cart-detail-shop-chat">
                                        <svg viewBox="0 0 16 16" className="shopee-svg-icon _2KYoW7 "><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g></svg>
                                    </div>
                                </div>
                                <div className="cart-detail-product-wrap">
                                    {
                                        cartUser.map((item, num) => {
                                            if (item.shopId === shop._id) {
                                                if (refItemCheck.current[shop._id]) {
                                                    refItemCheck.current[shop._id].push(item._id);
                                                }
                                                else {
                                                    refItemCheck.current[shop._id] = [item._id];
                                                }
                                                return (
                                                    <div className="cart-detail-product" key={num}>
                                                        <div className="cart-detail-product-info">
                                                            <div className="cart-detail-check-wrap">
                                                                <input className="cart-detail-check" type="checkbox" onChange={() => handleCheckItem(shop._id, item._id)} checked={itemChecked[shop._id] ? itemChecked[shop._id].includes(item._id) : false}></input>
                                                            </div>
                                                            <div className="cart-detail-product-img-wrap">
                                                                <div className="cart-detail-product-img" style={{ backgroundImage: `url(${item.imgItem})` }}></div>
                                                            </div>
                                                            <h4 className="cart-detail-product-name">{item.itemName}</h4>
                                                        </div>
                                                        <div className="cart-detail-product-classify">
                                                            <h4 className="cart-detail-product-classify-title">Phân loại hàng</h4>
                                                            <h4 className="cart-detail-product-classify-type">Cổ cao</h4>
                                                        </div>
                                                        <div className="cart-detail-product-info-right">
                                                            <h4 className="cart-detail-product-price">{convertToString(item.itemPrice, false)}đ</h4>
                                                            <h4 className="cart-detail-product-quantity">{item.itemAmount}</h4>
                                                            <h4 className="cart-detail-product-into-money">{convertToString(item.itemPrice * item.itemAmount, false)}đ</h4>
                                                            <h4 className="cart-detail-product-operation" onClick={() => handleDelete(item._id, shop._id, num)}>Xoá</h4>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className="cart-detail-voucher">
                                    <div className="cart-detail-voucher-icon">
                                        <svg viewBox="0 -2 23 22" className="shopee-svg-icon _3m_0nP icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" ><path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                                    </div>
                                    <div className="cart-detail-voucher-title">
                                        <h4 className="cart-detail-voucher-title-item">Shop Voucher giảm đến 20k</h4>
                                        <h4 className="cart-detail-voucher-title-item">Shop Voucher giảm lớn khi mua nhiều</h4>
                                    </div>
                                    <div className={`cart-detail-voucher-more ${index === voucherActive ? 'active' : ''}`} onClick={() => handleVoucher(index)}>Thêm mã giảm giá của shop
                                        <div className="cart-detail-voucher-wrap">
                                            <h3 className="cart-detail-voucher-shop-name">{shop.name}</h3>
                                            <div className="cart-detail-voucher-input-group">
                                                <h4 className="cart-detail-voucher-input-title">Mã Voucher</h4>
                                                <div className="cart-detail-voucher-input-wrap">
                                                    <input className="cart-detail-voucher-input" type="text" placeholder="Nhập mã Voucher của Shop"></input>
                                                </div>
                                                <div className="cart-detail-voucher-input-apply">Áp dụng</div>
                                            </div>
                                            <div className="cart-detail-voucher-mess">Chọn sản phẩm trước khi nhập mã voucher</div>
                                            <div className="cart-detail-voucher-info-wrap">
                                                <div className="cart-detail-voucher-info">
                                                    <div className="cart-detail-voucher-info-shop">
                                                        <div className="cart-detail-voucher-info-shop-img-wrap">
                                                            <div className="cart-detail-voucher-info-shop-img" style={{ backgroundImage: `url(${shop.img})` }}></div>
                                                        </div>
                                                        <div className="cart-detail-voucher-info-shop-rim">
                                                            <div className="cart-detail-voucher-info-shop-rim-override"></div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-detail-voucher-info-condition-group">
                                                        <div className="cart-detail-voucher-info-condition-wrap">
                                                            <h4 className="cart-detail-voucher-info-value">Giảm 20.000đ</h4>
                                                            <h4 className="cart-detail-voucher-info-condition">Đơn tối thiểu 1.000.000đ</h4>
                                                            <h4 className="cart-detail-voucher-info-expiry">HSD: 10.01.2022</h4>
                                                        </div>
                                                        <div className="cart-detail-voucher-info-save">Lưu</div>
                                                    </div>
                                                </div>
                                                <div className="cart-detail-voucher-info">
                                                    <div className="cart-detail-voucher-info-shop">
                                                        <div className="cart-detail-voucher-info-shop-img-wrap">
                                                            <div className="cart-detail-voucher-info-shop-img" style={{ backgroundImage: `url(${shop.img})` }}></div>
                                                        </div>
                                                        <div className="cart-detail-voucher-info-shop-rim">
                                                            <div className="cart-detail-voucher-info-shop-rim-override"></div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-detail-voucher-info-condition-group">
                                                        <div className="cart-detail-voucher-info-condition-wrap">
                                                            <h4 className="cart-detail-voucher-info-value">Giảm 20.000đ</h4>
                                                            <h4 className="cart-detail-voucher-info-condition">Đơn tối thiểu 1.000.000đ</h4>
                                                            <h4 className="cart-detail-voucher-info-expiry">HSD: 10.01.2022</h4>
                                                        </div>
                                                        <div className="cart-detail-voucher-info-save">Lưu</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-detail-ship">
                                    <div className="cart-detail-ship-icon">
                                        <img className="cart-detail-ship-icon-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png"></img>
                                    </div>
                                    <div className="cart-detail-ship-title">
                                        <h4 className="cart-detail-ship-title-item">Miễn Phí Vận Chuyển cho đơn hàng từ 250.000đ (giảm tối đa 25.000đ)</h4>
                                    </div>
                                    <div className="cart-detail-ship-more">Tìm hiểu thêm
                                        <div className="cart-detail-ship-info-wrap">
                                            <h3 className="cart-detail-ship-info-title">Khuyến mãi vận chuyển</h3>
                                            <h4 className="cart-detail-ship-info-name">{shop.name}</h4>
                                            <div className="cart-detail-ship-info-bar">
                                                <h4 className="cart-detail-ship-info-bar-item">Đơn hàng tối thiểu</h4>
                                                <h4 className="cart-detail-ship-info-bar-item">Ưu đãi</h4>
                                                <h4 className="cart-detail-ship-info-bar-item">Phương thức vận chuyển</h4>
                                            </div>
                                            <div className="cart-detail-ship-info-value-wrap">
                                                <h4 className="cart-detail-ship-info-value">250.000đ</h4>
                                                <h4 className="cart-detail-ship-info-value">25.000đ</h4>
                                                <h4 className="cart-detail-ship-info-value">Hoả tốc nhanh</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="cart-detail-pay-group">
                    <div className="cart-detail-pay-summary">
                        <div className="cart-detail-pay-summary-left">
                            <div className="cart-detail-pay-summary-check-wrap">
                                <input className="cart-detail-pay-summary-check" type="checkbox" onChange={() => handleCheckAll()} checked={checkAll}></input>
                            </div>
                            <h3 className="cart-detail-pay-summary-title">Chọn tất cả</h3>
                            <h3 className="cart-detail-pay-summary-delete">Xoá</h3>
                        </div>
                        <h3 className="cart-detail-pay-summary-invoice">Tổng đơn giá: {convertToString(totalPayment, false)}đ</h3>
                    </div>
                    <div className="cart-detail-pay-shopee-vc">
                        <div className="cart-detail-pay-shopee-vc-info-group">
                            <div className="cart-detail-pay-shopee-vc-icon">
                                <svg viewBox="0 -2 23 22" className="shopee-svg-icon _3m_0nP icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" ><path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                            </div>
                            <h4 className="cart-detail-pay-shopee-vc-title">Shopee Voucher</h4>
                            <div className="cart-detail-pay-shopee-vc-more">Chọn hoặc nhập mã
                                <div className="cart-detail-pay-shopee-vc-wrap">
                                    <h3 className="cart-detail-pay-shopee-vc-shop-name">Chọn Shopee Voucher</h3>
                                    <div className="cart-detail-pay-shopee-vc-input-group">
                                        <h4 className="cart-detail-pay-shopee-vc-input-title">Mã Voucher</h4>
                                        <div className="cart-detail-pay-shopee-vc-input-wrap">
                                            <input className="cart-detail-pay-shopee-vc-input" type="text" placeholder="Nhập mã Voucher của Shop"></input>
                                        </div>
                                        <div className="cart-detail-pay-shopee-vc-input-apply">Áp dụng</div>
                                    </div>
                                    <div className="cart-detail-pay-shopee-vc-mess">Chọn sản phẩm trước khi nhập mã voucher</div>
                                    <div className="cart-detail-pay-shopee-vc-info-wrap">
                                        <div className="cart-detail-pay-shopee-vc-info">
                                            <div className="cart-detail-pay-shopee-vc-info-shop">
                                                <div className="cart-detail-pay-shopee-vc-info-shop-title">Miễn phí vận chuyển</div>
                                            </div>
                                            <div className="cart-detail-pay-shopee-vc-info-condition-group">
                                                <div className="cart-detail-pay-shopee-vc-info-condition-wrap">
                                                    <h4 className="cart-detail-pay-shopee-vc-info-method">Tất cả các hình thức thanh toán</h4>
                                                    <h4 className="cart-detail-pay-shopee-vc-info-condition">50% - Tối đa 40k</h4>
                                                    <h4 className="cart-detail-pay-shopee-vc-info-expiry">HSD: 10.01.2022</h4>
                                                </div>
                                                <div className="cart-detail-pay-shopee-vc-info-expiry-more">Điều kiện</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-detail-pay-shopee-vc-btn">
                                        <div className="cart-detail-pay-shopee-vc-btn-out">Trở lại</div>
                                        <div className="cart-detail-pay-shopee-vc-btn-agree">Đồng ý</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-detail-pay-shopee-vc-value">- 0đ</div>
                    </div>
                    <div className="cart-detail-pay-coins">
                        <div className="cart-detail-pay-coins-left">
                            <div className="cart-detail-pay-coins-icon">
                                <svg fill="none" viewBox="0 0 18 18" className="shopee-svg-icon _1nDYM0 icon-coin-line"><path stroke="#FFA600" strokeWidth="1.3" d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"></path><path fill="#FFA600" fillRule="evenodd" stroke="#FFA600" strokeWidth=".2" d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z" clipRule="evenodd"></path></svg>
                            </div>
                            <h3 className="cart-detail-pay-coins-title">Shopee xu</h3>
                            <h3 className="cart-detail-pay-coins-mess">Bạn chưa có xu</h3>
                        </div>
                        <h3 className="cart-detail-pay-coins-value">- 0đ</h3>
                    </div>
                    <div className="cart-detail-pay-totalpayment">
                        <div className="cart-detail-pay-totalpayment-wrap">
                            <h3 className="cart-detail-pay-totalpayment-title">Tổng thanh toán</h3>
                            <h3 className="cart-detail-pay-totalpayment-value">{convertToString(totalPayment, false)}đ</h3>
                        </div>
                        <div className="cart-detail-pay-totalpayment-submit">Mua hàng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer;