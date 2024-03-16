import { useState } from "react";
import axios from 'axios';

function BulkEntryXlsx() 
{
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Check if the selected file is of type .xlsx
    if (file && file.name.endsWith('.xlsx')) {
      setSelectedFile(file);
    } else {
      // If not an .xlsx file, show an alert or do nothing
      alert('Please select an .xlsx file.');
      setSelectedFile(null);
    }
  };
  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
    //const formData = new FormData();
    //formData.append('file', selectedFile);
    console.log("File Uploaded!!")
    // axios.post('/api/upload', formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <h1 className="text-3xl my-10">Bulk Entry of Trainee using xlsx</h1>
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <input 
          accept=".xlsx,.xls" 
          type="file" 
          onChange={handleFileUpload} 
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">(only .xlsx or .xls supported)</label>
        <button className="w-24 text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800" variant="primary" onClick={handleUpload} >Upload </button>
      </div>

    </div>
  );
}

export default BulkEntryXlsx;
