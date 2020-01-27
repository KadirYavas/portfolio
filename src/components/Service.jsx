import React from 'react';
import DEV from '../img/dev.png'
import SOCIAL from '../img/social.png'
import RES from '../img/res.png'

const Service = () => {
    return (
        <div id="service">
            <div className="text-center p-4">
                <h3 className="text-uppercase serv">Service</h3>
                <p className="servp">Les services que je peux vous offrir.</p>
            </div>
            <div className="row text-center p-3">
                <div className="col-4">
                    <img src={DEV} alt="" className="p-3"/>
                    <h4 className="serv">Website Development</h4>
                    <p className="servp">The web development process involves taking the graphical elements defined in the design process and coding them into a custom Wordpress theme.</p>
                </div>
                <div className="col-4">
                    <img src={SOCIAL} alt="" className="p-3"/>
                    <h4 className="serv">Social Media Integration</h4>
                    <p className="servp">Social media integration enables your website to post updates to Facebook, displays a Twitter feed, and links to your social media accounts.</p>
                </div>
                <div className="col-4">
                    <img src={RES} alt="" className="p-3"/>
                    <h4 className="serv">Responsive Website Design</h4>
                    <p className="servp">Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g. iPhone, iPad).</p>
                </div>
            </div>
        </div>
    )
}

export default Service;