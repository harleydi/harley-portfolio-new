import React from 'react'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Footer from './Footer';

const Contact = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Email Address</Popover.Title>
          <Popover.Content>disneyharley26@gmail.com</Popover.Content>
        </Popover>
      );
      
    return(
        <div className='contact'>
            <h3 className='contactText'>Thanks for taking the time to view my portfolio.</h3>
            <h3 className='contactText2'>Please feel free to contact me!</h3>
            <div className='boxes'>
                <div className='icons'>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <a><i class="fas fa-inbox"></i></a>
                    </OverlayTrigger>
                    <a href='https://github.com/harleydi'><i class="fab fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/disney-harley-a430a4137/'><i class="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Contact