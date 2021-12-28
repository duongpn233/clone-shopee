import convertToString from "../../../until/convert";

function ProductDetail({ shoes }) {
    if (shoes) {
        return (
            <div className="product-detail">
                <div className="row product-detail-background">
                    <div className="col l-12">
                        <span className="product-detail-header">Chi tiết sản phẩm</span>
                        <div className="product-detail-wrap">
                            <ul className="product-detail-list-title">
                                <li className="product-detail-item-title">Danh mục</li>
                                <li className="product-detail-item-title">Thương hiệu</li>
                                <li className="product-detail-item-title">Xuất xứ</li>
                                <li className="product-detail-item-title">Kho hàng</li>
                                <li className="product-detail-item-title">Gửi từ</li>
                            </ul>
                            <ul className="product-detail-list-content">
                                <li className="product-detail-item-link">
                                    <a href="true" className="product-detail-item-link-home">Shopee</a>
                                    <span className="product-detail-item-link-icon">
                                        <i className="fas fa-chevron-right" />
                                    </span>
                                    <a href="true" className="product-detail-item-link-product-type">Giày dép</a>
                                </li>
                                <li className="product-detail-item-content">{shoes.brand}</li>
                                <li className="product-detail-item-content">{shoes.origin}</li>
                                <li className="product-detail-item-content">{convertToString(shoes.amount, true)}</li>
                                <li className="product-detail-item-content">Quận Cầu Giấy, Hà Nội</li>
                            </ul>
                        </div>
                        <span className="product-detail-header">Mô tả sản phẩm</span>
                        <ul className="product-detail-list-content product-detail-list-content--alignment">
                            <li className="product-detail-item-content">Chất Liệu Upper: Vải</li>
                            <li className="product-detail-item-content">Chất Liệu Đế: Cao Su</li>
                            <li className="product-detail-item-content">Kiểu Dáng: Cổ Cao (High)</li>
                            <li className="product-detail-item-content">Tình Trạng: Mới 100% Fullbox</li>
                        </ul>
                        <span className="product-detail-commitment">SHOP CAM KẾT</span>
                        <ul className="product-detail-list-content product-detail-list-content--alignment">
                            <li className="product-detail-item-content">Về sản phẩm: Hàng THẬT 100%</li>
                            <li className="product-detail-item-content">Về dịch vụ: Shop sẽ cố gắng trả lời hết những
                                thắc mắc xoay quanh sản phẩm nhé</li>
                            <li className="product-detail-item-content">Về vận chuyển: Ship COD toàn quốc</li>
                            <li className="product-detail-item-content">Thời gian chuẩn bị hàng: Hàng có sẵn, thời gian
                                chuẩn bị tối ưu nhất</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    else return false;
}

export default ProductDetail;