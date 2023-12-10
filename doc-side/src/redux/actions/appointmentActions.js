export const acceptAppointment = (appointmentId) => ({
  type: "ACCEPT_APPOINTMENT",
  payload: appointmentId,
  
} );

export const rejectAppointment = (appointmentId) => ({
  type: "REJECT_APPOINTMENT",
  payload: appointmentId,
});

export const toggleHide = () => ({
  type: "TOGGLE_HIDE",
});

export const appointmentList =(appointments)=>({
  type: "Appointments_Length",
  payload:appointments
})


