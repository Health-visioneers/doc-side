import './rightArea.css'
import doctor from '../../assets/doctor.png'
import phone from '../../assets/phone.png'
import inbox from '../../assets/inbox.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const RightArea = () => {

  const [range,setRange]=useState(0);
  const totalAppointments = useSelector(state => state.appointment.length)
  return (
    <div className='right-container'>
        <div className="profile">
            <img src={doctor} alt=""  width={100}/>
            <h3>Dr. Shravan</h3>
            <p>Sexologist</p>
        </div>
        <div className="appointment-limit">
            <h3>{range} People</h3>
            <p>Appointment Limit</p>
            <div className='appointment-limit-range'>
               <input type="range"  min="0" max="300" step="10" value={range} onChange={(e)=>setRange(e.target.value)}/>
               <p>{range}/300</p>
            </div>

        </div>
        <div className="appointment-types-grid">
          <div className='appointment-categories'>
            <h3>{totalAppointments}</h3>
            <p>Appointments</p>
          </div>
          <div className='appointment-categories'>
            <h3>{"XXXX"}</h3>
            <p>Total Patients</p>
          </div>
          <div className='appointment-categories'>
            <h3>{"XXXX"}</h3>
            <p>Consultations</p>
          </div>
          <div className='appointment-categories'>
            <h3>{"XXXX"}</h3>
            <p>Return Patients</p>
          </div>
        </div>
        <div className="notifications">
            <div className="notification-items">
                <h2>{"XX"}</h2>
                <p>Missed Call</p>
                <img src={phone} alt="" width={24} />
            </div>
            <div className="notification-items">
                <h2>{"X"}</h2>
                <p>New Messages</p>
                <img src={inbox} alt="" width={24}/>
            </div>
        </div>
    </div>
  )
}

export default RightArea