import React from 'react';

const register = () => {
    
    return(
    <>
        <section id="top">
        <div className="container">
            <div className="row">
                <h2 style={{'text-align':'center','margin-bottom':'30px'}}>REGISTER</h2>
                <form className="form-horizontal" action="">
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="pwd">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="pwd">Confirm Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwd" placeholder="Re-enter password" name="pwd"/>
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
                        <label className="control-label col-sm-2" for="question">Security Question: </label>
                        <div className="col-sm-10">
                            <select name="security question" id="question" className="form-control">
                                <option value="">--Please Select--</option>
                                <option value="what's your mother name?">what's your mother name?</option>
                                <option value="what's your pet's name?">what's your pet's name?</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="text">Answer:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="text" placeholder="" name="security answer"/>
                        </div>
                    </div>
                    
                    
                    <div className="form-group">
                        <div className="col-sm-offset-6 col-sm-30">
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


// root.render(login);
export default register;