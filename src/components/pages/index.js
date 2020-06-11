import React from "react";
import styled from "styled-components";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <MainContainer className="home-main-container">
        <Navbar />
        <div className="container">
          <h1 className="display-5 text-uppercase py-5 text-center">
            Welcome to Judith Sand Conference
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
            earum, optio ducimus adipisci commodi eveniet excepturi laboriosam
            nemo fugiat aspernatur facere ullam, aperiam quam voluptates. Ipsa
            autem vel officiis illo, quia et harum? Commodi iure debitis porro
            odio modi cumque optio soluta error impedit et doloribus sint
            doloremque dicta dignissimos quos enim quae adipisci, dolorum,
            consequuntur, ex hic ipsam.
          </p>
          <div className="form-box">
            <h3 className="display-6 text-uppercase text-center py-3">
              Register and reserve your seat
            </h3>
            <form>
              <div className="form-row mr-auto">
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone number Name"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <button className="btn btn-info text-uppercase">
                reserve your seat
              </button>
            </form>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;

// Styled components styles
const MainContainer = styled.div`
  h1 {
    color: var(--light-orange);
  }
  p {
    color: var(--main-color);
  }

  h3 {
    color: var(--light-orange);
  }

  .form-box {
    padding: 6rem 0;
  }

  form {
    width: 50rem;
    margin: 0 auto;
  }

  button {
    width: 100%;
    background: transparent;
    border-color: var(--light-orange);
    &:hover{
      background: var(--deep-pink);
      border-color: var(--light-pink)
    }
    &:focus {
      background: var(--light-orange);
      border-color: var(--light-orange)
    }
  }

  input {
    background: var(--dark-grey)
    opacity: .6;
  }
`;
