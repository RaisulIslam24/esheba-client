import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMinus, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import './ChatWithUs.css';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ChatWithUs = () => {
    const [isChat, setIsChat] = useState(false);
    return (
        <div className="chat">
            {isChat &&
                <div className="chat-description">
                    <button onClick={() => setIsChat(false)} className="minus"><FontAwesomeIcon icon={faMinus} /></button>
                    <h2>E-Sheba</h2>
                    <h5>Let us know if you need any help.</h5>
                    <h6 style={{ color: 'cyan' }}><FontAwesomeIcon icon={faPhone} /> 01234-56789</h6>
                    <span><FontAwesomeIcon icon={faClock} /> Available: 09:00am to 7:00pm</span><br />
                    <a className="text-decoration-none" href="http://www.facebook.com" target="_blank" rel="noreferrer">
                        <div className="mt-3 d-flex align-items-center" style={{color: 'cyan'}}>
                            <FontAwesomeIcon icon={faFacebook} size="3x" />
                            <h5 className="ms-2">Join with us</h5>
                        </div>
                    </a>
                </div>
            }
            <button onClick={() => setIsChat(!isChat)} className="chat-btn"><FontAwesomeIcon icon={faPhoneVolume} /></button>
        </div>
    );
};

export default ChatWithUs;