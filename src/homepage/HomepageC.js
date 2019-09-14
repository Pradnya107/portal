
import './homepage.style.scss';
import makeCarousel from 'react-reveal/makeCarousel';

import Slide from 'react-reveal/Slide';

import styled, { css } from 'styled-components';


const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 150px;
`;

const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);



render (
  
  
  <Carousel defaultWait={1000}  className='corousel-effect' >
    <Slide right>
        <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqTSqjXC1Ma3RoQouM_lIzErWUeZLCI0RsICGp_RisfNo4k9i"  />
                   
        </div>
   </Slide>
    <Slide right>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUeC0S5cY_DshihaSvNkK4VL1qzVTc6JW3zOkYYlVPU2aNXce"  />
                  
      </div>
    </Slide>
    <Slide right>
                <div>
                    <img src="https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100814/50600321-flat-blue-pen-and-paper-icon-on-circle-web-button-on-white.jpg"  />
                    
                </div>
                </Slide>
  </Carousel>
  )

  

export default HomepageC;


