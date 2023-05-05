import React from 'react'

export const OffersPage = ({offers}) => {
  return (

    <div className='page1'>
        <div className='container1'>
            <div className='offers1'>
                {offers && offers.length > 0 ? (
                offers.map((offer, index) => (
                    <div className="job-offer" key={index}>
                      <h3>{offer.position}</h3>
                      <h4>{offer.company}</h4>
                      <p>
                        <strong>Requisitos:</strong> {offer.requirements}
                      </p>
                      <p>
                        <strong>Ubicación:</strong> {offer.location}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No hay ofertas disponibles.</p>
                )}
            </div>
        </div>
    </div>
  )
}
