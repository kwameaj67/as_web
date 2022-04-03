import React, { useState, useEffect } from 'react'
import './App.css';
import EmployeeTable from './components/EmployeeTable'
import CustomerTable from './components/CustomerTable'
import InvoiceTable from './components/InvoiceTable'

function App() {
  const [employees, setEmployee] = useState([]);
  const [customers, setCustomer] = useState([]);
  const [invoices, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showCustomers, setCustomers] = useState(false);
  const [showInvoices, setInvoices] = useState(false);
  const [showEmployee, setEmployees] = useState(false);
  var base_url = "https://remote-api.azurewebsites.net"

  const getEmployeeData = async () => {
    setLoading(true);
    var request_url = `${base_url}/api/employee`
    const request = await fetch(request_url);
    const response = await request.json();
    setEmployee(response.employees)
    setLoading(false);
  }
  const getCustomerData = async () => {
    setLoading(true);
    var request_url = `${base_url}/api/customer`
    const request = await fetch(request_url);
    const response = await request.json();
    setCustomer(response.customers)
    setLoading(false);
  }
  const getInvoiceData = async () => {
    setLoading(true);
    var request_url = `${base_url}/api/invoice`
    const request = await fetch(request_url);
    const response = await request.json();
    setInvoice(response.invoices)
    setLoading(false);
  }


  const toggleEmployees = () => {
    getEmployeeData()
    setEmployees(true)
    setCustomers(false)
    setInvoices(false)
  }
  const toggleCustomers = () => {
    getCustomerData()
    setCustomers(true)
    setEmployees(false)
    setInvoices(false)
  }
  const toggleInvoices = () => {
    getInvoiceData()
    setInvoices(true)
    setEmployees(false)
    setCustomers(false)
  }
  useEffect(() => {
  }, [])
  return (
    <div className="app">
      {/* <pre>{JSON.stringify(employees, undefined, 2)}</pre> */}
      <div className="area">
        <div className="group_of_btns">
          <button onClick={toggleEmployees}>Get all Employees</button>
          <button onClick={toggleCustomers}>Get all Customers</button>
          <button onClick={toggleInvoices}>Get all Invoices</button>
        </div>
        <div className="table_area">
          {
            loading === true && <p>Loading data...</p>
          }
          {loading === false && showEmployee === true ?
            <EmployeeTable data={employees} show={showEmployee} />
            : null
          }
          {loading === false && showCustomers === true ?
            <CustomerTable data={customers} show={showCustomers} />
            : null
          }
          {loading === false && showInvoices === true ?
            <InvoiceTable data={invoices} show={showInvoices} />
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
