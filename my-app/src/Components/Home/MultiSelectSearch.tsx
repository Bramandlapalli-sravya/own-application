import React, { useEffect, useState } from "react";
import axios from "axios";

const MultiSelectSearch = () => {

    const [search, setSearch] = useState<string | []>([]);
    const [searchSuggestions, setSearchSuggestions] = useState<any>([]);
    const [selectedUsers, setSelectedUsers] = useState<any>([]);
    const [selectedUserSet, setSelectedUserSet] = useState<any>(new Set()); // adding the selected users to a set to avoid duplicates

    useEffect(() => {
        const debounce = setTimeout(() => {
            const getData = async () => {
                const response = await axios.get(`https://dummyjson.com/users/search?q=${search}`);
                setSearchSuggestions(response.data.users);
                console.log(response.data.users);
            }
            getData();
        }, 500);

        return (
            () => clearTimeout(debounce)
        )
    }, [search])

    const handleSelectUser = (user) => {
        if (!selectedUserSet.has(user.id)) {
            setSelectedUsers([...selectedUsers, user]);
            setSelectedUserSet(prevSet => new Set(prevSet).add(user.id)); // Adding selected id if its not already present as set takes the unique id only as values
        }
        setSearch(''); // Clear search input
        setSearchSuggestions([]); // Clear suggestions
    };

    const handleRemove = (user) => () => {
        setSelectedUsers((selectedUser) => selectedUser.filter(selectedUser => selectedUser.id !== user.id));  // Removing the user from the selected users
        setSelectedUserSet(prevSet => {
            const newSet = new Set(prevSet); // Create a new copy of the Set
            newSet.delete(user.id); // Remove the user ID
            return newSet;
        }); // Removing the user from the set
    }

    return (
        <div className="p-4">
            <div className="border-2 border-black p-2 rounded-lg" >
                <ul style={{ listStyle: "unset", paddingLeft: 20 }}>
                    {selectedUsers.map((user) => {
                        return (
                            <div className="flex">
                                <li>{user.firstName}{user.lastName}</li>
                                <div className="ps-2" onClick={handleRemove(user)}>X</div>
                            </div>
                        )
                    })}
                </ul>
                <input type="text" placeholder="Search" className="outline-none" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <ul style={{ listStyle: 'unset', paddingLeft: 20 }}>
                {searchSuggestions.map((user, index) => {
                    return (
                        <li key={user.id} onClick={() => handleSelectUser(user)} >{user.firstName} {user.lastName}</li>
                    )
                })}
            </ul>
        </div >
    )
}

export default MultiSelectSearch;