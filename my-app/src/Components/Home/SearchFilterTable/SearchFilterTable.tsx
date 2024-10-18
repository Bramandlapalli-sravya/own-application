import React from "react";
import { useEffect, useState } from "react";

const SearchFilterTable = ({ handleClick }) => {
    const [tableData, setTableData] = useState([]);
    const [name, setName] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const responseData = await response.json();
        setTableData(responseData);

        // const firstObj = tableData[0];
    };

    useEffect(() => {
        if (handleClick) {
            const filter = tableData.filter((username) => {
                return username.username.toLowerCase().includes(handleClick.toLowerCase());
            });
            setName(filter);
        } else {
            setName(tableData)
        }
    }, [handleClick, tableData]);

    useEffect(() => {
        fetchData();
    }, []);
    //   console.log(tableData, "data");

    console.log(handleClick, "handleclicke", name, 'filter');

    return (
        <table>
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone Number</th>
            </tr>
            {name.map((data) => {
                return (
                    <tr>
                        <td>{data.username}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.website}</td>
                        <td>{data.phone}</td>
                    </tr>
                );
            })}
        </table>
    );
};

export default SearchFilterTable;
