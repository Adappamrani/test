// Form.js
import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import AddRowButton from "./AddRowButton";

const Form = () => {
const [rows, setRows] = useState([{ patientId: "", examType: "", startDatetime: "", stopDatetime: "", duration: "", stopDatetime2: "", duration2: ""  }]);

const addRow = () => {
setRows([...rows, { patientId: "", examType: "", startDatetime: "", stopDatetime: "", duration: "", stopDatetime2: "", duration2: ""  }]);
};

const deleteRow = (index) => {
const updatedRows = [...rows];
updatedRows.splice(index, 1);
setRows(updatedRows);
};

const updateRow = (index, field, value) => {
const updatedRows = [...rows];
updatedRows[index][field] = value;
setRows(updatedRows);
};

const handleAddExam = () => {
addRow();
}

return (
<div>
<h2>Exam Form</h2>
<table>
<TableHeader />
<tbody>
{rows.map((row, index) => (
<TableRow
           key={index}
           index={index}
           row={row}
           updateRow={updateRow}
           deleteRow={deleteRow}
         />
))}
</tbody>
</table>
<AddRowButton onClick={handleAddExam} />
</div>
);
};

export default Form;