import React from 'react';

function RealTimeFeedback({ fitnessPlan }) {
  return (
    <div className="real-time-feedback">
      <h2>Real-Time Feedback</h2>
      <p>Track your progress and receive real-time feedback on your workouts.</p>
      <ul>
        {fitnessPlan.workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeFeedback;