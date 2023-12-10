

const initialState = {
  acceptedAppointments: [],
  rejectedAppointments: [],
  hide: true,
  length:0,
};

const appointmentReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ACCEPT_APPOINTMENT":
      return {
        ...state,
        acceptedAppointments: [...state.acceptedAppointments, action.payload],
        
      };
    case "REJECT_APPOINTMENT":
      return {
        ...state,
        rejectedAppointments: [...state.rejectedAppointments, action.payload],
      };
      
    case "TOGGLE_HIDE":
      return {
        ...state,
        hide: !state.hide,
      };
    case "Appointments_Length":
      return {
        ...state,
        length:action.payload.length
      }
    default:
      return state;
  }
};

export default appointmentReducer;
