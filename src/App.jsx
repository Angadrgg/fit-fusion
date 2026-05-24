import React, { useState, useEffect } from 'react';
import './App.css';
import PersonalizedPlans from './components/PersonalizedPlans';
import RealTimeFeedback from './components/RealTimeFeedback';
import WearableDeviceIntegration from './components/WearableDeviceIntegration';
import HealthAPIIntegration from './components/HealthAPIIntegration';
import MachineLearningRecommendations from './components/MachineLearningRecommendations';

function App() {
  const [userGoals, setUserGoals] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);
  const [fitnessPlan, setFitnessPlan] = useState({});

  useEffect(() => {
    // Fetch user goals and preferences from API
    const fetchUserGoals = async () => {
      const response = await fetch('https://example.com/api/user-goals');
      const data = await response.json();
      setUserGoals(data);
    };

    const fetchUserPreferences = async () => {
      const response = await fetch('https://example.com/api/user-preferences');
      const data = await response.json();
      setUserPreferences(data);
    };

    fetchUserGoals();
    fetchUserPreferences();
  }, []);

  const handlePlanGeneration = async () => {
    // Generate fitness plan based on user goals and preferences
    const response = await fetch('https://example.com/api/generate-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userGoals, userPreferences })
    });

    const data = await response.json();
    setFitnessPlan(data);
  };

  return (
    <div className="app">
      <h1>FitFusion</h1>
      <PersonalizedPlans userGoals={userGoals} userPreferences={userPreferences} handlePlanGeneration={handlePlanGeneration} />
      <RealTimeFeedback fitnessPlan={fitnessPlan} />
      <WearableDeviceIntegration />
      <HealthAPIIntegration />
      <MachineLearningRecommendations fitnessPlan={fitnessPlan} />
    </div>
  );
}

export default App;