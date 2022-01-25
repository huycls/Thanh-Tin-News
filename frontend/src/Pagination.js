import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({productPerPage, totalProduct, paginate, currentPage}) => {
    const pagehomeNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++){
        pagehomeNumbers.push(i);
    }

   
    return <nav aria-label="Page navigation example">
        <ul id="myPagination" className="pagination center rowe">
        <li className="page-item"><Link onClick={() => paginate(1)} className="page-link" to="#"> Đầu </Link></li>
        {currentPage > 5 ? (<li className="etc">...</li>) : ""}
            {pagehomeNumbers.map(num => (
                num < currentPage + 5 && num > currentPage -5 ? (<li key={num} className={(currentPage === num ? 'active ' : '') + "page-item"}>
                    <Link to="#" onClick={() => paginate(num)} className="page-link">
                        {num}
                    </Link>
                </li>) :""
            ))}
            {currentPage < (pagehomeNumbers[pagehomeNumbers.length - 1]) - 5 ? (<li className="etc">...</li>) : ""}
            <li class="page-item"><Link onClick={() =>  paginate(pagehomeNumbers[pagehomeNumbers.length - 1])} className="page-link" to="#">Cuối</Link></li>  
        </ul>
    </nav>
}

export default Pagination;