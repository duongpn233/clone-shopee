import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../../../../redux/shoes/shoesSlice";

function Filter({ currentPage, pageNumber, filter, handleNextPage, handlePrevPage }) {
    const search = useSelector(state => state.searchHistory.search);
    const [active, setActive] = useState(2);
    const dispatch = useDispatch();
    const handleSortAsc = () => {
        const sortAsc = {
            name: search || filter,
            _sort: "newPrice",
            _order: "asc"
        };
        setActive(4);
        dispatch(getShoes(sortAsc));
    };
    const handleSortDesc = () => {
        const sortDesc = {
            name: search || filter,
            _sort: "newPrice",
            _order: "desc"
        };
        setActive(5);
        dispatch(getShoes(sortDesc));
    };
    const handleSortNew = () => {
        setActive(2);
        const newFilter = {
            name: search || filter,
        }
        dispatch(getShoes(newFilter));
    };
    const handleSortSellNumber = () => {
        const sortDesc = {
            name: search || filter,
            _sort: "sold",
            _order: "desc"
        };
        setActive(3);
        dispatch(getShoes(sortDesc));
    };
    const handleSortPopular = () => {
        const sortDesc = {
            name: search || filter,
            _sort: "amount",
            _order: "desc"
        };
        setActive(1);
        dispatch(getShoes(sortDesc));
    };

    useEffect(() => {
        setActive(2);
    }, [filter, search])
    return (
        <div className="filter hide-on-mobile-tablet">
            <span className="filter__lable">Sắp xếp theo</span>
            <button className={`filter__btn btn ${active === 1 ? 'btn--color' : ''}`} onClick={handleSortPopular}>Phổ biến</button>
            <button className={`filter__btn btn ${active === 2 ? 'btn--color' : ''}`} onClick={handleSortNew}>Mới nhất</button>
            <button className={`filter__btn btn ${active === 3 ? 'btn--color' : ''}`} onClick={handleSortSellNumber}>Bán chạy</button>
            <div className={`filter__select ${(active === 4 || active === 5) ? 'btn--color' : ''}`}>
                <span className="filter__select-lable">Giá</span>
                <i className="filter__select-icon fas fa-chevron-down" />
                <ul className="filter__select-list">
                    <li className={`filter__select-item ${active === 4 ? '' : 'hide'}`}>
                        <li className="filter__select-item-link" onClick={handleSortAsc}>Từ thấp đến cao</li>
                        <i className="filter__select-item-icon fas fa-check"></i>
                    </li>
                    <li className={`filter__select-item ${active === 5 ? '' : 'hide'}`}>
                        <li className="filter__select-item-link" onClick={handleSortDesc}>Từ cao đến thấp</li>
                        <i className="filter__select-item-icon fas fa-check"></i>
                    </li>
                </ul>
            </div>
            <div className="filter__page">
                <span className="filter__page-number">
                    <span className="filter__page-current">{currentPage}</span>/{pageNumber}
                </span>
                <div className="filter__page-ctrl">
                    <li className={`filter__page-btn ${currentPage === 1 ? 'filter__page-btn--limit' : ''}`}
                        onClick={handlePrevPage}>
                        <i className="filter__page-icon fas fa-chevron-left" />
                    </li>
                    <li className={`filter__page-btn ${currentPage === pageNumber ? 'filter__page-btn--limit' : ''}`}
                        onClick={handleNextPage}>
                        <i className="filter__page-icon fas fa-chevron-right" />
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Filter;