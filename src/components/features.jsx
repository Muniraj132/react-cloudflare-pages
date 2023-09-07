import React, { useState, useEffect } from "react";
import axios from "axios";

export const Features = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
  }, [data]);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Employees</h2>
        </div>
        <div className="row">
          {loading ? (
            "Loading..."
          ) : (
            data.map((employee) => (
              <div key={employee.id} className="col-xs-6 col-md-3">
                <i className="fa fa-user"></i> {/* Use your desired icon class */}
                <h3>{employee.employee_name}</h3>
                <p>Salary: {employee.employee_salary}</p>
                <p>Age: {employee.employee_age}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
