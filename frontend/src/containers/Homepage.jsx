import React, { useState } from "react"
import axios from "axios"
import ListingForm from "../Component/ListingForm"
import Listings  from "../Component/Listings"
import Pagination from '../Component/Pagination';
import HompageImage from "../Component/HomepageImage.jsx"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/base.style.scss"

const Homepage = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    };

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    };

	return(
		<div>
            <section>
                <HompageImage />
            </section>

            <div className="container">
                <section className='home__form'>
                    <ListingForm setListings={setListings} />
                </section>

                <section className='home__listings'>
                    <Listings listings={currentListings} />
                </section>  		
            </div>
		</div>
	)
}

export default Homepage