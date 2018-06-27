import React from 'react';

const TableRowAdmissions = (props) => {
    const { id, course_id, registration_number, student_name , email   ,  total_fee , advance_payment, total_installments ,  created_at } = props;
    return (
        <tr>
            <td> { id } </td>
            <td> { registration_number } </td>
            <td> { student_name } </td>
            <td> { email } </td>
            <td> { course_id } </td>
            <td> { total_fee } </td>
            <td> { advance_payment } </td>
            <td> { total_installments } </td>
            <td> { created_at } </td>
            <td> <div className="btn btn-success">View Details</div></td>
        </tr>
    );

}

export default TableRowAdmissions;