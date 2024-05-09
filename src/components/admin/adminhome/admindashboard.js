import React from 'react';
import AdminSidebar from '../adminsidebar/adminSidebar';
import AdminBody from './adminbody';
import './dashboard.css';
import Footer from "../../footer/footer";

export default function AdminHome() {
  return (
    <>
      <div className="admin-home">
        <div className="admin-sidebar">
          <AdminSidebar />
        </div>
        <div className="admin-body">
          <div className="dashboard-container">
            <div className="dashboard-item">
              <h3>Total Posts</h3>
              <p className="number">50</p>
            </div>
            <div className="dashboard-item">
              <h3>This Month Posts</h3>
              <p className="number">10</p>
            </div>
            <div className="dashboard-item">
              <h3>Total Comments</h3>
              <p className="number">150</p>
            </div>
            <div className="dashboard-item">
              <h3>Total Upvotes</h3>
              <p className="number">300</p>
            </div>
            <div className="dashboard-item">
              <h3>Total Downvotes</h3>
              <p className="number">100</p>
            </div>
            {/* Static Chart */}
            {/* <div className="dashboard-item chart-container">
              <h3>Static Chart</h3>
              <div className="chart">
                <div className="bar" style={{ height: '150px' }}></div>
                <div className="bar" style={{ height: '100px' }}></div>
                <div className="bar" style={{ height: '200px' }}></div>
                <div className="bar" style={{ height: '250px' }}></div>
                <div className="bar" style={{ height: '180px' }}></div>
              </div>
            </div> */}
            {/* Bar Graph */}
          
          </div>
          <div className="dashboard-item chart-container">
              <h3>Bar Graph</h3>
              <div className="bar-graph">
                <div className="bar" style={{ height: '50%' }}></div>
                <div className="bar" style={{ height: '20%' }}></div>
                <div className="bar" style={{ height: '75%' }}></div>
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '60%' }}></div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
