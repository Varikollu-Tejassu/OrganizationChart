import React, { useState } from "react";
import { useEffect } from "react";
import OrganizationalChart from "./components/orgChart";
import "../src/App.css";
import employeeService from "./services/employeeDataService";

import { InputText } from 'primereact/inputtext';
        
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const App = () => {
  const [edata, setEdata] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('center');
  const [manager, setManager] = useState(null)
  const [employeename,setEmployeename] = useState("");
  const [role,setRole]= useState("")
  const [department,setDepartment] = useState("");
  


  const getEmployees = async () => {
    await employeeService
      .employeeData()
      .then((response) => {
       
        setEdata(response.data);
        setIsloading(true);
        console.log(response.data);
      })

      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getEmployees();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





    const selectedEmployeeTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                   
                    <div>{option.employeeName}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const employeeOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.employeeName}</div>
            </div>
        );
    };
    const show = (position) => {
      setPosition(position);
      setVisible(true);
  };
 const submitform = ()=>{
  employeeService.addEmployee(employeename,role,department,manager.id).then((res) =>{
        
    if (res.status === 201) {
      
      setVisible(false);
      getEmployees();
    }
  

 }).catch((error) => {
          
  console.error("Fetch error:", error);
})
 }
 






  if (!isloading) {
    return "Loading . . .";
  }
  return (
    <>
      <h1 className="title">Organization Chart</h1>
      <div className="add-search">
        {/* <input
          className="search"
          type="search"
          placeholder="search by name"
          
        /> */}
        <Button label="Add Employee"  onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />

        <div>
        <Dialog header="AddEmployee" visible={visible} position={position} style={{ width: '30vw' }} onHide={() => setVisible(false)}  draggable={false} resizable={false}>
         
         
          <div className="card flex justify-content-center">
         
          <InputText className="input" placeholder="Employee Name" value={employeename} onChange={(e) => setEmployeename(e.target.value)} />
          
          <InputText className="input" placeholder="Position" value={role} onChange={(e) => setRole(e.target.value)} />
          <InputText className="input" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
          <div style={{marginTop:"8px"}}>
            <Dropdown id="select" value={manager} onChange={(e) => setManager(e.value)} options={edata} optionLabel="name" placeholder="Reporting Manager" 
                valueTemplate={selectedEmployeeTemplate} itemTemplate={employeeOptionTemplate} className="w-full md:w-14rem" />
        <Button label="Submit"  onClick={submitform} className="Submit-btn" style={{ minWidth: '10rem' }} />
        </div> 
        </div> 
          
        
            </Dialog>
          
        </div>
      </div>

      <OrganizationalChart data={edata} />
    </>
  );
};

export default App;

// // import React from 'react'

// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import OrgChart from './OrgChart'
// // function App() {
// //   return (
// //     <div className="App">
// //       <OrgChart />
// //     </div>
// //   )
// // }
// // export default App

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../src/App.css"
// import { OrganizationChart } from 'primereact/organizationchart';

// function App() {
//   const [userdata,setUserdata]=useState()
//   useEffect(() => {
//     const fetchdata =async ()=> {
//      await axios.get('http://localhost:3001/api/userdata/getusers')
//       .then(async (res) =>{
//          await setUserdata(res.data)

//         })
//       .catch(err => {
//        console.log(err)})
//     }
//     fetchdata();
//       }, [])
// console.log(userdata)
//   var _ = require('lodash');
//   const groupedData = _.groupBy(userdata, 'parent');
//   console.log(groupedData)

// // var datas = []
// // for (var i = 5; i >= 0; i--) {
// //   var ship1 = []
// //   for (var j=groupedData[i].length-1;j>=0;j--){
// //       var ship = {}
// //       ship['label'] =groupedData[i][j].title;
// //       ship['expanded']=true;
// //       ship1.push(ship)
// //   }
// //   datas.push(ship1)
// // }
// // console.log(datas)

// //   return (
// //     <div className="App">
// //      {JSON.stringify(datas)}

// //     </div>

// //   );
// // }
// const [selection, setSelection] = useState([]);
// const [data] = useState([
//   {
//       expanded: true,
//       type: 'person',
//       className: 'bg-red-500 text-white',
//       style: { borderRadius: '12px' },
//       data: {
//           image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
//           name: 'Amy Elsner',
//           title: 'CEO'
//       },
//       children: [
//           {
//               expanded: true,
//               type: 'person',
//               className: 'bg-purple-500 text-white',
//               style: { borderRadius: '12px' },
//               data: {
//                   image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
//                   name: 'Anna Fali',
//                   title: 'CMO'
//               },
//               children: [
//                   {   expanded:true,
//                       label: 'Sales',
//                       className: 'bg-purple-500 text-white',
//                       style: { borderRadius: '12px' },
//                       children:[
//                         {
//                             label: 'sales-1',
//                             className: 'bg-purple-500 text-white',
//                             style: { borderRadius: '12px' },
//                             children:[
//                                 {
//                                     label: 'cost',
//                                     className: 'bg-purple-500 text-white',
//                                     style: { borderRadius: '12px' }
//                                 }
//                             ]
//                         }
//                       ]
//                   },
//                   {
//                       label: 'Marketing',
//                       className: 'bg-purple-500 text-white',
//                       style: { borderRadius: '12px' }
//                   },
//                   {
//                     label: 'Marketing',
//                     className: 'bg-purple-500 text-white',
//                     style: { borderRadius: '12px' }
//                 }
//               ]
//           },
//           {
//               expanded: true,
//               type: 'person',
//               className: 'bg-teal-500 text-white',
//               style: { borderRadius: '12px' },
//               data: {
//                   image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
//                   name: 'Stephen Shaw',
//                   title: 'CTO'
//               },
//               children: [
//                   {
//                       label: 'Development',
//                       className: 'bg-teal-500 text-white',
//                       style: { borderRadius: '12px' }
//                   },
//                   {
//                       label: 'UI/UX Design',
//                       className: 'bg-teal-500 text-white',
//                       style: { borderRadius: '12px' }
//                   }
//               ]
//           },
//           {
//             label: 'Marketing',
//             className: 'bg-purple-500 text-white',
//             style: { borderRadius: '12px' }
//         },
//         {
//             label: 'Marketing',
//             className: 'bg-purple-500 text-white',
//             style: { borderRadius: '12px' }
//         },
//         {
//             label: 'Marketing',
//             className: 'bg-purple-500 text-white',
//             style: { borderRadius: '12px' }
//         }
//       ]
//   }
// ]);

// const nodeTemplate = (node) => {
//   if (node.type === 'person') {
//       return (
//           <div className="flex flex-column">
//               <div className="flex flex-column align-items-center">
//                   <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
//                   <span className="font-bold mb-2">{node.data.name}</span>
//                   <span>{node.data.title}</span>
//               </div>
//           </div>
//       );
//   }

//   return node.label;
// };

// return (
//   <div className="card overflow-x-auto">
//       <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />

//      {/* {JSON.stringify(groupedData[groupedData[0][0].id])} */}
//   </div>
// )
// }

// export default App;
