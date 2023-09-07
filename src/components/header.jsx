import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


export const Header = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  console.log(apiData);
  // Function to fetch API data
  const fetchData = async () => {
    try {
      const response = await axios.get("https://masspayments.shrinebasilicabangalore.org/api/testapi");
      setApiData(response?.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* Conditionally render loading icon or data */}
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                ) : (
                  <>
                    {
                      apiData?.map((res, i) => <>
                        <h1>{res?.name}</h1>
                        <p>{res?.email}</p>
                      </>)
                    }

                    <h1>{apiData ? apiData.name : "Data not available"}</h1>
                    <p>{apiData ? apiData.email : "Data not available"}</p>

                    <a href="#features" className="btn btn-custom btn-lg page-scroll">
                      Learn More
                    </a>{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
