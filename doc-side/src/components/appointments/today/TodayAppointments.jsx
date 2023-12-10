import "./todayAppointments.css";
import { useState, useEffect } from "react";
import moment from "moment";
import patient from "../../../assets/patient-hemanth.png";

const TodayAppointments = () => {
  const [currentTime, setCurrentTime] = useState(moment().format());
  const [isClicked,setIsClicked]=useState([])

  const updateTime = () => {
    setCurrentTime(moment().format());
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  

  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      patient_image: patient,
      date: "2023-01-01",
      time: "10:00 AM",
      appointmentType: "Checkup",
      problem: "General Health Check",
      color:'blue',
    },
    {
      id: 2,
      patientName: "Jane Smith",
      patient_image: patient,
      date: "2023-01-02",
      time: "02:30 PM",
      appointmentType: "Dental",
      problem: "Toothache",
      color:'green',
    },
    {
      id: 3,
      patientName: "Alice Johnson",
      patient_image: patient,
      date: "2023-01-03",
      time: "09:15 AM",
      appointmentType: "Eye Exam",
      problem: "Blurred Vision",
      color:'red',
    },
    {
      id: 4,
      patientName: "Bob Wilson",
      patient_image: patient,
      date: "2023-01-04",
      time: "11:45 AM",
      appointmentType: "Physical Therapy",
      problem: "Back Pain",
      color:'pink',
    },
    {
      id: 5,
      patientName: "Eva Brown",
      patient_image: patient,
      date: "2023-01-05",
      time: "03:00 PM",
      appointmentType: "Orthopedic",
      problem: "Joint Pain",
      color:'#00fb11'
    },
  ];

  return (
    <div className="today-appointments">
      <h3>Today{"'"}s Appointments</h3>
      {
        (appointments)?
      
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            <div  className="appointment-items">
            <div className="appointment-item-left">
              <div>
                <img
                  src={appointment.patient_image}
                  alt=""
                  width={55}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="appointment-item-details">
                <h4>{appointment.patientName}</h4>
                <p style={{color:(appointment.color),fontWeight:'500'}}>{appointment.appointmentType}</p>
              </div>
            </div>

            <h5>{appointment.time}</h5>
          </div>
          {
            // isClicked &&
            // <div>hello</div>
          }
          
          </div>
          
        ))}
      </div>
      :<p>No Appointments Today!</p>
        }
    </div>
  );
};

export default TodayAppointments;
