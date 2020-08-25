import React from 'react';
import Card from "./Card"

const listings = ({ listings }) => {
    const getListings = () => {
        let listingsOnPage = [];
        let result = [];

        listings.map(listing => {
            return listingsOnPage.push(
                <Card
                    title={listing.title}
                    address={listing.house.address}
                    city={listing.house.city}
                    state={listing.house.state}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.house.home_type}
                    bedrooms={listing.house.bedrooms}
                    bathrooms={listing.house.bathrooms}
                    area={listing.house.area}
                    main_image={listing.main_image}
                    slug={listing.slug}
                />
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div className='row'>
                    
                    <div className='col'>
                        {listingsOnPage[i]}
                    </div>
                    
                    <div className='col'>
                        {listingsOnPage[i+1] ? listingsOnPage[i+1] : null}
                    </div>
                    
                    <div className='col'>
                        {listingsOnPage[i+2] ? listingsOnPage[i+2] : null}
                    </div>

                </div>
            );
        }

        return result;
    };

    return (
        <div>
            {getListings()}
        </div>
    );
}

export default listings;