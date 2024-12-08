import React, { useState } from 'react';

const CreateLink = () => {
  const [feedbackName, setFeedbackName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateLink = async () => {
    if (feedbackName.trim() === '') {
      alert('Feedback Name is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/feedback/create-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedbackName }),
      });
      const data = await response.json();
      if (response.ok) {
        setGeneratedLink(data.feedbackLink); 
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('Error generating feedback link');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create a Feedback Link</h1>

        <label className="block mb-2 text-gray-700 font-medium">Feedback Name</label>
        <input
          type="text"
          placeholder="Enter Feedback Name"
          value={feedbackName}
          onChange={(e) => setFeedbackName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleGenerateLink}
          className="w-full p-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate Link
        </button>

        {generatedLink && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Your Feedback Link</h2>
            <p className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md">
              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {generatedLink}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateLink;
