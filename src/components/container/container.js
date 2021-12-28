import { useState } from "react";
import Catagory from "./category/category";
import Products from "./products/products";

function Container(){
    const [filter, setFilter] = useState('');
    const handleFilter = (key) => {
        setFilter(key);
    }

    return(
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter container--space">
                    <Catagory handleFilter={handleFilter} />
                    <Products filter={filter} />
                </div>
            </div>
        </div>
    )
}

export default Container;