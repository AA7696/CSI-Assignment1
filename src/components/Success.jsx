import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-6">
        <p>No data found. Please fill the form.</p>
        <button onClick={() => navigate('/')}>Go back</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submitted Details</h2>
      <div className="grid gap-2">
        {Object.entries(state).map(([key, value]) => (
          <div key={key}>
            <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
