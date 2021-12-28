function Pagtination({ currentPage, pageNumber, minPage, maxPage, handleCurrentPage, handleNextPage, handlePrevPage }) {
    let NumberList = [];
    for (let i = 0; i < pageNumber; i++) {
        NumberList.push(i + 1);
    }
    const renderList = NumberList.slice(minPage - 1, maxPage);
    return (
        <ul className="pagination">
            <li className={`pagination__item ${currentPage === 1 ? 'disable' : ''}`} onClick={handlePrevPage}>
                <li className="pagination__item-link">
                    <i className="pagination__item-icon fas fa-chevron-left" />
                </li>
            </li>
            <li className={`pagination__item ${minPage === 1 ? 'hide' : ''}`}>
                <li className="pagination__item-link">...</li>
            </li>
            {
                renderList.map((page, index) => {
                    return (
                        <li key={index} className={`pagination__item ${currentPage === page ? 'pagination__item--color' : ''}`} onClick={() => { handleCurrentPage(page) }}>
                            <li className="pagination__item-link">{page}</li>
                        </li>
                    )
                })
            }
            <li className={`pagination__item ${maxPage >= pageNumber ? 'hide' : ''}`}>
                <li className="pagination__item-link">...</li>
            </li>
            <li className={`pagination__item ${currentPage === pageNumber ? 'disable' : ''}`} onClick={handleNextPage}>
                <li className="pagination__item-link">
                    <i className="pagination__item-icon fas fa-chevron-right" />
                </li>
            </li>
        </ul>
    )
}

export default Pagtination;