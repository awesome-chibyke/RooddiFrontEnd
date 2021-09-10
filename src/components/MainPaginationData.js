import React, { useState } from "react";

function MainPaginationData({ data, dataLimit, currentPage }) {
//console.log(data)
    const getPaginatedData = () => {
        // not yet implemented
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    return {getPaginatedData:getPaginatedData()};
}

export default MainPaginationData;