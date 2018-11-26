import Link from "next/link";
import Router from 'next/router';
import styled from "styled-components";
import NProgress from 'nprogress';

import Nav from "./Nav";

// configure progress bar to visualize route changes
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const StyledHeader = styled.div`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 10px solid ${props => props.theme.black};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Logo = styled.h1`
  transform: skew(-10deg);
  position: relative;
  z-index: 2;
  a {
    background: ${props => props.theme.red};
    font-size: 4rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>D-qlo</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </StyledHeader>
  );
};

export default Header;
