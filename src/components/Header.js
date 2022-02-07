import React from 'react'
import styled from 'styled-components';

function Header() {
     return (
          <div>
               <Nav>
                    <Logo src="/images/logo.svg" />
                    <NavMenu>
                         <a>
                              <img src="/images/home-icon.svg" />
                              <span>HOME</span>
                         </a>
                         <a>
                              <img src="/images/search-icon.svg" />
                              <span>SEARCH</span>
                         </a>
                         <a>
                              <img src="/images/watchlist-icon.svg" />
                              <span>WATCHLIST</span>
                         </a>
                         <a>
                              <img src="/images/original-icon.svg" />
                              <span>ORIGINALS</span>
                         </a>
                         <a>
                              <img src="/images/movie-icon.svg" />
                              <span>MOVIES</span>
                         </a>
                         <a>
                              <img src="/images/series-icon.svg" />
                              <span>SERIES</span>
                         </a>
                    </NavMenu>
                    <UserImg src="https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/247848131_1775320749338209_4161033637346201846_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tFf5-gDP1wkAX8qpk96&_nc_ht=scontent.fpat3-3.fna&oh=00_AT8uN_XFrcZ8fluvj14huPJCw0xKMKXTHghAPA2dXhQxkQ&oe=620397BB" />
               </Nav>
          </div>
     )
}

export default Header;

const Nav = styled.nav`
      height: 65px;
      background: #090b13;
      display: flex;
      align-items: center;
      padding: 0 36px;
      overflow-x: hidden;
`

const Logo = styled.img`
      width: 80px;
`
const NavMenu = styled.div`
     display: flex;
     flex: 1;
     margin-left: 25px;
     align-items: center;
     a {
          display: flex;
          align-items : center;
          padding: 0 12px;
          cursor: pointer;
     img {
          height: 20px;
     }
     span{
          font-size: 13px;
          letter-spacing: 1.42p;
          position:  relative;

          &:after {
               content: "";
               height: 2px;
               background: white;
               position: absolute;
               left: 0;
               right: 0; 
               bottom: -6px;
               opacity: 0;
               transform-origin: left center;
               transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
               transform: scaleX(0);
          }
     }

     &:hover {
          span:after {
               transform: scaleX(1);
               opacity: 1;
          }
     }
}
`

const UserImg = styled.img`
     width:40px;
     height:40px;
     border-radius: 50%;
     cursor: pointer;

`
