
function ProductLink(props) {
    const { shoes } = props;

    if (shoes) {
        return (
            <div className="link">
                <a href="true" className="link-home">Shopee</a>
                <span className="link-icon">
                    <i className="fas fa-chevron-right" />
                </span>
                <a href="true" className="link-product-type">Giày dép</a>
                <span className="link-icon">
                    <i className="fas fa-chevron-right" />
                </span>
                <h4 className="link-name">{shoes.name}</h4>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ProductLink;