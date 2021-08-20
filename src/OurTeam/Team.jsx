import React from 'react'
// import { Link } from 'react-router-dom'
import image from './pp.jpg'
import './Team.css'

function Team() {
    return (
            <>
            <h2 className="headline">our team</h2>
            <section>
                <div className="team">
                <img src={image} alt="teammate" />
                <div className="info">
                    <p className="name">Lorem, ipsum.</p>
                    <p className="quote">Lorem, ipsum.</p>
                    <div className="contact">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
                <div className="team">
                <img src={image} alt="teammate" />
                <div className="info">
                    <p className="name">Lorem, ipsum.</p>
                    <p className="quote">Lorem, ipsum.</p>
                    <div className="contact">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
                <div className="team">
                <img src={image} alt="teammate" />
                <div className="info">
                    <p className="name">Lorem, ipsum.</p>
                    <p className="quote">Lorem, ipsum.</p>
                    <div className="contact">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            </section>
            </>
    )
}

export default Team
