import React, { useState } from 'react';

function Slider(props) {
  const [currentPage, setCurrentPage] = useState(0);



  const handleNextClick = () => {
    const page = currentPage === props.pages.length - 1 ? 0 : currentPage + 1;
    setCurrentPage(page);
  }

  return (
    <div className="slideContainer ">
      <div>{props.pages[currentPage]}</div>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
}

export default Slider;