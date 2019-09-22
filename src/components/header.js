import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import NavBar from './nav'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-right: 4rem;
  // position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 10000;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <NavBar />
  </StyledHeader>
  // <header
  //   style={{
  //     // background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       // maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           // color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  //   <NavBar />
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
