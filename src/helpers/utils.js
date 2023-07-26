import * as XLSX from "xlsx";

export const exportExcel = selectedRowsData => {
    const worksheet = XLSX.utils.json_to_sheet(selectedRowsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Rows");
    XLSX.writeFile(workbook, "Items.xlsx");
  };

export const customStyles = {
    	headRow: {
    		style: {
    			border: 'none',
    		},
    	},
    	headCells: {
    		style: {
    			color: '#202124',
    			fontSize: '14px',
    		},
    	},
    	rows: {
    		highlightOnHoverStyle: {
    			backgroundColor: 'rgb(230, 244, 244)',
    			borderBottomColor: '#FFFFFF',
    			borderRadius: '25px',
    			outline: '1px solid #FFFFFF',
    		},
    	},
    	pagination: {
    		style: {
    			border: 'none',
    		},
    	},
    };

export const updateTable = (value, data) => {
data.map((item) => {
    if(item.id === value.id) {
        item.productName = value.productName;
        item.category = value.category;
        item.ppu = value.ppu;
        item.quantity = value.quantity;
        item.shelfNo = value.shelfNo;
        item.vendorLink = value.vendorLink;
    }
})
return data;
};
