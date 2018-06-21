import React from 'react';

const TableRowAdmissions = (props) => {
    const { id, course_id, registration_number, student_name , email  , school_college ,  total_fee , advance_payment, total_installments , dob , created_at } = props;
    return (
        <tr>
            <td> { id } </td>
            <td> { registration_number } </td>
            <td> { student_name } </td>
            <td> { dob } </td>
            <td> { email } </td>
            <td> { school_college } </td>
            <td> { course_id } </td>
            <td> { total_fee } </td>
            <td> { advance_payment } </td>
            <td> { total_installments } </td>
            <td> { created_at } </td>

        </tr>
    );

}

export default TableRowAdmissions;