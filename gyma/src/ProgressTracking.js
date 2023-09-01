import React, { useState } from 'react';

function ProgressTracking({ classID }) {
  const [progressValue, setProgressValue] = useState('');
  const [trackingStatus, setTrackingStatus] = useState('');

  const handleAddProgress = async () => {
    try {
      const response = await fetch('/api/progress/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId: classID, progressValue }),
      });

      if (response.ok) {
        setTrackingStatus('Progress added successfully!');
      } else {
        setTrackingStatus('Failed to add progress.');
      }
    } catch (error) {
      console.error('Error adding progress:', error);
      setTrackingStatus('Failed to add progress.');
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter progress percentage"
        value={progressValue}
        onChange={e => setProgressValue(e.target.value)}
      />
      <button onClick={handleAddProgress}>Add Progress</button>
      <p>{trackingStatus}</p>
    </div>
  );
}

export default ProgressTracking;