import React from 'react';

const TableRowAdmissions = (props) => {
    const { id, course_id, registration_number, student_name , email , mobile_number , school_college , stream , father_mother_name , parent_mobile_number , permanent_address , total_fee , advance_payment, total_installments , referred_by , dob , created_at } = props;
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