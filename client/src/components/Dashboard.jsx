import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch(
        "http://localhost:5000/feedback/get-feedbacks"
      );
      const data = await response.json();
      console.log(data);
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Feedback Dashboard</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        feedbacks.map((feedback) => (
          <div key={feedback._id} className="bg-gray-100 p-4 mb-4 rounded">
            
            {feedback.feedbackName}
            <div>positiv {feedback.positiveEmotions}</div>
            <div>{feedback.improvementAreas}</div>
            
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
