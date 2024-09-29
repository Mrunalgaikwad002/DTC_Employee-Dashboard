import React, { useState, useEffect } from 'react';
import './ManageConductorsPage.css';
import { FaPlusCircle } from 'react-icons/fa';

const ManageConductorsPage = () => {
  const [conductors, setConductors] = useState([
    { id: 'C001', name: 'Alice Johnson', mobile: '9876543215', email: 'alice@example.com', age: 30 },
    { id: 'C002', name: 'Bob Davis', mobile: '9876543216', email: 'bob@example.com', age: 41 },
    { id: 'C003', name: 'Carol Miller', mobile: '9876543217', email: 'carol@example.com', age: 28 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [showAddConductorForm, setShowAddConductorForm] = useState(false);
  const [newConductor, setNewConductor] = useState({ id: '', name: '', mobile: '', email: '', age: '' });

  useEffect(() => {
    console.log("ManageConductorsPage is mounted");
  }, []);

  // Handles the new conductor input
  const handleAddConductorChange = (e) => {
    setNewConductor({ ...newConductor, [e.target.name]: e.target.value });
  };

  // Handles submitting the new conductor form
  const handleAddConductorSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!newConductor.id || !newConductor.name || !newConductor.mobile || !newConductor.email || !newConductor.age) {
      alert("Please fill in all fields.");
      return; // Exit the function if any field is empty
    }

    setConductors([...conductors, newConductor]);
    setNewConductor({ id: '', name: '', mobile: '', email: '', age: '' });
    setShowAddConductorForm(false);
  };

  const filteredConductors = conductors.filter(conductor =>
    (searchTerm === '' || conductor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conductor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conductor.id.includes(searchTerm)) &&
    (filterTerm === '' || (filterTerm === 'under30' && conductor.age < 30))
  );

  return (
    <div className="manage-conductor">
      <h1>Manage Conductors</h1>
      <div className="search-filter-section">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search Conductor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        
        {/* Filter dropdown */}
        <select className="filter-select" value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}>
          <option value="">Filter</option>
          <option value="under30">Under 30</option>
        </select>
      
        {/* Add New Conductor button */}
        <button className="add-conductor-button" onClick={() => setShowAddConductorForm(true)}>
          <FaPlusCircle className="add-icon" /> Add New Conductor
        </button>
      </div>

      {/* Conductor Table */}
      <table className="conductor-table">
        <thead>
          <tr>
            <th>Conductor ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredConductors.map(conductor => (
            <tr key={conductor.id}>
              <td>{conductor.id}</td>
              <td>{conductor.name}</td>
              <td>{conductor.mobile}</td>
              <td>{conductor.email}</td>
              <td>{conductor.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Conductor Form */}
      {showAddConductorForm && (
        <div className="add-conductor-form">
          <h2>Add New Conductor</h2>
          <form onSubmit={handleAddConductorSubmit}>
            <input
              type="text"
              name="id"
              placeholder="Conductor ID"
              value={newConductor.id}
              onChange={handleAddConductorChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Conductor Name"
              value={newConductor.name}
              onChange={handleAddConductorChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={newConductor.mobile}
              onChange={handleAddConductorChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newConductor.email}
              onChange={handleAddConductorChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={newConductor.age}
              onChange={handleAddConductorChange}
            />
            <button type="submit">Add Conductor</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageConductorsPage;
