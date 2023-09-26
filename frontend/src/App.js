import React, { useState } from "react";
import { useEffect } from "react";
import OrganizationalChart from "./components/orgChart";
import "../src/App.css";
import employeeService from "./services/employeeDataService";
import AddEmployee from "./components/addEmployee";
import { Button, Modal, Form } from "react-bootstrap";
import { Dropdown } from 'primereact/dropdown';


const App = () => {
  const [edata, setEdata] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [searchvalue, setSearchvalue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);

  const toggleAddUserModal = () => {
    setAddUserModalOpen((prevIsOpen) => !prevIsOpen);
  };

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

  const [selectedCountry, setSelectedCountry] = useState(null)
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };


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
        <button className="add-btn" onClick={() => setAddUserModalOpen(true)}>
          Add Employee
        </button>

        <div>
          <Modal show={isAddUserModalOpen} onHide={toggleAddUserModal}>
            <Modal.Header closeButton>
              <Modal.Title>New User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group controlId="Name">
                  <Form.Label>Name:</Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    // value={newUser.last_name}

                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    // value={newUser.email}

                    required
                  />
                </Form.Group>

                <Form.Group controlId="contact">
                  <Form.Label>Contact:</Form.Label>

                  <Form.Control
                    type="text"
                    name="contact"
                    // value={newUser.contact_no}

                    required
                  />
                </Form.Group>

                <Form.Group controlId="designation">
                  <Form.Label>Designation:</Form.Label>

                  <Form.Control
                    type="text"
                    name="designation"
                    // value={newUser.designation}

                    required
                  />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Dropdown
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.value)}
                  options={countries}
                  optionLabel="name"
                  placeholder="Select a Country"
                  filter
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                  className="w-full md:w-14rem"
                />
            <Modal.Footer>
              <Button className="buttons">Submit</Button>
            </Modal.Footer>
          </Modal>
          
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
