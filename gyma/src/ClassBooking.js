import React, { useState } from 'react';

function ClassBooking({ classID, isBooked }) {
  const [bookingStatus, setBookingStatus] = useState('');

  const handleAction = async () => {
    try {
      const response = await fetch('/api/classes/' + (isBooked ? 'cancel' : 'book'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId: classID }),
      });

      if (response.ok) {
        setBookingStatus(isBooked ? 'Class canceled!' : 'Class booked!');
      } else {
        setBookingStatus('Action failed.');
      }
    } catch (error) {
      console.error('Error performing action:', error);
      setBookingStatus('Action failed.');
    }
  };

  return (
    <div>
      <button onClick={handleAction}>{isBooked ? 'Cancel Class' : 'Book Class'}</button>
      <p>{bookingStatus}</p>
    </div>
  );
}

export default ClassBooking;