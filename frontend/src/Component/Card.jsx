import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../assets/card.style.scss"

const Card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    console.log(props)

    return (
        <div className='Card'>
            <h3 className='Card__title'>{props.title}</h3>
            <div className='Card__header'>
                <img className='Card__header__photo' src={props.main_image} alt="House"/>
            </div>
            <p className='Card__location'>{props.address}, {props.state}, {props.zipcode}, {props.city}</p>
            
            <div className='row'>
            
                <div className='col'>
                    <p className='Card__info'>Price: ${numberWithCommas(props.price)}</p>
                    <p className='Card__info'>Bedrooms: {props.bedrooms}</p>
                    <p className='Card__info'>Bathrooms: {props.bathrooms}</p>
                </div>

                <div className='col'>
                    <p className='Card__saletype'>{props.sale_type}</p>
                    <p className='Card__hometype'>{props.home_type}</p>
                    <p className='Card__hometype'>Area: {props.area}</p>
                </div>

            </div>

            <Link className='btn btn-primary pt-2' to={`/listing_details/${props.slug}`}>View Listing</Link>         
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    main_image: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.string.isRequired,
    sale_type: PropTypes.string.isRequired,
    home_type: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Card;