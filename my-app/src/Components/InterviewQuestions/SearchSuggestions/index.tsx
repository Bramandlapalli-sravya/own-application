import React, { useCallback, useEffect, useState } from "react";

const SearchSuggestions = () => {

    const [getUsers, setGetUsers] = useState<any>([]);
    const [getValue, setGetValue] = useState('');

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/users/search?q=${getValue}`);
        const data = await response.json();
        setGetUsers(data.users);
    }

    const debounce = (cb, dep) => {
        let timer;
        if (timer) clearTimeout(timer);
        return () => timer = setTimeout(() => {
            cb();
        }, dep);
    }

    const getDataTimer = useCallback(debounce(fetchData, 2000), [getValue]);

    useEffect(() => {
        getDataTimer();
    }, [getUsers])


    const handleChange = (e) => {
        setGetValue(e.target.value)
    }

    return (
        <div>
            <h1>Search Suggestions</h1>
            <input type="text" style={{ border: "2px solid black" }} value={getValue} onChange={handleChange} />
            <div>
                {getUsers.map((user, i) => {
                    return (
                        <div key={user.id}>{user.firstName}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchSuggestions;