import React, { useState, useEffect } from "react";

function UserTable() {

    const [users, setUsers] = useState(null);

    useEffect(()=>{

        async function getData(){

            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await res.json();

            setUsers(result);
        }

        getData();

    },[])


    return ( users && 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>

            {users.map(user=>( <tr key={users.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
            </tr>))}

            </tbody>
    </table>)
   
}

export default UserTable;
