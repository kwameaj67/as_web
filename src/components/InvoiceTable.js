import React from 'react'
import './table.css'

const InvoiceTable = ({data,show}) => {
    return (
        <div className={show === true ? "t_content" : "t_content hide"}>
        <table> 
            <thead>
                <tr className="titles">
                    <th>InvNumber</th>
                    <th>InvSum</th>
                    <th>Currency</th>
                    <th>CorpName</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <>
                                <tr key={data.id} className="text">
                                    <td>{item.invNumber}</td>
                                    <td>{item.invSum}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.corpName}</td>
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

export default InvoiceTable
