import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = () => {
  const [examData, setExamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/exams");
        setExamData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatDuration = (startDateTime, stopDateTime) => {
    const start = new Date(startDateTime);
    const stop = new Date(stopDateTime);
    const diff = Math.abs(stop - start);
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Exam Results</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Exam Type</th>
              <th>Start Date/Time</th>
              <th>Stop Date/Time</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam) => (
              <tr key={exam._id}>
                <td>{exam.patientId}</td>
                <td>{exam.examType}</td>
                <td>{new Date(exam.startDatetime).toLocaleString()}</td>
                <td>{new Date(exam.stopDatetime).toLocaleString()}</td>
                <td>
                  {formatDuration(exam.startDatetime, exam.stopDatetime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
