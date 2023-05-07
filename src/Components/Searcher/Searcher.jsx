import React, { useContext, useEffect } from 'react'
import { SearchContext } from "../../App";
import { useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

export default function Searcher() {


    const location = useLocation()
    console.log(location.pathname);

    const { searchText, setSearchText } = useContext(SearchContext);

    useEffect(() => {
        setSearchText("");
    }, [location.pathname]);

    return (
        <div className="">
            <div className="">
                {/* {(location.pathname === '/candidates' || location.pathname === '/offers') && */}
                    <div className="">
                        <BiSearch className="lupa" />
                        <input
                            className=""
                            type="text"
                            id="buscar"
                            placeholder="Buscar"
                        onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
            </div>
        </div>

    )
}
