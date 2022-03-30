import React from 'react'
import './table.css'

const CustomerTable = ({data}) => {
    return (
        <div className="t_content">
        <table>
            <thead>
                <tr className="titles">
                    <th>CorpName</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <>
                                <tr key={data.id} className="text">
                                    <td>{item.corpName}</td>
                                    <td>{item.address}</td>
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

export default CustomerTable
