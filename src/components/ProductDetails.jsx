import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import {customStyles, updateTable, exportExcel} from '../helpers/utils';
import {columns} from '../constants';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "../styles/table.css";
import * as XLSX from "xlsx";
import { Input } from '@mui/material';
import {bulkUpdateItems} from "../helpers/apis/api";

export default function EnhancedTable() {

  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [selectedRows, setSelectedRows] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setData(data);
    };
    fetchData();
    const timeout = setTimeout(() => {
        setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = selectedRows => {
    console.log('Selected Rows: ', selectedRows);
    setSelectedRows(selectedRows.selectedRows);
  };
  
  const handleDeletion = index => {
    const currentData = data.filter(item => item.id !== index);
    setData(currentData);
  };

  const handleUpdate = value => {
    const updatedData = updateTable(value, data);
    setData(updatedData);
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const headers = ["id", "category", "ppu", "createdAt", "updatedAt", "shelfNo", "productName", "quantity", "vendorLink"];
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: headers });
      const result = await bulkUpdateItems(rows);
      console.log(result);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSearch = () => {
    const filteredItems = data.filter(item => item.productName === value);
    setData(filteredItems);
  }

  return (
    <div>
      <div class="header">
        <div class="search">
          <Input type="search" id="search" placeholder="Search Items" onChange={e => {setValue(e.target.value)}}/>
          <Button variant="outlined"startIcon={<SearchIcon />} onClick={handleSearch}>Submit</Button>
        </div>
        {selectedRows.length ? <Button onClick={() => exportExcel(selectedRows)} variant="outlined" startIcon={<IosShareOutlinedIcon />}>Export</Button>: null}
        <Input type="file" onChange={handleFileSelect} />
      </div>
      <div>
        <DataTable 
          title="Items & Inventory" 
          columns={columns(handleDeletion, handleUpdate)} 
          data={data} 
          pagination 
          selectableRows
          onSelectedRowsChange={handleChange} 
          progressPending={pending} 
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
      />
      </div>
    </div>
  )

}
