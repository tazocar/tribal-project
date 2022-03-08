import { Routes, Route, Navigate } from 'react-router-dom';
import Employees from './pages/Employees/Employees';
import Businesses from './pages/Businesses/Businesses';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/business" />} />
      <Route path="/business" element={<Businesses />} />
      <Route path="/business/:id" element={<Employees />} />
      <Route path="*" element={<Businesses />} />
    </Routes>
  );
}

export default RoutesComponent;
