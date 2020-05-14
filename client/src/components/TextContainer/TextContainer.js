import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Chitter-Chatter <span role="img" aria-label="emoji">💬</span></h1>
            <h3>Developed using React, Express, Node and Socket.IO</h3>
            <h3>By Tawhid Shahrior</h3>
          
            
        </div>
        {
            users
                ? (
                    <div>
                        <h2>People in this room :</h2>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;