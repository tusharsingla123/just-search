import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const  navigate = useNavigate();

    const [getInputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("//localhost:1000/login", {
            t1: getInputs.email,
            t2: getInputs.pwd,


        }).then((res) => {
            try 
            {
                var email = res.data[0]["email_id"];
                var role = res.data[0]["role"];

                if (email.trim() !== "") 
                {
                    localStorage.setItem("email",email);
                    navigate("/");
                }
            }
            catch (err) {
                alert(res.data["Message"])
            }
        });

    };
    return (
        <>
            <section id="top">
                <div className="container">
                    <div className="row">
                        <h2 style={{ 'text-align': 'center', 'margin-bottom': '30px' }}>Login</h2>
                        <form className="form-horizontal" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={getInputs.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={getInputs.pwd} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}


//root.render(login);
export default Login;