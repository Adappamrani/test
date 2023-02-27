// TableRow.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { calculateDuration, calculateDuration2, formatDuration } from './duration';

const TableRow = ({ row, index, updateRow, deleteRow }) => {
  const [rowData, setRowData] = useState({
    patientId: row.patientId,
    examType: row.examType,
    startDatetime: row.startDatetime,
    stopDatetime: row.stopDatetime,
    stopDatetime2: row.stopDatetime2,
    duration: row.duration,
    duration2: row.duration2,
  });

  const updateField = (fieldName, value) => {
    setRowData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    updateRow(index, fieldName, value);
  };

  const handleStartDatetime = () => {
    const currentDatetime = moment().format("YYYY-MM-DDTHH:mm");
    updateField("startDatetime", currentDatetime);
  };

  const handleStopDatetime = () => {
    const currentDatetime = moment().format("YYYY-MM-DDTHH:mm");
    const durationInMinutes = calculateDuration(
      rowData.startDatetime,
      currentDatetime
    );
    updateField("stopDatetime", currentDatetime);
    updateField("duration", formatDuration(durationInMinutes));
  };

  const handleStopDatetime2 = () => {
    const currentDatetime = moment().format("YYYY-MM-DDTHH:mm");
    const durationInMinutes = calculateDuration2(
      rowData.startDatetime,
      currentDatetime
    );
    updateField("stopDatetime2", currentDatetime);
    updateField("duration2", formatDuration(durationInMinutes));
  };

  const handleDeleteRow = () => {
    deleteRow(index);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={rowData.patientId}
          onChange={(e) => updateField("patientId", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={rowData.examType}
          onChange={(e) => updateField("examType", e.target.value)}
        />
      </td>
      <td>
        <input
          type="datetime-local"
          value={rowData.startDatetime}
          onChange={(e) => updateField("startDatetime", e.target.value)}
        />
        <button onClick={handleStartDatetime}>Start</button>
      </td>
      <td>
        <input
          type="datetime-local"
          value={rowData.stopDatetime}
          onChange={(e) => updateField("stopDatetime", e.target.value)}
        />
        <button onClick={handleStopDatetime}>Stop</button>
      </td>
      <td>
        <input
          type="datetime-local"
          value={rowData.stopDatetime2}
          onChange={(e) => updateField("stopDatetime2", e.target.value)}
        />
        <button onClick={handleStopDatetime2}>Stop2</button>
      </td>
      <td>{rowData.duration}</td>
      <td>{rowData.duration2}</td>
      <td>
        <button onClick={handleDeleteRow}>Delete</button>
      </td>
    </tr>
  );
};


TableRow.propTypes = {
  row: PropTypes.shape({
    patientId: PropTypes.string.isRequired,
    examType: PropTypes.string.isRequired,
    startDatetime: PropTypes.string.isRequired,
    stopDatetime: PropTypes.string.isRequired,
    stopDatetime2: PropTypes.string.isRequired,
    duration2: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default TableRow;
