import React, { useState, useEffect } from 'react';

function ViewProgress({ classID }) {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetch(`/api/progress/${classID}`)
      .then(response => response.json())
      .then(data => {
        setProgressData(data);
      })
      .catch(error => {
        console.error('Error fetching progress data:', error);
      });
  }, [classID]);

  return (
    <div>
      <h3>Progress Data</h3>
      <ul>
        {progressData.map(progress => (
          <li key={progress._id}>
            Progress: {progress.progressValue}%
            {/* Display more information if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewProgress;