import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container-fluid ">
        <div className="row pt-5">
          {/* Column 4 */}
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/" >
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/" >
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/" >
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/">
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
              <Link to="/" >
              <li className="footer-li">Lorem Ipsum</li>
              </Link>
            </ul>
          </div>
          <p className="pt-3 pb-2 pl-5 copy-right">
            &copy;&nbsp;Kebradooj&nbsp;
            {`${new Date().getFullYear()}`}
            &nbsp; All Right Reserved
          </p>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

//Styled component styles 
const FooterContainer = styled.footer`
  background: var(--light-green);
  position: relative;
  bottom: 0 !important;
  width: 100%;
  ul li {
    list-style: none;
  }

  a {
    color: var(--main-color);
    text-decoration: none;
    &:hover {
      color: var(--main-color);
      background: var(--light-pink)!important
    }
  }
  
  .copy-right {
    color: var(--light-pink)
  }

  .footer-li {
    &:hover {
      background: var(--light-pink)!important
    }
  }
`;