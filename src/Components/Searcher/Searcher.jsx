import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";
import { FilterModal } from "../FilterModal/FilterModal";

export default function Searcher() {
  const location = useLocation();
  console.log(location.pathname);

  const { searchText, setSearchText } = useContext(SearchContext);
  const [open, setOpen] = useState(false);
  
  const handleFilterClick = () => {
    setOpen(true);
  };
  
  useEffect(() => {
    setSearchText("");
  }, [location.pathname]);

  return (
    <>
      {(location.pathname === "/candidates" ||
        location.pathname === "/offers" ||
        location.pathname === "/candidates") && (
          <input
            className="dentro-buscador"
            type="text"
            id="buscar"
            placeholder="Buscar"
            onChange={(e) => setSearchText(e.target.value)}
          />
        )}
      <div>
        <button onClick={handleFilterClick} className=''>Filtro</button>
        <FilterModal isOpen={open} />
      </div>
    </>
  );
}
