import React from 'react';

const StudentRow = (props) => {
    const { id , student_name , course , created_at} = props;
    return (
        <tr>
            <td> { id } </td>
            <td> { student_name } </td>
            <td> { course } </td>
            <td> { created_at} </td>
        </tr>
    );

}

export default StudentRow;