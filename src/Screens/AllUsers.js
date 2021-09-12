import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import {useSelector} from "react-redux";

function AllUsers({allUserArray, deleteHandler}) {

    const allStateObject = useSelector((state) => state);
    let { login: loginData, user } = allStateObject;

    return (
        <>
            <table className="table table-striped table-condensed">
                <thead>
                <tr className="text-center">
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type Of User</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {allUserArray.map((user, index) => (
                    <tr className="text-center" key={user.unique_id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.type_of_user}</td>
                        <td>
                            {" "}
                            <DropdownButton id="dropdown-basic-button" title="Options" size="sm">
                                <Dropdown.Item onClick={() => deleteHandler(user.unique_id, user.type_of_user, loginData)}
                                               href="#/action-1">Delete User</Dropdown.Item>
                                <Dropdown.Item href={`/get-single/user/${user.unique_id}`}>Edit User</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default AllUsers;