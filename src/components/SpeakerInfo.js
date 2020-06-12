import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Button } from "./Button";
import Avatar from "./Avatar";

//Avatars and BG
import avatar1 from "../avatars/avatar1.png";
import avatar2 from "../avatars/avatar2.png";
import avatar3 from "../avatars/avatar3.png";
import avatar4 from "../avatars/avatar4.png";
import speakerInfoBG from "../bg/speaker-info.jpg"

const Speakers = [
  {
    id: 0,
    speakerImg: avatar1,
    name: "Peter Hamster",
    occupation: "The best developer ever in Kyrgyzstan",
    description: "He is the best, and it is what you need to know about him",
  },
  {
    id: 1,
    speakerImg: avatar2,
    name: "Adam Hirogawa",
    occupation: "The Team Lead in the best company of the world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore dolor placeat, odio maxime sint!",
  },
  {
    id: 2,
    speakerImg: avatar3,
    name: "Judith Smilewood founder",
    occupation: "Billionaire, founder, and just a girl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore dolor placeat, odio maxime sint!",
  },
  {
    id: 3,
    speakerImg: avatar4,
    name: "Joseph Unicorn",
    occupation: "Someone just like me you know*%*%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore dolor placeat, odio maxime sint!",
  },
];

const SpeakerInfo = () => {
  let { id } = useParams();
  let speaker = Speakers[parseInt(id, 4)];
  return (
    <MainContainer>
      <div className="container mb-5">
        <div className="card">
          <Avatar speakerImage={speaker.speakerImg} />
          <h3>{speaker.name}</h3>
          <div className="card-body px-0">
            <h5 className="card-title">{speaker.occupation}</h5>
            <p className="card-text">{speaker.description}</p>
            <Link to="/speakers">
              <Button className="btn btn-primary text-uppercase">
                back to speakers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default SpeakerInfo;

//Styled component styles
const MainContainer = styled.div`
  background: url(${speakerInfoBG}) no-repeat center/cover;
  padding: 5rem 0 0;
  height: 80vh;

  .card {
    background: transparent;
    border: none;
    border-radius: 0;
  }

  h3 {
    color: var(--deep-grey);
    padding-top: 1rem;
  }

  h5 {
    color: var(--deep-pink)
  }

  p {
    color: var(--deep-orange)
  }

  @media (min-width: 1060px) {
    .btn {
      width: 40%;
    }
  }
`;
