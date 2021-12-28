import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../../../redux/shoes/shoesSlice";
import Filter from "./filter/filter";
import Pagtination from "./pagination/pagination";
import ProductList from "./product-list/productList";

function Products({ filter }) {
    const shoesList = useSelector(state => state.shoes.shoesList);
    const search = useSelector(state => state.searchHistory.search);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPage, setMinPage] = useState(1);
    const [maxPage, setMaxPage] = useState(5);
    const start = 10 * (currentPage - 1);
    const end = 10 * currentPage;
    const currentShoes = shoesList.slice(start, end);
    const pageNumber = Math.ceil(shoesList.length / 10);

    const dispatch = useDispatch();
    const handleCurrentPage = (index) => {

        setCurrentPage(index);
    };
    const handleNextPage = () => {
        if (currentPage < pageNumber) {
            setCurrentPage(currentPage + 1);
            if (currentPage + 1 > maxPage) {
                setMaxPage(maxPage + 5);
                setMinPage(minPage + 5);
            }
        }
    }
    const handlePrevPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if (currentPage - 1 < minPage) {
                setMaxPage(maxPage - 5);
                setMinPage(minPage - 5);
            }
        }
    }

    useEffect(() => {
        const params = {
            name: search
        };
        dispatch(getShoes(params));
    }, [])

    return (
        <div className="col l-10">
            <Filter currentPage={currentPage}
                pageNumber={pageNumber}
                filter={filter}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage} />
            <ProductList currentShoes={currentShoes} />
            <Pagtination currentPage={currentPage}
                pageNumber={pageNumber}
                minPage={minPage}
                maxPage={maxPage}
                handleCurrentPage={handleCurrentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage} />
        </div>
    )
}

export default Products;