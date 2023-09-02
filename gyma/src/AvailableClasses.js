import React, { useState, useEffect } from 'react';
import ClassBooking from './ClassBooking';
import ProgressTracking from './ProgressTracking';
import ViewProgress from './ViewProgress';

function AvailableClasses() {
  const [availableClasses, setAvailableClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/classes/available')
      .then(response => {
        // Check if the response contains JSON data
        if (!response.ok) {
          throw new Error('Response not successful');
        }
        return response.json();
      })
      .then(data => {
        setAvailableClasses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching available classes:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching available classes</p>;
  }

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {availableClasses.map(classData => (
          <li key={classData.classID}>
            Class Name: {classData.name}
            <br />
            Capacity: {classData.capacity}
            <br />
            <ClassBooking classID={classData.classID} isBooked={classData.capacity < classData.maxCapacity} />
            <ProgressTracking classID={classData.classID} />
            <ViewProgress classID={classData.ClassID} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableClasses;
