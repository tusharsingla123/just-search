import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Getprofile = () => {

    const [getData, setData] = useState([]);
    const [getInputs] = useState({});
    //var email = localStorage.getItem("email");

    const mystyle = {
        border:'none',
        outline:'none'
        
      };

    const param = useParams();

    useEffect(() => {
        
        axios.post("//localhost:1000/getprofile_search", {
            t1: param.pid,
        }).then((res) => {
            setData(res.data);
        });
        
        //alert(email);
        // axios.get(`//localhost:1000/getallprofile`).then((res) => {
        //     setData(res.data);
        //     //console.log(res.data)
        // })
    });
    return (
        <>
            {
                getData.map((post) => {
                    const { email_id, first_name, last_name, category, org_name, address, city, state, contactno, contact_person, gmap_link,profileimage } = post;
                    var path = "http://localhost:1000/uploads/"+profileimage;

                    return (
                        <>
                        
                            <section id="top">
                                <div className="container">
                                    <div className="row">
                                        <h2 style={{ 'text-align': 'center', 'margin-bottom': '30px' }}>USER PROFILE</h2>
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <div className="card mb-4 mb-xl-0">

                                                    <div className="card-body text-center">
                                                        <img className="img-account-profile rounded-circle mb-2" src={path} alt="Profile Image Here" style={{width:"700px"}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <form className="form-horizontal" action="">
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="email">Email:</label>
                                                    <div className="col-sm-10">
                                                        <input type="email" className="form-control" id="email" value={email_id} name="email" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="name">FIRST NAME:</label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control" id="name" value={first_name} name="first name" style={mystyle}/>

                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="name">LAST NAME:</label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control" id="name" value={last_name} name="last name" style={mystyle}/>
                                                    </div>
                                                </div>
                                                {/* <div className="form-group">
                        <label className="control-label col-sm-2" for="gender">Gender</label>
                        <div className="col-sm-10">
                            <select name="gender" id="gender" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                        </div>
                    </div> */}
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="category">Category:</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="category" value={category} name="category" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="org">ORGANISATION NAME: </label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="org" value={org_name} name="organisation name" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="ads">ADDRESS: </label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="ads" value={address} name="address" style={mystyle}/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="state">STATE:</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="state" value={state} name="state" style={mystyle}/>

                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="city">CITY:</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="city" value={city} name="city" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="cn">CONTACT NUMBER: </label>
                                                    <div className="col-sm-10">
                                                        <input type="tel" className="form-control" id="cn" value={contactno} name="contact number" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="cp">CONTACT PERSON: </label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="cp" value={contact_person} name="person name" style={mystyle}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-2" for="map">GOOGLE MAP LINK: </label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" id="map" value={gmap_link} name="map" style={mystyle}/>
                                                    </div>
                                                </div>
                                                {/* <div className="form-group">
                        <div className="col-sm-offset-6 col-sm-30">
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </div>
                    </div> */}
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                })
            }
        </>
    )
}

export default Getprofile;

