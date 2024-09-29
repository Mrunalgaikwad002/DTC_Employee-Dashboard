import { useState } from 'react';
import React from 'react';
import './ManageBusesPage.css';

const ManageBusesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColor, setFilterColor] = useState('');
    const [buses, setBuses] = useState([
        { id: '1', number: 'DL01AB1234', routeId: 'R1', color: 'Red', driver: 'John Doe', conductor: 'Sam Green', startTime: '08:00 AM', endTime: '04:00 PM', status: 'Active' },
        { id: '2', number: 'DL02BC5678', routeId: 'R2', color: 'Blue', driver: 'Jane Smith', conductor: 'Amy White', startTime: 'null', endTime: 'null', status: 'Inactive' },
        { id: '3', number: 'DL03CD9101', routeId: 'R3', color: 'Orange', driver: 'Robert Brown', conductor: 'Chris Black', startTime: '07:00 AM', endTime: '03:00 PM', status: 'Active' },
        { id: '4', number: 'DL04DE1213', routeId: 'R4', color: 'Green', driver: 'Mary Green', conductor: 'John Davis', startTime: '10:00 AM', endTime: '06:00 PM', status: 'Active' },
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newBus, setNewBus] = useState({
        number: '',
        routeId: '',
        color: '',
        driver: '',
        conductor: '',
        startTime: '',
        endTime: '',
        status: 'Active'
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterColor = (e) => {
        setFilterColor(e.target.value);
    };

    const handleAddBus = () => {
        setShowAddForm(true);
    };

    const handleNewBusChange = (e) => {
        setNewBus({ ...newBus, [e.target.name]: e.target.value });
    };

    const handleSubmitNewBus = (e) => {
        e.preventDefault();
        setBuses([...buses, { ...newBus, id: (buses.length + 1).toString() }]);
        setShowAddForm(false);
    };

    const activeCount = buses.filter(bus => bus.status === 'Active').length;
    const inactiveCount = buses.filter(bus => bus.status === 'Inactive').length;

    const filteredBuses = buses.filter(bus =>
        bus.number.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterColor === '' || bus.color.toLowerCase() === filterColor.toLowerCase())
    );

    return (
        <div className="bus-manage">
            <h1>Manage Buses</h1>
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search buses"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <select value={filterColor} onChange={handleFilterColor} className="filter-select">
                    <option value="">Filter by Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Orange">Orange</option>
                </select>
                 </div>
            <div className='add'>
                <button className="add-btn" onClick={handleAddBus}>
                    <i className="fa fa-plus-circle"></i> Add New Bus
                </button>
            </div>

            <div className="status-summary">
                <p>Active Buses: {activeCount}</p>
                <p>Inactive Buses: {inactiveCount}</p>
            </div>

            <table className="bus-table">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>Route ID</th>
                        <th>Bus Type</th>
                        <th>Driver Name</th>
                        <th>Conductor Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBuses.map(bus => (
                        <tr key={bus.id}>
                            <td>{bus.number}</td>
                            <td>{bus.routeId}</td>
                            <td>{bus.color}</td>
                            <td>{bus.driver}</td>
                            <td>{bus.conductor}</td>
                            <td>{bus.startTime}</td>
                            <td>{bus.endTime}</td>
                            <td>{bus.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showAddForm && (
                <form className="add-bus-form" onSubmit={handleSubmitNewBus}>
                    <h2>Add New Bus</h2>
                    <input
                        type="text"
                        name="number"
                        placeholder="Bus Number"
                        value={newBus.number}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="text"
                        name="routeId"
                        placeholder="Route ID"
                        value={newBus.routeId}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Bus Type"
                        value={newBus.color}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="text"
                        name="driver"
                        placeholder="Driver Name"
                        value={newBus.driver}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="text"
                        name="conductor"
                        placeholder="Conductor Name"
                        value={newBus.conductor}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="time"
                        name="startTime"
                        value={newBus.startTime}
                        onChange={handleNewBusChange}
                        required
                    />
                    <input
                        type="time"
                        name="endTime"
                        value={newBus.endTime}
                        onChange={handleNewBusChange}
                        required
                    />
                    <button type="submit">Add Bus</button>
                </form>
            )}
        </div>
    );
};

export default ManageBusesPage;
