import { Link } from 'react-router-dom';

function Navbar({ role }) {
  return (
    <nav className="flex gap-6 bg-white px-6 py-4 shadow-lg mb-4 sticky top-0 z-50">
      <Link className="hover:text-blue-600 font-semibold" to="/dashboard">Dashboard</Link>
      <Link className="hover:text-blue-600 font-semibold" to="/expenses">Expenses</Link>
      {(role === 'manager' || role === 'admin') && (
        <Link className="hover:text-blue-600 font-semibold" to="/approvals">Approvals</Link>
      )}
      {role === 'admin' && (
        <Link className="hover:text-blue-600 font-semibold" to="/reports">Reports</Link>
      )}
    </nav>
  );
}

export default Navbar;