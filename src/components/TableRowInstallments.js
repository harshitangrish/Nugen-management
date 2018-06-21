import React from 'react';

const TableRowInstallments = (props) => {
    const { paid_by , description , amount , id , created_at} = props;
    return (
        <tr>
            <td> { id } </td>
            <td> { paid_by } </td>
            <td> { description } </td>
            <td> { amount } </td>
            <td> { created_at } </td>
            <td> { id } </td>
            <td> { paid_by } </td>
            <td> { description } </td>
            <td> { paid_by } </td>
        </tr>
    );

}

export default TableRowInstallments;