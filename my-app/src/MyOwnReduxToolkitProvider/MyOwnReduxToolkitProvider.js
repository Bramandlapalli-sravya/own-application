import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, createThunk } from "./createSliceCartReducer";

const MyOwnReduxToolkitProvider = () => {
  const dispatch = useDispatch();
  // const addItems = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    dispatch(createThunk());
  }, [dispatch]);

  const { status, items, error } = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(status, "status");
  });
  return (
    <div>
      <div>{status === "loading" && <p>Loading.....</p>}</div>
      <div>
        {status === "success" && (
          <div>
            {items.map((data) => {
              return <div key={data.id}>{data.id}</div>;
            })}
          </div>
        )}
      </div>
      <div>{status === "error" && <p>error : {error}</p>}</div>
    </div>
  );
};

export default MyOwnReduxToolkitProvider;
