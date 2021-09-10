import React, { useState } from "react";

function Pagination({ data, title, pageLimit, dataLimit, currentPage, setCurrentPage, pages }){ //RenderComponent

    function goToNextPage() {
        // not yet implemented
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        // not yet implemented
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        // not yet implemented
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        // not yet implemented
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        // not yet implemented
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            {/*<h1>{title}</h1>*/}

            {/* show the posts, 10 posts at a time */}
            {/*<div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>*/}

            {/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time
            */}
            <div className="pagination">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}
                {/* next button */}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>

            </div>
        </div>
    );
}

export default Pagination;