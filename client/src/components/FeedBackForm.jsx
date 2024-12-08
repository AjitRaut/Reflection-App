import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const { feedbackName } = useParams();

  const [formData, setFormData] = useState({
    positiveEmotions: [],
    improvementAreas: [],
    positiveFeedback: "",
    improvementFeedback: "",
  });

  const handleCheckbox = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.positiveEmotions.length) {
      alert("At least one positive emotion must be selected.");
      return;
    }
    if (!formData.improvementAreas.length) {
      alert("At least one improvement area must be selected.");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/feedback/submit-feedback",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackName,
          ...formData,
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      alert("Thank you!");
      setFormData({
        positiveEmotions: [],
        improvementAreas: [],
        positiveFeedback: "",
        improvementFeedback: "",
      });
      navigate("/dashboard"); 
    } else {
      alert(data.error || "An error occurred.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold">Positive Emotions</h3>
        <div>
          {["Happy", "Excited", "Content"].map((emotion) => (
            <label key={emotion} className="block">
              <input
                type="checkbox"
                value={emotion}
                onChange={(e) => handleCheckbox(e, "positiveEmotions")}
                className="mr-2"
              />
              {emotion}
            </label>
          ))}
        </div>

        <h3 className="font-bold mt-4">Improvement Areas</h3>
        <div>
          {["Time Management", "Collaboration", "Communication"].map((area) => (
            <label key={area} className="block">
              <input
                type="checkbox"
                value={area}
                onChange={(e) => handleCheckbox(e, "improvementAreas")}
                className="mr-2"
              />
              {area}
            </label>
          ))}
        </div>

        <textarea
          placeholder="Positive Feedback"
          value={formData.positiveFeedback}
          onChange={(e) =>
            setFormData({ ...formData, positiveFeedback: e.target.value })
          }
          className="w-full mt-4 p-2 border rounded"
        ></textarea>

        <textarea
          placeholder="Improvement Feedback"
          value={formData.improvementFeedback}
          onChange={(e) =>
            setFormData({ ...formData, improvementFeedback: e.target.value })
          }
          className="w-full mt-4 p-2 border rounded"
        ></textarea>

        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;