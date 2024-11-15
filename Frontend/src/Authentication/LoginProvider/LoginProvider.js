import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginProvider = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:4000/authProvider/login', {
        email,
        password,
      });
      
  
      if (response.status === 200) {
        toast.success("Login successful!");
        navigate("/"); // Redirect to the home page or dashboard
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };
  
  return (
    <>
      {/* Section: Design Block */}
      <section>
        {/* Jumbotron */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "hsl(0, 0%, 96%)",
            minHeight: "100vh",
            margin: 0,
            padding: "50px 0",
          }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  LOG
                  <span className="text-primary">IN</span>
                </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label">Email address</label>
                      </div>

                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label">Password</label>
                      </div>

                      {/* Submit button */}
                      <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
                        Sign in
                      </button>
                    </form>

                    <h6>
                      Don't have an account yet?
                      <Link to="/Join" style={{ textDecoration: "none" }}>
                        {" "}
                        Sign up here
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* Toast Container for notifications */}
                <ToastContainer
                position='bottom-right' 
                autoClose={8000}/>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
};

export default LoginProvider;