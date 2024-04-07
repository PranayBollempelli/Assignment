import { Component } from "react";
import { GiCeilingLight } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";

import './index.css'

class Why extends Component{
    render(){
        return(
            <div className="why-container">
                <h2 className="why-heading">Why Choose Us?</h2>
                <hr className="line" />
                <div className="card-conatiner">
                    <div className="card">
                    <GiCeilingLight className="icon"/>
                    <h4>Expertise</h4>
                    <p>Decades of industry experience at your service.</p>
                    </div>
                    <div className="card">
                    <IoMdPeople className="icon"/>
                    <h4>Personalized Support</h4>
                    <p>Tailored guidance to fuel your success journey.</p>
                    </div>
                    <div className="card">
                    <MdCardTravel className="icon"/>
                    <h4>Innovation </h4>
                    <p>Pioneering approaches for cutting-edge.</p>
                    </div>
                </div>
                <div className="exam-cards-conatainer">
                    <div className="exam-card">
                        <p className="exam-heading">Levels</p>
                        <p className="exam-time">10 levels</p>
                    </div>
                    <div className="exam-card">
                        <p className="exam-heading">Duration</p>
                        <p className="exam-time">24 hours</p>
                    </div>
                    <div className="exam-card">
                        <p className="exam-heading">Exams</p>
                        <p className="exam-time">Weekly</p>
                    </div>
                    <div className="exam-card">
                        <p className="exam-heading">Examptions</p>
                        <p className="exam-time">10 levels</p>
                    </div>
                </div>
                <div className="what-container">
                    <h2 className="why-heading">What will you learn In ACCA?</h2>
                    <hr className="line" />
                    <div className="what-cards-container">
                        <div className="what-cards">
                            <p className="what-heading">Knowledge Level</p>
                            <ul>
                                <li className="points">Foundational understanding of concepts.</li>
                                <li className="points">Continuous learning and adaptation.</li>
                                <li className="points">Depth in specialized subject areas.</li>
                            </ul>
                            <p className="what-heading">4 Papers</p>
                        </div>
                        <div className="what-cards">
                            <p className="what-heading">Knowledge Level</p>
                            <ul>
                                <li className="points">Foundational understanding of concepts.</li>
                                <li className="points">Continuous learning and adaptation.</li>
                                <li className="points">Depth in specialized subject areas.</li>
                            </ul>
                            <p className="what-heading">4 Papers</p>
                        </div>
                        <div className="what-cards">
                            <p className="what-heading">Knowledge Level</p>
                            <ul>
                                <li className="points">Foundational understanding of concepts.</li>
                                <li className="points">Continuous learning and adaptation.</li>
                                <li className="points">Depth in specialized subject areas.</li>
                            </ul>
                            <p className="what-heading">4 Papers</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Why