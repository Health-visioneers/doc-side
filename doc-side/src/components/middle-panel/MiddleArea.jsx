import stethoscope from '../../assets/R.png'
import Requests from '../appointments/requests/Requests';
import TodayAppointments from '../appointments/today/TodayAppointments';

import "./middleArea.css";


const MiddleArea = () => {
  return (
    <div className="middle-container">
      <div className="intro">
        <div>
          <h2>Welcome {"name of Doctor"}</h2>
          <p>
            You have <strong>{"count"} patients</strong> remaining today! <br />
            Remember to check documentation before call
          </p>
        </div>
        <div>
            <img src={stethoscope} alt="" width={180} />
        </div>
      </div>
      <div className='appointment-containers'>
       <TodayAppointments/>
       <Requests/>

      </div>
     
    </div>
  );
};

export default MiddleArea;
