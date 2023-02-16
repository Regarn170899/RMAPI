import React from 'react';

const Pagination = (charactersOnPage,totalCharacters) => {
    const pageNumber=[]

    for(let i=1;i<=Math.ceil(totalCharacters/charactersOnPage);i++){
        pageNumber.push(i)
    }
    return (
        <div>
            pageNumber.map(number=>(
                <div key={number}>{number}</div>
            ))
        </div>
    );
};

export default Pagination;