import { Routes, Route } from 'react-router-dom';
import TodayAppointments from '../components/appointments/today/TodayAppointments';


const Router = () => {
  return (
    <Routes>
        <Route path="/" exact component={TodayAppointments} /> 
    </Routes>
  );
};
export default Router;
