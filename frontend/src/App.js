import React, { useState } from "react";
import { useEffect } from "react";
import OrganizationalChart from "./components/orgChart";
import employees from "./data";
import "../src/App.css";
import employeeService from "./services/employeeDataService";
import AddEmployee from "./components/addEmployee";

const App = () => {
  const [edata, setEdata] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [searchvalue, setSearchvalue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getEmployees = async () => {
    await employeeService
      .employeeData()
      .then((response) => {
        console.log("insode");
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


  const openModal = () => {

    setIsModalOpen(true);

  };

 

  const closeModal = () => {

    setIsModalOpen(false);

  };
  if (!isloading) {
    return "Loading . . .";
  }
  return (
    <>
      <h1 className="title">Organization Chart</h1>
      <div className="add-search">
        <input
          className="search"
          type="search"
          placeholder="search by name"
          value={searchvalue}
        />
        <button className="add-btn" onClick={openModal}>
          Add Employee
        </button>
        {isModalOpen && (
          <AddEmployee

            onCancel={closeModal}
          />
        )}
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
