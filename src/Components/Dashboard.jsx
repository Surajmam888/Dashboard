import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaUser, FaSearch, FaUserMd, FaHeartbeat, FaBell, FaCommentDots, FaSignOutAlt, FaThLarge, FaUserInjured, FaUserNurse, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronDown } from "react-icons/fa";
import Doctor from '../assets/img/doctor.jpg';
import Person from '../assets/img/Person.png';

const doctorData = [
  { name: "General", count: 21 },
  { name: "Emergency", count: 5 },
  { name: "Neurologists", count: 15 },
  { name: "Physicians", count: 9 },
  { name: "Pathologists", count: 19 },
  { name: "Oncologists", count: 12 },
  { name: "Psychiatrists", count: 21 },
];

const matchingData = [
  { name: "Stacy Mitchell", specialty: "Ophthalmology", status: "Closed", image: Person },
  { name: "Amy Dunham", specialty: "Ophthalmology", status: "Open", image: Person },
  { name: "Demi Joan", specialty: "Ophthalmology", status: "Open", image: Person },
  { name: "Susan Myers", specialty: "Ophthalmology", status: "Closed", image: Person },
];

const events = [
  { date: "2022-09-08", title: "Weekly doctor's meet", time: "04:00 PM", icon: "W" },
  { date: "2022-09-08", title: "Weekly doctor's meet", time: "04:00 PM", icon: "M" },
];


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const highlightDates = ["2022-09-08", "2022-09-14", "2022-09-15", "2022-09-21"];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar bg-primary text-white p-3 ${isSidebarOpen ? "sidebar-open" : "d-none d-md-block"}`}>
        <ul className="nav flex-column">
          <li className="nav-item mb-4 text-center">
            <FaThLarge size={30} />
            <div>Dashboard</div>
          </li>
          <li className="nav-item mb-4 text-center">
            <FaUserInjured size={30} />
            <div>Patient Management</div>
          </li>
          <li className="nav-item mb-4 text-center">
            <FaUserNurse size={30} />
            <div>Doctor Management</div>
          </li>
          <li className="nav-item mb-4 text-center">
            <FaClipboardList size={30} />
            <div>Availability Management</div>
          </li>
          <li className="nav-item mb-4 text-center">
            <FaCalendarAlt size={30} />
            <div>Appointment Management</div>
          </li>
          <li className="nav-item mb-4 text-center">
            <FaSignOutAlt size={30} />
            <div>Logout</div>
          </li>
        </ul>
      </div>

      {/* Sidebar Overlay (For Mobile View) */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-primary d-md-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
          <h2 className="text-primary">Medicine</h2>
          <div className="d-flex align-items-center">
            <input type="text" className="form-control me-3" placeholder="Search..." />
            <FaCommentDots className="mx-2" size={20} />
            <FaBell className="mx-2" size={20} />
            <div className="d-flex align-items-center bg-light rounded px-3 py-1">
              <FaUser className="me-2" size={20} />
              <span className="advantal_spa">advantal cl...</span>
            </div>
          </div>
        </div>
        <div className="bottomline"></div>

        {/* Dashboard Sections */}
        <div className="row">
          <div className="col-md-8">
            {/* Total Patients */}
            <div className="total-patients-card mb-4">
              {/* Left Side Content */}
              <div className="left-content">
                {/* <h5 className="greeting-text">
                  Good Morning <span className="clinic-name">Advantal Clinic !</span>
                </h5> */}

                <div className="patients_count"><h6>Total Patients</h6>
                <h2>104</h2></div>

                {/* Online & Offline Stats */}
                <div className="stats-container">
                  <div className="stats-box">
                    <h6>Online</h6>
                    <h3>40</h3>
                    <span className="badge bg-success">51% <span className="arrow">↗</span></span>
                  </div>
                  <div className="stats-box">
                    <h6>Offline</h6>
                    <h3>64</h3>
                    <span className="badge bg-danger">20% <span className="arrow">↘</span></span>
                  </div>
                </div>
              </div>

              {/* Right Side Doctor Image */}
              <div className="doctor-image-container">
                <img src={Person} alt="Doctor" className="doctor-image" />
              </div>
            </div>

            {/* Total Doctors with Graph */}
            <div className="card p-3 text-center">
              <h5 className="d-flex align-items-center justify-content-center">
                <FaUserMd className="me-2" /> Total Doctors
              </h5>
              <h2>104</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={doctorData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                  <XAxis dataKey="name" tick={{ fill: "#666" }} tickLine={false} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#4A90E2" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              {/* Doctor categories aligned at the bottom */}
              {/* <div className="d-flex justify-content-around mt-3">
                {doctorData.map((item, index) => (
                  <div key={index} className="text-center">
                    <span className="fw-bold">{item.name}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Matching Section */}
          <div className="col-md-4">
            <div className="card p-3 mt-4">
              <h5>My Matching</h5>
              {matchingData.map((match, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <img src={match.image} alt={match.name} className="rounded-circle me-3" width="50" height="50" />
                  <div className="flex-grow-1" style={{marginRight:"15px"}}>
                    <h6 className="mb-0">{match.name}</h6>
                    <small className="text-muted">{match.specialty}</small>
                  </div>
                  <span className={`badge ${match.status === "Open" ? "bg-success" : "bg-danger"}`}>{match.status}</span>
                </div>
              ))}
            </div>
            <div className="card p-3 mt-4">
              {/* Calendar Header */}
              <div className="d-flex justify-content-between align-items-center">
                <h5>Calendar</h5>
                <FaChevronDown />
              </div>

              {/* Calendar Component */}
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={({ date, view }) => {
                  if (view === "month") {
                    const formattedDate = date.toISOString().split("T")[0];
                    return highlightDates.includes(formattedDate) ? <span className="dot"></span> : null;
                  }
                }}
              />

              {/* Upcoming Events */}
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Upcoming</h5>
                  <a href="#" className="text-primary">View All</a>
                </div>

                {events.map((event, index) => (
                  <div key={index} className="d-flex align-items-center bg-light p-2 rounded mb-2">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                      {event.icon}
                    </div>
                    <div className="ms-2">
                      <p className="mb-1 fw-bold">{event.title}</p>
                      <small className="text-muted">{event.date} | {event.time}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom CSS for Red Dots on Dates */}
              <style>
                {`
          .react-calendar {
            border: none;
            width: 100%;
            font-family: inherit;
          }
          .react-calendar__tile {
            position: relative;
          }
          .dot {
            height: 6px;
            width: 6px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
