import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateLink = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleCreateFeedback = async () => {
    const feedbackName = prompt("Enter Feedback Name:");
    if (!feedbackName) return;

    try {
      const response = await fetch(
        "http://localhost:5000/feedback/create-feedback",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ feedbackName }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setFeedbacks((prevFeedbacks) => [
          ...prevFeedbacks,
          { name: feedbackName, link: data.feedbackLink },
        ]);
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Error generating feedback link");
    }
  };

  const handleOpenLink = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-md shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-700">Feedback Links</h1>
          <button
            onClick={handleCreateFeedback}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create New Feedback
          </button>
        </div>

        <div className="border-t border-gray-200 mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b font-medium text-gray-700">
                  Feedback Name
                </th>
                <th className="p-2 border-b font-medium text-gray-700">Link</th>
                <th className="p-2 border-b font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td className="p-2 border-b">{feedback.name}</td>
                  <td className="p-2 border-b text-blue-500">
                    <Link className="underline">{feedback.link}</Link>
                  </td>
                  <td className="p-2 border-b">
                    <button
                      onClick={() => handleOpenLink(feedback.link)}
                      className="text-blue-500 underline"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
              {feedbacks.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="p-2 text-center text-gray-500 italic"
                  >
                    No feedbacks created yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;
