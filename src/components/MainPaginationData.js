import React, { useState } from "react";

function MainPaginationData({ data, dataLimit, currentPage}) {
//console.log(data)
    const getPaginatedData = () => {
        // not yet implemented
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return {mainData:data.slice(startIndex, endIndex), startIndex, endIndex};
    };

    const {mainData, startIndex, endIndex} = getPaginatedData();
    return {getPaginatedData:mainData, startIndex, endIndex};
}

export default MainPaginationData;