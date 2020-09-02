import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./pagination.css";

export default function Paginations(props){

const[activePage, getActivePage] = useState(1);
 
//here we are getting the number of the current page, and passing it back to the App.js component
//to fetch 10 new users from the next page
const handlePageChange = (pageNumber) => {
      getActivePage(pageNumber);
      props.setCurrentPage(pageNumber)
    }
  
return(
<div id="paginationContainer">
  {/*This component is from the react-js-pagination library doc*/}  
        <Pagination
          firstPageText={<i className="fas fa-angle-double-left"></i>}
          lastPageText={<i className="fas fa-angle-double-right"></i>}
          prevPageText={<i className="fas fa-angle-left"></i>}
          nextPageText={<i className="fas fa-angle-right"></i>}
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={props.searchResults}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>

    )
}