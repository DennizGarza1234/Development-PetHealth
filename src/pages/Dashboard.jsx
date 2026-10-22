
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="dashboard-page">
      <h2>Dashboard</h2>
      <p>View your pets and their latest health information.</p>

      <div className="dashboard-links">
        <Link to="/pets" className="dashboard-card">
          <h3>My Pets</h3>
          <p>View and search your pets.</p>
        </Link>

        <Link to="/add-pet" className="dashboard-card">
          <h3>Add a Pet</h3>
          <p>Register a new pet in your account.</p>
        </Link>
      </div>
    </section>
  );
}

export default Dashboard;
