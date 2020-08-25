import React, { useContext } from 'react'
import { DataContext } from '../assets/js/DataContext'
import '../assets/css/Table.css'

function Table() {

    const { value2 } = useContext(DataContext);
    const [sortedData] = value2;
    return (
        <div className="table">
            <table>
                <tbody>
                    {sortedData.map(({ name, cases }) => (
                        <tr key={name}>
                            <td><strong>{name}</strong></td>
                            <td>
                                <strong>{cases}</strong>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
