import DataTable from 'react-data-table-component';
import { customersData } from '../assets/data/dummy';

const Customers = () => {

const columns = [
    {
        name: 'Title',
        selector: row => row.CustomerName,
    },
    {
        name: 'project name',
        selector: row => row.ProjectName,
    },
    {
        name: 'status',
        selector: row => row.Status,
    },
    {
        name: 'Budget',
        selector: row => row.Budget,
    },
    {
        name: 'Location',
        selector: row => row.Location,
    },
];
const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            
            backgroundColor: 'white',
            fontSize: '20px'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

  return (
    <div className='-z-50 ml-0 md:ml-64 scale-in-bottom'>
        <DataTable
            columns={columns}
            data={customersData}
            customStyles={customStyles}
            selectableRows
        />
    </div>
  )
}

export default Customers