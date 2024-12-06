import React from 'react';
import { useGetFeedbacksQuery } from '../app/apiSlice';
import FeedbackCard from '../components/FeedbackCard';

const Dashboard = () => {
  const { data: feedbacks, isLoading } = useGetFeedbacksQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {feedbacks.map((feedback, idx) => (
        <FeedbackCard key={idx} feedback={feedback} />
      ))}
    </div>
  );
};

export default Dashboard;
