import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  display: flex;
  justify-self: end;
  a, button {
    position: relative;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 900;
    /* background: none; */
    /* border: 0; */
    /* cursor: pointer; */
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      height: 100%;
      background: ${props => props.theme.lightgrey};
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transform: skew(-20deg);
    }
    &:after {
      position: absolute;
      left: 50%;
      content: '';
      width: 0;
      height: 4px;
      margin-top: 2rem;
      background: ${props => props.theme.red};
      transform: translateX(-50%);
      transition: width .4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    }
    &:hover, &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    font-size: 1.5rem;
    justify-content: center;
    border-top: 2px solid ${props => props.theme.lightgrey};
  }
`;

export default NavStyles;