import React from 'react';

const Tablerow = (props) => {
    const { paid_by , description , amount , id , created_at} = props;
    return (
        <tr>
            <td> { id } </td>
            <td> { paid_by } </td>
            <td> { description } </td>
            <td> { amount } </td>
            <td> { created_at } </td>
        </tr>
    );

}

export default Tablerow;
