import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function contact() {
    return (
        <div className="content">
            <p><a href="https://www.linkedin.com/in/gulraiznoorbari/" target= "_blank"><FaLinkedin/>LinkedIn</a></p>
            <p><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNtdVVPjNzNNdlCdwPrHGSmnxWlcrDhcqNTwfKzJTxQbnCzczRcQLcSwWJMszSftrNzDHg" target= "_blank"><FaEnvelope/>Gmail</a></p>
        </div>
    )
}

export default contact
