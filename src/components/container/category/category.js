import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumberActive, setSearch } from "../../../redux/searchHistory/searchHistorySlice";
import { getShoes } from "../../../redux/shoes/shoesSlice";

function Catagory({ handleFilter }) {
    const numberActive = useSelector(state => state.searchHistory.active);
    const [active, setActive] = useState(1);
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        const filter = {
            name: event.target.id
        };
        setActive(Number(event.target.dataset.active));
        dispatch(setSearch(''));
        dispatch(setNumberActive(Number(event.target.dataset.active)));
        dispatch(getShoes(filter));
        handleFilter(event.target.id);
    }

    useEffect(() => {
        setActive(numberActive);
    }, [numberActive]);
    return (
        <div className="col l-2">
            <input type="checkbox" className="check" id="bars-checkbox" />
            <nav className="category">
                <h3 className="category__header">
                    <i className="category__header-icon fas fa-list" />
                    DANH MỤC
                </h3>
                <ul className="category__list">
                    <li className={`category__item ${active === 1 ? 'category__item--active' : ''}`}>
                        <li data-active="1" className="category__item-link" onClick={handleSearch}>Giày sneaker</li>
                    </li>
                    <li className={`category__item ${active === 2 ? 'category__item--active' : ''}`}>
                        <li data-active="2" id="vans" className="category__item-link" onClick={handleSearch}>Giày Vans</li>
                    </li>
                    <li className={`category__item ${active === 3 ? 'category__item--active' : ''}`}>
                        <li data-active="3" id="converse" className="category__item-link" onClick={handleSearch}>Giày Converse</li>
                    </li>
                    <li className={`category__item ${active === 4 ? 'category__item--active' : ''}`}>
                        <li data-active="4" id="fila" className="category__item-link" onClick={handleSearch}>Giày Fila</li>
                    </li>
                    <li className={`category__item ${active === 5 ? 'category__item--active' : ''}`}>
                        <li data-active="5" id="mlb" className="category__item-link" onClick={handleSearch}>Giày MLB</li>
                    </li>
                    <li className={`category__item ${active === 6 ? 'category__item--active' : ''}`}>
                        <li data-active="6" id="puma" className="category__item-link" onClick={handleSearch}>Giày Puma</li>
                    </li>
                    <li className={`category__item ${active === 7 ? 'category__item--active' : ''}`}>
                        <li data-active="7" id="newbalance" className="category__item-link" onClick={handleSearch}>Giày Newbalance</li>
                    </li>
                </ul>
                <ul className="bars__list">
                    <li className="bars__list-item">
                        <li href="true" className="bars__list-link">TÀI KHOẢN</li>
                    </li>
                    <li className="bars__list-item">
                        <li href="true" className="bars__list-link">ĐĂNG XUẤT</li>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Catagory;