import React from 'react'
import './table.css'

const EmployeeTable = ({ data, show }) => {
    return (
        <div className={show === true ? "t_content" : "t_content hide"}>
            <table>
                <thead>
                    <tr className="titles">
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <tr key={data.id} className="text">
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable
