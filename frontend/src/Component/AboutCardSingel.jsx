import React from 'react'
import bootstrap, { Card, CardGroup } from 'react-bootstrap'
import '../assets/aboutCardSingle.style.scss'

class AboutCardSingel extends React.Component {
    render() {
        return (
                <div className="container">

                    <div className="row rowstyle">

                        <div className="col-lg-6 left-side">

                            <h1 className="title">Boligfinder.dk</h1>
                            <p><strong>We are here to help you</strong></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quam ipsam magni minima recusandae! Esse voluptate earum ullam atque eum aperiam odit, 
                                ea, ipsa doloremque fugit sint, 
                                temporibus quos eos accusamus!
                            </p>


                        <div>
                            <p><strong>What we are all about</strong></p>
                            <p className="descriptionAbout">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fuga laboriosam nobis et ullam numquam quis labore aliquid amet, 
                                sit nulla praesentium tenetur mollitia suscipit nihil iure! 
                                Dicta architecto natus aut.
                            </p>
                        </div>


                        <div>
                            <p className="Cool">
                                <p><strong>Motto:</strong></p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. 
                                Illo culpa quo velit dolores est
                            </p>
                        </div>
                        
                        <div>
                            <p>Pictures</p>
                            <img className="pic" src="https://via.placeholder.com/150x150" />
                        </div>
                    
                    
                    </div>

                    <div className="container location">
                        <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutCardSingel;