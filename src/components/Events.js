import React from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import eventsData from "../data/Events.json";
import eventsBG from "../bg/events.jpg"

import NodeJS from "./NodeJS";
import ReactNative from "./ReactNative";
import UnityGameDev from "./UnityGameDev";
import UnrealEngine4 from "./UnrealEngine4";

const Events = () => {
  return (
    <MainContainer>
      <div className="container py-5">
        <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Events</h2>
        <NavLink to="/events/node-js" className="badge badge-secondary p-2 m-2">
          Node JS
        </NavLink>
        <NavLink
          to="/events/react-native"
          className="badge badge-secondary p-2 m-2"
        >
          React Native
        </NavLink>
        <NavLink
          to="/events/unity-game-dev"
          className="badge badge-secondary p-2 m-2"
        >
          Unity game dev.
        </NavLink>

        <NavLink
          to="/events/unreal-engine-4"
          className="badge badge-secondary p-2 m-2"
        >
          Unreal Engine 4
        </NavLink>
        {/* Routes */}
        <Redirect to="/events/node-js"/>
        <Route
          path="/events/node-js"
          render={() => <NodeJS data={eventsData} />}
        />
        <Route
          path="/events/react-native"
          render={() => <ReactNative data={eventsData} />}
        />
        <Route
          path="/events/unity-game-dev"
          render={() => <UnityGameDev data={eventsData} />}
        />
        <Route
          path="/events/unreal-engine-4"
          render={() => <UnrealEngine4 data={eventsData} />}
        />
      </div>
    </MainContainer>
  );
};

export default Events;

//Styled component
const MainContainer  = styled.div`

  background: url(${eventsBG}) no-repeat center/cover;
  height: 80vh;
  width: 100%;
  h2 {
    color: var(--main-color);
  }

  p {
    color: var(--main-color)
  }

  .active {
    background: var(--light-pink);
    transition: .9s ease;
    &:focus {
      background: var(--deep-grey);
    }
  }

`;