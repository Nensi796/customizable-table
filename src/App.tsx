import React, {ChangeEvent, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Pagination from "./common/pagination/pagination";


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

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState<number>(5);


    const currentTableData = useMemo(
        () =>
            TableData?.slice(
                currentPage * pageLimit - pageLimit,
                currentPage * pageLimit
            ),
        [TableData, currentPage, pageLimit]
    );
    const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (currentTableData?.length < parseInt(e.target.value)) {
            setCurrentPage(1);
        }
        setPageLimit(parseInt(e.target.value));
    };

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


  return (
    <div className="flex flex-col justify-center items-center">


     <Table columns={columns} data={currentTableData}/>
        <div className="mt-2">
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={TableData?.length}
                pageSize={pageLimit}
                onPageChange={(page: number) =>
                    setCurrentPage(page)
                }
                siblingCount={1}
                setCurrentPage={setCurrentPage}
                handleOnSelect={handleOnSelect}
            />
        </div>

    </div>
  );
}

export default App;
