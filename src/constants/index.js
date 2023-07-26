import {MoreActions} from "../components/more-actions"

export const columns = (handleDeletion, handleUpdate) => {
return ([
    {
        name: 'ID',
        selector: row =>  row.id,
        sortable: true,
    },
    {
        name: 'Product Name',
        selector: row =>  row.productName,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row =>  row.category,
        sortable: true,
    },
    {
        name: 'Quantity',
        selector: row =>  row.quantity,
        sortable: true,
    },
    {
        name: 'Price per Unit',
        selector: row => row.ppu,
        sortable: true,
    },
    {
        name: 'Shelf No.',
        selector: row =>  row.shelfNo,
        sortable: true,
    },
    {
        name: 'Vendor Link',
        selector: row =>  row.vendorLink,
        sortable: true,
    },
    {
        name: 'Last Updated at',
        selector: row =>  row.updatedAt,
        sortable: true,
    },
    {
        cell: row => <MoreActions rowData={row} handleDeletion={handleDeletion} handleUpdate={handleUpdate}/>,
        allowOverflow: true,
        button: true,
        width: '56px',
    },
]);
}

