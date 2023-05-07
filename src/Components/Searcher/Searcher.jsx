import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";


export default function Searcher() {
  const location = useLocation();
  console.log(location.pathname);

  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    setSearchText("");
  }, [location.pathname]);

  return (
    //   location.pathname === '/candidates' || location.pathname === '/offers') && 
      <div className="Buscador">
          <BiSearch className="lupa" />
          <input
            className="dentro-buscador"
            type="text"
            id="buscar"
            placeholder="Buscar"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <TbAdjustmentsHorizontal />
        </div> 
  );
}
