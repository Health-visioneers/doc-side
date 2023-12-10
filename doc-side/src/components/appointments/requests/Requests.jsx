import "./requests.css";
import patient from "../../../assets/patient-hemanth.png";
import accept from "../../../assets/tick-mark.png";
import decline from "../../../assets/decline.png";
import { useState, useEffect} from "react";

import { useDispatch, useSelector} from "react-redux";
// import { connect } from "react-redux";
import { acceptAppointment, rejectAppointment,toggleHide,appointmentList } from "../../../redux/actions/appointmentActions";




// const getRejectedAppointments = (state) => state?.appointmentReducer?.rejectedAppointments || [];
// const getHideStatus = (state) => state.appointmentReducer.hide;

const Requests = () => {
  const dispatch = useDispatch()
  const acceptedAppointments = useSelector(state=>state.appointment.acceptedAppointments);
  const rejectedAppointments = useSelector(state=>state.appointment.rejectedAppointments);
  const hide = useSelector(state => state.appointment.hide);

  const handleAccept = (appointmentId) => {
    dispatch(acceptAppointment(appointmentId));
    
  };

  const handleReject = (appointmentId) => {
    dispatch(rejectAppointment(appointmentId));
  };

  const handleHide=()=>{
    dispatch(toggleHide(!hide))
  }


  const isAccepted = (appointmentId) => acceptedAppointments.includes(appointmentId);
  const isRejected = (appointmentId) => rejectedAppointments.includes(appointmentId);
  

  
 


  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      patient_image: patient,
      date: "2023-01-01",
      time: "10:00 AM",
      appointmentType: "Checkup",
      problem: "General Health Check",
      color: "blue",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      patient_image: patient,
      date: "2023-01-02",
      time: "02:30 PM",
      appointmentType: "Dental",
      problem: "Toothache",
      color: "green",
    },
    {
      id: 3,
      patientName: "Alice Johnson",
      patient_image: patient,
      date: "2023-01-03",
      time: "09:15 AM",
      appointmentType: "Eye Exam",
      problem: "Blurred Vision",
      color: "red",
    },
    {
      id: 4,
      patientName: "Bob Wilson",
      patient_image: patient,
      date: "2023-01-04",
      time: "11:45 AM",
      appointmentType: "Physical Therapy",
      problem: "Back Pain",
      color: "pink",
    },
    {
      id: 5,
      patientName: "Eva Brown",
      patient_image: patient,
      date: "2023-01-05",
      time: "03:00 PM",
      appointmentType: "Orthopedic",
      problem: "Joint Pain",
      color: "#00fb11",
    },
    {
      id: 6,
      patientName: "John Doe",
      patient_image: patient,
      date: "2023-01-01",
      time: "10:00 AM",
      appointmentType: "Checkup",
      problem: "General Health Check",
      color: "blue",
    },
    {
      id: 7,
      patientName: "Jane Smith",
      patient_image: patient,
      date: "2023-01-02",
      time: "02:30 PM",
      appointmentType: "Dental",
      problem: "Toothache",
      color: "green",
    },
    {
      id: 8,
      patientName: "Alice Johnson",
      patient_image: patient,
      date: "2023-01-03",
      time: "09:15 AM",
      appointmentType: "Eye Exam",
      problem: "Blurred Vision",
      color: "red",
    },
    {
      id: 9,
      patientName: "Bob Wilson",
      patient_image: patient,
      date: "2023-01-04",
      time: "11:45 AM",
      appointmentType: "Physical Therapy",
      problem: "Back Pain",
      color: "pink",
    },
    {
      id: 10,
      patientName: "Eva Brown",
      patient_image: patient,
      date: "2023-01-05",
      time: "03:00 PM",
      appointmentType: "Orthopedic",
      problem: "Joint Pain",
      color: "#00fb11",
    },
    {
      id: 11,
      patientName: "Eva Brown",
      patient_image: patient,
      date: "2023-01-05",
      time: "03:00 PM",
      appointmentType: "Orthopedic",
      problem: "Joint Pain",
      color: "#00fb11",
    },
    {
      id: 11,
      patientName: "Eva Brown",
      patient_image: patient,
      date: "2023-01-05",
      time: "03:00 PM",
      appointmentType: "Orthopedic",
      problem: "Joint Pain",
      color: "#00fb11",
    },
  ];
  useEffect(()=>{
    dispatch(appointmentList(appointments))
  },[dispatch])
  
  return (
    <div className="request-appointments" style={{overflow:'auto',height:hide?'407px':'fit-content'}}>
      <div className="request-header">
        <h3>Appointment Request{"'"}s</h3>
        <p style={{ color: "#0D46C1",cursor:'pointer' }} onClick={()=>handleHide()}>See All</p>
      </div>

      <div className={`appointments-request-section `} >
        {appointments.map((appointment) => (
          
          <div key={appointment.id} className="appointment-items" /*onClick={()=>handleClick(appointment.id)}*/>
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
                <p style={{ color: appointment.color, fontWeight: "500" }}>
                  {appointment.appointmentType}
                </p>
              </div>
            </div>

            <h5>{appointment.time}</h5>
            <div className="appointment-status">
            {!isAccepted(appointment.id) && !isRejected(appointment.id) && (
                <>
                  <img
                    src={accept}
                    alt=""
                    width={24}
                    onClick={() => handleAccept(appointment.id)}
                  />
                  <img
                    src={decline}
                    alt=""
                    width={24}
                    onClick={() => handleReject(appointment.id)}
                  />
                </>
              )}
              {isAccepted(appointment.id) && <p style={{ color: '#00fb11', fontStyle: 'italic' }}>Accepted</p>}
              {isRejected(appointment.id) && <p style={{ color: 'red', fontStyle: 'italic' }}>Rejected</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Requests
