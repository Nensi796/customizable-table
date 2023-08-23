import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustomTable from './App';
import reportWebVitals from './reportWebVitals';



const TableData = [{name:"lorem",department:"Computer Science",enr:12300052158},
    {name:"test-1",department:"Computer Science",enr:12300052158},
    {name:"test-2",department:"Computer Science",enr:12300052158},
    {name:"test-3",department:"Computer Science",enr:12300052158},
    {name:"test-4",department:"Computer Science",enr:12300052158},
    {name:"test-5",department:"Computer Science",enr:12300052158},
    {name:"test-6",department:"Computer Science",enr:12300052158},
    {name:"test-7",department:"Computer Science",enr:12300052158},
    {name:"test-8",department:"Computer Science",enr:12300052158},
    {name:"test-9",department:"Computer Science",enr:12300052158},
    {name:"test-10",department:"Computer Science",enr:12300052158},
    {name:"test-11",department:"Computer Science",enr:12300052158},
    {name:"test-12",department:"Computer Science",enr:12300052158},
    {name:"test-13",department:"Computer Science",enr:12300052158},
    {name:"development",department:"Computer Science",enr:12300052158},];
const columns = [{
    key:"name",

    title:"Name",

},
    {
        key:"department",

        title:"Department",

    },
    {
        key:"enr",

        title:"Enrollment Number",

    },
    {
        key:"",

        title:"Action",
        render:() =>(
            <a href="#">Link Address</a>
        )
    }];
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomTable  columns={columns} data={TableData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
