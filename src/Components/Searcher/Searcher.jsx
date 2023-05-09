import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";
import { FilterModal } from "../FilterModal/FilterModal";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

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
      {(location.pathname === "/home" ||
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
        <TbAdjustmentsHorizontal
          onClick={handleFilterClick}
          className=""
        ></TbAdjustmentsHorizontal>
        <FilterModal isOpen={open} />
      </div>
    </>
  );
}
