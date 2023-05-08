import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";

export default function Searcher() {
  const location = useLocation();
  console.log(location.pathname);

  const { setSearchText } = useContext(SearchContext);

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
    </>
  );
}
