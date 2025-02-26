import React, { useState } from 'react'
import axios from 'axios'

const UserProfile = () => {
    const [getInputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("//localhost:1000/profile", {
            t1: getInputs.email,
            t2: getInputs.fname,
            t3: getInputs.lname,
            t6: getInputs.orgname,
            t7: getInputs.address,
            t8: getInputs.corg,
            t9: getInputs.cperson,
            t10: getInputs.gmap,
        }).then((res) => {
            alert(res.data["Message"])
        });

    };
    
    return(
    <>
    <section id="top">
        <div className="container">
            <div className="row">
                <h2 style={{'text-align':'center','margin-bottom':'30px'}}>USER PROFILE</h2>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                <form className="form-horizontal"  onSubmit={handleSubmit} action="">
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"value={getInputs.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="name">FIRST NAME:</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="name" placeholder="Enter first name" name="first name"value={getInputs.fname} onChange={handleChange} />
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="name">LAST NAME:</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="name" placeholder="enter your last name" name="last name"value={getInputs.lname} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="gender">Gender</label>
                        <div className="col-sm-10">
                            <select name="gender" id="gender" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="category">Category:</label>
                        <div className="col-sm-10">
                            <select name="category" id="category" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value="Education">Education</option>
                                <option value="Cafe">Cafe</option>
                                <option value="Electronics">Electronics</option>
                                <option value=""></option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="org">ORGANISATION NAME: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="org" placeholder="enter organisation name:" name="organisation name"value={getInputs.orgname} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="ads">ADDRESS: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ads" placeholder="enter organisation address:" name="address"value={getInputs.address} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" for="state">STATE:</label>
                        <div className="col-sm-10">
                            <select name="state" id="state" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value="haryana">HARYANA</option>
                                <option value="punjab">PUNJAB</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="city">CITY:</label>
                        <div className="col-sm-10">
                            <select name="city" id="city" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="cn">CONTACT NUMBER: </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="cn" placeholder="enter your contact info" name="contact number"value={getInputs.corg} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="cp">CONTACT PERSON: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="cp" placeholder="enter contact person name:" name="person name"value={getInputs.cperson} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="map">GOOGLE MAP LINK: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="map" placeholder="paste google map link for address:" name="map"value={getInputs.gmap} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-6 col-sm-30">
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        </div>
    </section>
    </>
    );
}


// root.render(login);
export default UserProfile;