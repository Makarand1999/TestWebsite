import React from 'react'
import './View.css'
import arrow from '../Assets/arrow.png';
import view from '../Assets/carbon_view.png';
const View = () => {
  return (
    <section className='body'>

        <div className='TopSectionDiv'>

            <div className='TopSectionArrowDiv'>
                <img src={arrow}></img>
            </div>
            <div className='TopCenterDiv'>
            <div className='TopSectionTextDiv'>UPCOMING APPOINTMENTS</div>
            </div>
        </div>
        

        <div className='SecondSectionDiv'>
            <div className='SecondSectionTextDiv'>New Booking In Two Minutes</div>
            <div className='SecondSectionButton'>Book Now</div>
        </div>

        <div className='ThirdSectionCardDiv'>

            <div className='ThirdSectionCardButtonDiv'>

                <div className='First_Button'>Clinic</div>
                <div className='Second_Button'>Test</div>
                <div className='Third_Button'>Surgery</div>
                <div className='Fourth_Button'>Medicine</div>

            </div>

            <div className='ThirdSectionCard_Middle_Section'>
                <div className='Logo_Images_Div'>
                    <div className='Doctore_Logo'></div>
                </div>
                
                <div className='MiddleCardTextDiv'>
                    <p className='First_p'>17 september 2021, 9.30 PM</p>
                    <p className='Second_P'>appointment with doctor arun</p>
                    <p className='Third_P'>doctor world clinic</p>
                </div> 
            </div>

            <div className='Last_Section_Card_Btn'>
                    <div className='Card_Btn_1'>Reschedule</div>
                    <div className='Card_Btn_2'>Cansel</div>
                    <div className='Card_Btn_3'><img src={view} style={{margin:"0 5px 0 0"}}/>View</div>
                </div>

        </div>

        <div className='ThirdSectionCardDiv'>

            <div className='ThirdSectionCardButtonDiv'>

                <div className='First_Button'>Clinic</div>
                <div className='Second_Button'>Test</div>
                <div className='Third_Button'>Surgery</div>
                <div className='Fourth_Button'>Medicine</div>

            </div>

            <div className='ThirdSectionCard_Middle_Section'>
                <div className='Logo_Images_Div'>
                    <div className='Doctore_Logo'></div>
                </div>
                
                <div className='MiddleCardTextDiv'>
                    <p className='First_p'>17 september 2021, 9.30 PM</p>
                    <p className='Second_P'>appointment with doctor arun</p>
                    <p className='Third_P'>doctor world clinic</p>
                </div> 
            </div>

            <div className='Last_Section_Card_Btn'>
                    <div className='Card_Btn_1'>Reschedule</div>
                    <div className='Card_Btn_2'>Cansel</div>
                    <div className='Card_Btn_3'><img style={{margin:"0 5px 0 0"}}src={view} />View</div>
                </div>

        </div>

        <div className='LastSectionDiv'>
            Back
        </div>
    </section>
  )
}

export default View
