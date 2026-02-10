import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts endpoint:', endpoint);
        console.log('Workouts data:', data);
        if (data.results) {
          setWorkouts(data.results);
        } else {
          setWorkouts(Array.isArray(data) ? data : []);
        }
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="heading">Workouts</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Workout</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{idx+1}</td>
                  <td>{JSON.stringify(workout)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm">詳細</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
