import React, { useState, useEffect } from 'react'
import './App.css';
import EmployeeTable from './components/EmployeeTable'
import CustomerTable from './components/CustomerTable'
import InvoiceTable from './components/InvoiceTable'

function App() {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCustomers, setCustomers] = useState(false);
  const [showInvoices, setInvoices] = useState(false);
  const [showEmployee, setEmployees] = useState(false);

  const getData = async () => {
    setLoading(true);
    var base_url = "https://remote-api.azurewebsites.net"
    var request_url = `${base_url}/api/company/all`
    const request = await fetch(request_url);
    const response = await request.json();
    const data = response
    setCompany(data);
    setLoading(false);
    console.log(data)
  }
  useEffect(() => {
    getData()
  }, [])
  const toggleEmployees = () => {
    setEmployees(true)
    setCustomers(false)
    setInvoices(false)
  }
  const toggleCustomers = () => {
    setCustomers(true)
    setEmployees(false)
    setInvoices(false)
  }
  const toggleInvoices = () => {
    setInvoices(true)
    setEmployees(false)
    setCustomers(false)
  }

  return (
    <div className="app">
      {/* <pre>{JSON.stringify(company[0].customers, undefined, 2)}</pre> */}
      <div className="area">
        <div className="group_of_btns">
          <button onClick={toggleEmployees}>Get all Employees</button>
          <button onClick={toggleCustomers}>Get all Customers</button>
          <button onClick={toggleInvoices}>Get all Invoices</button>
        </div>
        <div className="table_area">
          {loading === false && showEmployee ?
            <EmployeeTable data={company[0].employees} show={showEmployee} />
            : null
          }
          {loading === false && showCustomers ?
            <CustomerTable data={company[0].customers} show={showCustomers} />
            : null
          }
          {loading === false && showInvoices ?
            <InvoiceTable data={company[0].invoices} show={showInvoices} />
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
