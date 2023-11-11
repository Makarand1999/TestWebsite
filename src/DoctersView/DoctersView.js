import React from 'react';
import './DoctersView.css';
import btn from '../Assets/Group 59.png';
import view from '../Assets/carbon_view.png';
import arrow from '../Assets/arrow.png';
const DoctersView = () => {
    
    return (
        <div className='mainContainer'>
            <div style={{ display: 'flex', }}>
                <span><img src={arrow} /></span>
                <span style={{fontWeight:'bold',fontSize:'13px',marginLeft:'48px'}}>UPCOMING APPOINMENTS</span>
            </div>
            <div className='header'>
                <div className='textDiv'>new booking in 2 minutes</div>
                <div className='BookNowBtn'>Book Now</div>
            </div>
            <div className='Subdiv2' style={{marginBottom:'25px'}}>
                <div className='subdiv2_btnMainDiv'>
                    <div className='Subdiv2_Btn1' style={{color:'white'}}>Clinic </div>
                    <div className='Subdiv2_Btn2'>Test </div>
                    <div className='Subdiv2_Btn3'>Surgery </div>
                    <div className='Subdiv2_Btn4'>Medicine </div>
                </div>
                <div className='subdiv2_doctersInfo'>
                    <div className='docterImage'></div>
                    <div className='subdiv2_doctersContent'>
                        <span className='subdiv2_doctersContentLine1'>17 september 2021, 9.30 PM</span>
                        <span className='subdiv2_doctersContentLine2'>appointment with doctor arun</span>
                        <span className='subdiv2_doctersContentLine2'>doctor world clinic</span>
                    </div>
                </div>
                <div className='subdiv2_btnBottomDiv'>
                    <div className='subdiv2_btnBottomDiv1'><span>RESCHEDULE</span></div>
                    <div className='subdiv2_btnBottomDiv1'><span>CANCEL</span></div>
                    <div className='subdiv2_btnBottomDiv3'>
                        <span><img src={view} /></span>
                        <span style={{ color: 'black' }}>View</span>
                    </div>

                </div>
            </div>

            <div className='Subdiv2'>
                <div className='subdiv2_btnMainDiv'>
                    <div className='Subdiv2_Btn1' style={{color:'white'}}>Clinic </div>
                    <div className='Subdiv2_Btn1' style={{color:'white'}}>Test </div>
                    <div className='Subdiv2_Btn3'>Surgery </div>
                    <div className='Subdiv2_Btn4'>Medicine </div>
                </div>
                <div className='subdiv2_doctersInfo'>
                    <div className='docterImage'></div>
                    <div className='subdiv2_doctersContent'>
                        <span className='subdiv2_doctersContentLine1'>17 september 2021, 9.30 PM</span>
                        <span className='subdiv2_doctersContentLine2'>appointment with doctor arun</span>
                        <span className='subdiv2_doctersContentLine2'>doctor world clinic</span>
                    </div>
                </div>
                <div className='subdiv2_btnBottomDiv'>
                    <div className='subdiv2_btnBottomDiv1'><span>RESCHEDULE</span></div>
                    <div className='subdiv2_btnBottomDiv1'><span>CANCEL</span></div>
                    <div className='subdiv2_btnBottomDiv3'>
                        <span><img src={view} /></span>
                        <span style={{ color: 'black' }}>View</span>
                    </div>

                </div>
            </div>

            <div className='backBtn' style={{marginTop:'15px'}}>
                <span className=''>Back</span>
            </div>
        </div>
    )
}

export default DoctersView
