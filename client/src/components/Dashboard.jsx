import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/feedback/get-feedbacks");
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Feedback Dashboard</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-600 text-center">No feedbacks available.</p>
      ) : (
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-white shadow rounded p-6">
              <h3 className="text-lg font-semibold mb-4">
                Feedback Name: {feedback.feedbackName}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-1">Positive Emotions:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {feedback.positiveEmotions.map((emotion, index) => (
                      <span
                        key={index}
                        className="block px-2 py-1 text-sm text-center bg-green-100 text-green-700 rounded"
                      >
                        {emotion || "No positive emotion provided"}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Improvements:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {feedback.improvementAreas.map((area, index) => (
                      <span
                        key={index}
                        className="block px-2 py-1 text-sm text-center bg-red-100 text-red-700 rounded"
                      >
                        {area || "No improvement area provide"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-medium mb-1">Positive Feedback:</h5>
                <p className="px-3 py-2 bg-blue-100 text-blue-700 rounded">
                  {feedback.positiveFeedback || "No feedback provided"}
                </p>
              </div>
              <div className="mt-4">
                <h5 className="font-medium mb-1">Improvement Feedback:</h5>
                <p className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded">
                  {feedback.improvementFeedback || "No feedback provided"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
