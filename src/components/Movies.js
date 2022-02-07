import React from 'react'
import styled from 'styled-components'


function Movies() {
     return (
          <Container>
               <h4>Recommended for You</h4>
                    <Content>
                         <Wrap>
                              <img src="https://doms2cents.com/wp-content/uploads/2021/08/The-Simpsons-Season-33.jpg" />
                         </Wrap>
                         <Wrap>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dtdtA7pyY-VLzj7GteZn_BH3vvR7hd_2uA&usqp=CAU" />
                         </Wrap>
                         <Wrap>
                              <img src="https://doms2cents.com/wp-content/uploads/2021/08/The-Simpsons-Season-33.jpg" />
                         </Wrap>
                         <Wrap>
                              <img src="https://www2.pictures.zimbio.com/mp/WQWmxUKowttx.jpg" />
                         </Wrap>
                    </Content>
          </Container>
     )
}

export default Movies

const Container = styled.div``

const Content = styled.div`
     display: grid;
     grid-gap: 25px;
     grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
     border-radius: 10px;
     overflow: hidden;
     border: 3px solid rgba(249, 249, 249, 0.1);
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;

     img{
          width: 100%;
          height: 100%;
          object-fit: cover;
     }

     &:hover {
          transform: scale(1.05);
          border-color: rgba(249, 249, 249, 0.8);
     }

`