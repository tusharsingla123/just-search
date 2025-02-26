import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBusiness = () => {
    const [getStates, setStates] = useState([]);
    const [getCats, setCats] = useState([]);
    const [getSearch, setSearch] = useState([]);

    const [getStateRecord, setStateRecord] = useState("");
    const [getCatsRecord, setCatsRecord] = useState("");

    useEffect(() => {
        axios.get("//localhost:1000/getstate").then((res) => {
            setStates(res.data);
        });

        axios.get("//localhost:1000/getcategory").then((res) => {
            setCats(res.data);
        });

    });

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("//localhost:1000/getprofile_user", {
            t1: getStateRecord,
            t2: getCatsRecord,

        }).then((res) => {
            setSearch(res.data);
            // console.log(getCatsRecord);
            // console.log(getStateRecord);

            
        });

    };
    return (
        <>
            <section className="banner" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="banner-caption">
                                <div className="line-dec"></div>
                                <h2>Best Finder For You</h2>
                                <span>Suspendisse eu lorem massa. Integer sit amet posuere tellus.</span>
                                <div className="blue-button">
                                    <Link className="scrollTo" to="#">Discover More</Link>
                                </div>
                            </div>
                            <div className="submit-form">
                                <form id="form-submit" action="" method="get">
                                    <div className="row">
                                        <div className="col-md-4 second-item">
                                            <fieldset>
                                                <select required name='state' onChange={(e) => { setStateRecord(e.target.value) }}>
                                                    <option value="">Select your location...</option>
                                                    {
                                                        getStates.map((items) => {
                                                            const { s_id, state_name } = items;
                                                            return (
                                                                <>
                                                                    <option value={state_name}>{state_name}</option>
                                                                </>
                                                            )
                                                        })

                                                    }

                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-4 third-item">
                                            <fieldset>
                                                <select required name='category' onChange={(e) => { setCatsRecord(e.target.value) }}>
                                                    <option value="">Select category...</option>
                                                    {
                                                        getCats.map((items) => {
                                                            const { cat_id, cat_name } = items;
                                                            return (
                                                                <>
                                                                    <option value={cat_name}>{cat_name}</option>
                                                                </>
                                                            )
                                                        })

                                                    }
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-4">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="btn" onClick={handleSubmit}>Search Now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-places" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h1>Search Based Results</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            getSearch.map((items) => {
                                const { profile_id,org_name, profileimage,category,address } = items;
                                var data = "/ALLProfile/"+profile_id;

                                var path = "http://localhost:1000/uploads/"+profileimage;
                                return (
                                    <>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="featured-item">
                                                <div className="thumb">
                                                    <img src={path} alt="" />
                                                    <div className="overlay-content">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="down-content">
                                                    <h4>{org_name}</h4>
                                                    <span>{category}</span>
                                                    <p>{address}</p>
                                                    <div className="row">
                                                        <div className="col-md-6 first-button">

                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="text-button">
                                                                <Link to={data}>Continue Reading</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );

}
export default SearchBusiness;    