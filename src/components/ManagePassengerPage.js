import React, { useState } from 'react';
import './ManagePassengerPage.css';

const ManagePassengerPage = () => {
  const [passengers, setPassengers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '9876543210', feedback: 'Great service', query: 'None', rate: 5, travelDate: '2024-09-10', feedbackDate: '2024-09-12' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543211', feedback: 'Could improve', query: 'Why no AC?', rate: 3, travelDate: '2024-09-11', feedbackDate: '2024-09-13' },
    { id: 3, name: 'Mark Brown', email: 'mark@example.com', mobile: '9876543212', feedback: 'Good service', query: 'None', rate: 4, travelDate: '2024-09-12', feedbackDate: '2024-09-14' },
    { id: 4, name: ' Mike Smith', email: 'mike@example.com', mobile:'9876543216', feedback: 'Could improve', query: 'seat problem', rate: 1 , travelDate: '2024-09-11', feedbackDate: '2024-09-13'},
    // Add more passengers as needed
  ]);

  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const handlePassengerClick = (passenger) => {
    setSelectedPassenger(passenger);
   
  };

  return (
    <div className="manage-passenger-dashboard">
      <h1>Passengers Reviews</h1>
      <table className="passenger-table">
        <thead>
          <tr>
            <th>Passenger Name</th>
            <th>Feedback</th>
            <th>Query</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id} onClick={() => handlePassengerClick(passenger)}>
              <td>{passenger.name}</td>
              <td>{passenger.feedback}</td>
              <td>{passenger.query}</td>
              <td>{passenger.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPassenger && (
          <div className="passenger-details">
          <h2>Passenger Details</h2>
          <p><strong>Name:</strong> {selectedPassenger.name}</p>
          <p><strong>Email:</strong> {selectedPassenger.email}</p>
          <p><strong>Mobile:</strong> {selectedPassenger.mobile}</p>
          <p><strong>Feedback:</strong> {selectedPassenger.feedback}</p>
          <p><strong>Query:</strong> {selectedPassenger.query}</p>
          <p><strong>Rate:</strong> {selectedPassenger.rate}</p>
          <p><strong>Travel Date:</strong> {selectedPassenger.travelDate}</p>
          <p><strong>Feedback Date:</strong> {selectedPassenger.feedbackDate}</p>
        </div>
      )}
    </div>
  );
};

export default ManagePassengerPage;
