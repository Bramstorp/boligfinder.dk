import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Loader from 'react-loader-spinner';

const ListingForm = () => {
    const [formData, setFormData] = useState({
        slug: '',
        agent: null,
        title: '',
        description: '',
        price: '',
        sale_type: "",
        main_image: null,
        is_published: true
    });

    const { slug, agent, title, description, sale_type, price, main_image, is_published} = formData;
    
    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post("http://127.0.0.1:8000/api/listing/create/", { slug, agent, title, description, sale_type, price, main_image, is_published }, config)
        .then(res => {
          setAlert('Listing added', 'success');
            setLoading(false);
            window.scrollTo(0, 0)
            window.location("/")
            
        })
        .catch(error => {
            setAlert('Error House was not added', 'error');
            setLoading(false)
            window.scrollTo(0, 0)
        })
    };
    

    return ( 
        <form className="form-horizontal container former" onSubmit={e => onSubmit(e)}>
          <h2 className="house_title">Add House</h2>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Agent:</label>     
              <div className="col-sm-10">
                <input className="form-control" type="text" name="agent" onChange={e => onChange(e)} value={agent}/>        
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Slug:</label>      
              <div className="col-sm-10">
                <input type="text" className="form-control" name="slug" onChange={e => onChange(e)} value={slug}/>        
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title:</label>     
              <div className="col-sm-10">
                <input className="form-control" type="text" name="title" onChange={e => onChange(e)} value={title}/>        
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description:</label>     
              <div className="col-sm-10">
                <input className="form-control" type="text" name="description" onChange={e => onChange(e)} value={description}/>        
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Sale Type:</label>      
              <div className="col-sm-6">
                <select class="form-control" name='sale_type' onChange={e => onChange(e)} value={sale_type}>
                    <option>For Sale</option>
                    <option>For Rent</option>
                </select>     
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Main Image:</label>     
              <div className="col-sm-6">
                <input type="file" className="form-control-file" name="price" onChange={e => onChange(e)} value={price}/>        
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-2 col-form-label">is_published:</label>     
              <div className="col">
                <input type="checkbox" className="form-check-input" name="is_published" onChange={e => onChange(e)} value={is_published}/>        
              </div>
          </div>


            <div className="form-group row">
            {loading ?
              
            <div className='contact__form__loader'>                  
              <Loader type="Circles" color="#00BFFF" height={80} width={80} />   
            </div> :

              <div className="col-sm-2"> 
                <button className="form-control btn btn-primary" type="submit">Save</button>        
              </div> 
                  
            }
          </div>

        </form>

    )
}

export default ListingForm