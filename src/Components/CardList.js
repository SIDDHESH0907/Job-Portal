import React, { useState } from "react";
import Card from "./Card";
import "./CardList.css";
import employees from "../Database/employee.json";

function CardList() {
  const [search, setSearch] = useState("");

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const pageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div class="search-container">
        <input
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="card-grid">
        {employees
          .filter((employee) => {
            return search.toLowerCase() === ""
              ? employee
              : employee.first_name.toLowerCase().includes(search);
          })
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) // Apply pagination

          .map((employee) => (
            <Card key={employee.id} {...employee} />
          ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default CardList;
