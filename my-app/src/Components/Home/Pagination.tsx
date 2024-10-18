import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pagination() {


  interface Users {
    id: number;
    username: string;
    image: string;
  }

  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const pageItems = 5;

  function fetchData() { // using async and await we can directly get the data from the api
    // without async and await I need to use .then() to get the data from the api response
    const response = axios.get("https://dummyjson.com/users").then((res) => { setData(res.data.users); console.log(res.data.users) });

  }
  useEffect(() => {
    fetchData();
  }, [])

  const startIndex = (page - 1) * pageItems;
  const pageData = data.slice(startIndex, startIndex + pageItems);


  return (
    <div>
      {pageData.map((user: Users) => {
        return (
          <div key={user.id}>
            <div>Name: {user.username}</div>
            <img src={user.image} alt="image"></img>
          </div>
        )
      })}
      <div className="flex items-center gap-2">
        <span onClick={() => setPage(1)}>Start</span>
        {[...Array(data.length / pageItems)].map((num, i) => {
          return (
            <div key={data.id} className={`border p-3 cursor-pointer ${page === i + 1 && 'text-sky-400'}`} onClick={() => setPage(i + 1)}>{i + 1}</div>
          )
        })}
        <span onClick={() => setPage(page + 1)}>End</span>
      </div>
    </div>
  )
}