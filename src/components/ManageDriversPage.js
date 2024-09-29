import React, { useState } from 'react';
import './ManageDriversPage.css';
import { FaPlusCircle } from 'react-icons/fa';
// import { Numbers } from '@mui/icons-material';

const ManageDriversPage = () => {
  const [drivers, setDrivers] = useState([
    { id: 'D001', name: 'John Doe', mobile: '9876543210', email: 'john@example.com', age: 35 },
    { id: 'D002', name: 'Jane Smith', mobile: '9876543211', email: 'jane@example.com', age: 42 },
    { id: 'D003', name: 'Mark Brown', mobile: '9876543212', email: 'mark@example.com', age: 29 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newDriver, setNewDriver] = useState({ id: '', name: '', mobile: '', email: '', age: '' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
  };

  const filteredDrivers = drivers.filter(driver =>
    (searchTerm === '' || driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.includes(searchTerm)) &&
    (filterTerm === '' || (filterTerm === 'age' && driver.age))
  );

  const handleAddDriver = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDrivers([...drivers, newDriver]);
    setNewDriver({ id: '', name: '', mobile: '', email: '', age: ''});
    setIsFormOpen(false);
  };

  return (
    <div className="manage-driver">
      <h1>Manage Drivers</h1>
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search Driver"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />

        <select className="filter-select" value={filterTerm} onChange={handleFilter}>
          <option value="">Filter by age</option>
          <option value="age">Under 40</option>
        </select>

        <button className="add-driver-button" onClick={handleAddDriver}>
          <FaPlusCircle className="add-icon" /> Add New Driver
        </button>
      </div>

      {isFormOpen && (
        <form onSubmit={handleFormSubmit} className="add-driver-form">
          <h2>Add New Driver</h2>
          <input
            type="text"
            placeholder="Driver ID"
            value={newDriver.id}
            onChange={(e) => setNewDriver({ ...newDriver, id: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={newDriver.name}
            onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Mobile"
            value={newDriver.mobile}
            onChange={(e) => setNewDriver({ ...newDriver, mobile: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newDriver.email}
            onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={newDriver.age}
            onChange={(e) => setNewDriver({ ...newDriver, age: e.target.value })}
            required
          />
          <button type="submit">Add Driver</button>
        </form>
      )}

      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.mobile}</td>
              <td>{driver.email}</td>
              <td>{driver.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDriversPage;
