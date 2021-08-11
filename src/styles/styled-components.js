import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #99cc99;
    color: #fff;
    height: 3rem;
    padding: 0 1rem;
    box-shadow: 1px 1px 3px 1px #808080;
    /* position: fixed; */
    h1 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    nav {
        display: flex;
        align-items: center;
    }
    
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        align-items: center;
        li {
            margin: 0 1rem 0 0;
            a {
                font-weight: 700;
            }
        }
    }
    
`

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2rem;
    p {
      margin: 0;
    }
    small {
      text-align:center;
    }
`
export const StyledAboutInfo = styled.div`
    .info-container {
      display: flex;
      margin-top: 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .profile-img {
      width: 50%
    }
    img {
      display: block;
      margin: auto;
      border-radius: 50%; 
      width: 300px;
      height: 300px;
    }
    .info-content {
      width: 50%;
    }
    p {
      margin: auto;
      padding: 20px;
    }
`
export const StyledLayout = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    min-height: 100vh;
    & > div {
        flex-grow: 1;
    }
`

export const StyledNavDrawer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #99cc99;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
      width: 100%;
    }
  a, div {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 3rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.80s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #663399;
    }
  }
`

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  animation: fadeIn 1800ms linear forwards;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: 576px) {
      background: ${({ open }) => open ? '#fff' : '#333'};
    }
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
export const StyledProjectInfo = styled.div`
  section {
    display: flex; 
    align-items:center; 
    justify-content: space-evenly;
  }
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 20px; 
    margin-bottom: 20px;
  }
  img {
    height: 175px;
    width: 350px;
    border: 2px solid #333;
  }
  a {
  text-decoration: none; 
  font-size: 24px;
  color: #333;
}
  a:hover {
    color: #b2d8b2;
  }
`