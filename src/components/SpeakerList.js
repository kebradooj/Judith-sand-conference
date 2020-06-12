import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

///Import Avatars
import avatar1 from "../avatars/avatar1.png";
import avatar2 from "../avatars/avatar2.png";
import avatar3 from "../avatars/avatar3.png";
import avatar4 from "../avatars/avatar4.png";

const SpeakerList = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="row mx-auto justify-content-center">
          {/* Speaker 1 */}
          <div className="card col-md-6 p-2">
            <img src={avatar1} alt="avatar1" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Peter Hamster</h3>
              <h5>
                Subject: <b>Node JS</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                voluptatum ad! Corrupti fuga minus ipsa eius, sint at culpa eum
                asperiores adipisci nulla atque in ducimus eligendi velit,
                officiis dignissimos.
              </p>
              <Link to="/">
                <Button className="btn btn-primary text-uppercase">
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          {/* Speaker 2 */}
          <div className="card col-md-6 p-2">
            <img src={avatar2} alt="avatar2" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Adam Hirogawa</h3>
              <h5>
                Subject: <b>React native</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                voluptatum ad! Corrupti fuga minus ipsa eius, sint at culpa eum
                asperiores adipisci nulla atque in ducimus eligendi velit,
                officiis dignissimos.
              </p>
              <Link to="/">
                <Button className="btn btn-primary text-uppercase">
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          {/* Speaker 3 */}
          <div className="card col-md-6 p-2">
            <img src={avatar3} alt="avatar3" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">
                Judith Smilewood founder
              </h3>
              <h5>
                Subject: <b>Unity game dev.</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                voluptatum ad! Corrupti fuga minus ipsa eius, sint at culpa eum
                asperiores adipisci nulla atque in ducimus eligendi velit,
                officiis dignissimos.
              </p>
              <Link to="/">
                <Button className="btn btn-primary text-uppercase">
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          {/* Speaker 4 */}
          <div className="card col-md-6 p-2">
            <img src={avatar4} alt="avatar4" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Joseph Unicorn</h3>
              <h5>
                Subject: <b>Unreal Engine 4</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                voluptatum ad! Corrupti fuga minus ipsa eius, sint at culpa eum
                asperiores adipisci nulla atque in ducimus eligendi velit,
                officiis dignissimos.
              </p>
              <Link to="/">
                <Button className="btn btn-primary text-uppercase">
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default SpeakerList;

//styled component

const MainContainer = styled.div`
  background: url(./bg/speakers.jpg)
`;