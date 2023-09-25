import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import "../../src/App.css";

export default function AddEmployee() {

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














  return (
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Employee Id' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Employee Name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Position name' />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Phone' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Email' />
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Location' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Department' />
        </MDBCol>
      </MDBRow>

      <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />

      



      <MDBBtn className='mb-4' type='submit' block>
        Add Employee
      </MDBBtn>
    </form>
  );
}