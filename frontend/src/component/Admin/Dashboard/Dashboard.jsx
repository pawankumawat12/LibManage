function Dashboard() {
  const stats = [
    { title: "Total Seats", count: 120, icon: "fa fa-chair text-primary" },
    {
      title: "Seats Occupied",
      count: 85,
      icon: "fa fa-check-circle text-warning",
    },
    { title: "Available Seats", count: 35, icon: "fa fa-chair text-success" },
    { title: "Total Students", count: 320, icon: "fa fa-users text-info" },
    { title: "Total Books", count: 1245, icon: "fa fa-book text-secondary" },
    { title: "Issued Books", count: 190, icon: "fa fa-book-open text-danger" },
    {
      title: "Total Income",
      count: "₹95,000",
      icon: "fa fa-indian-rupee-sign text-success",
    },
    {
      title: "New Registrations",
      count: 15,
      icon: "fa fa-user-plus text-warning",
    },
    { title: "Today's Visitors", count: 70, icon: "fa fa-clock text-primary" },
    {
      title: "Overdue Returns",
      count: 12,
      icon: "fa fa-exclamation-circle text-danger",
    },
  ];

  return (
    <div>
      <h2 className="mb-4 fw-bold">Admin Dashboard</h2>

      <div className="row g-4">
        {stats.map((item, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card shadow h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">{item.title}</p>
                  <h4 className="fw-bold">{item.count}</h4>
                </div>
                <i className={`${item.icon} fs-2`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="card shadow mt-5">
        <div className="card-body">
          <h5 className="card-title fw-semibold mb-4">Recent Activities</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fa fa-book text-success me-2"></i>
                Book <strong>“JS Basics”</strong> issued to Ravi
              </span>
              <span className="text-muted small">5 mins ago</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fa fa-book-open text-primary me-2"></i>
                Book <strong>“React Advanced”</strong> returned by Priya
              </span>
              <span className="text-muted small">20 mins ago</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fa fa-user-plus text-warning me-2"></i>
                Student <strong>Ankit Sharma</strong> registered
              </span>
              <span className="text-muted small">1 hour ago</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="fa fa-exclamation-circle text-danger me-2"></i>
                Book <strong>“C++ Mastery”</strong> overdue
              </span>
              <span className="text-danger small">3 days late</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
