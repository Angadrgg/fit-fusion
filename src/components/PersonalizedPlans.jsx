import React from 'react';

function PersonalizedPlans({ userGoals, userPreferences, handlePlanGeneration }) {
  return (
    <div className="personalized-plans">
      <h2>Personalized Fitness Plans</h2>
      <p>Based on your goals and preferences, we will generate a customized fitness plan for you.</p>
      <button onClick={handlePlanGeneration}>Generate Plan</button>
      <ul>
        {userGoals.map((goal) => (
          <li key={goal.id}>{goal.name}</li>
        ))}
      </ul>
      <ul>
        {userPreferences.map((preference) => (
          <li key={preference.id}>{preference.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalizedPlans;