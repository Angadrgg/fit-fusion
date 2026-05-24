import React from 'react';

function MachineLearningRecommendations({ fitnessPlan }) {
  return (
    <div className="machine-learning-recommendations">
      <h2>Machine Learning Recommendations</h2>
      <p>Receive personalized recommendations based on your fitness plan and progress.</p>
      <ul>
        {fitnessPlan.recommendations.map((recommendation) => (
          <li key={recommendation.id}>{recommendation.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MachineLearningRecommendations;