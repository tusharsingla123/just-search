import React from 'react'
import { Link } from 'react-router-dom'

const TopBusiness = () => {
    return (
        <section className="popular-places" id="popular">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Top Businesses</h2>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme">
                <div className="item popular-item">
                    <div className="thumb">
                        <img src="img/popular_item_1.jpg" alt=""/>
                        <div className="text-content">
                            <h4>Mauris tempus</h4>
                            <span>76 listings</span>
                        </div>
                        <div className="plus-button">
                            <Link to="#"><i className="fa fa-plus"></i></Link>
                        </div>
                    </div>
                 </div>   
                </div>
            </div>
        </section>
    );
}

export default TopBusiness;
