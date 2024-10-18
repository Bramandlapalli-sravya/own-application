import styled from "styled-components";
import PasswordGenerator from "./PasswordGenerator";

export const DessertScreen = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  .price-details {
    font-size: 20px;
    font-weight: 500;
    padding: 20px 0 0 10px;

    strong {
      font-size: 15px;
    }
  }

  .cart-title {
    font-size: 26px;
    font-weight: 500;
    align-self: flex-start;
  }
`;

export const EmployeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  table {
    border: 1px solid black;
    border-collapse: collapse;
    thead {
      th {
        border: 1px solid black;
        width: 50%;
      }
    }
    tbody {
      td {
        border: 1px solid black;
        width: 50%;
        .items {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  // employee details modal

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    border-bottom: 1px solid black;
  }

  .body {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .employee_name_header {
    width: 30%;
    height: 100%;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;

    h1 {
      display: flex;
      justify-content: center;
      padding: 10px;
      border-bottom: 1px solid black;
    }
  }

  .employee_details_header {
    width: 70%;
    display: flex;
    flex-direction: column;
    h1 {
      display: flex;
      justify-content: center;
      padding: 10px;
    }
  }

  button {
    margin: 10px;
    padding: 4px;
    border-radius: 5px;
    background-color: #f5f5f5;
    border: 1px solid black;
    cursor: pointer;
  }

  #list_of_names {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

export const TimerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  input {
    width: 10%;
    border: none;
    margin: 10px;
    padding: 4px 8px;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .buttons-list,
  .timer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    margin: 10px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: #f5f5f5;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const PasswordGeneratorStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;

  .container {
    width: 800px;
    height: 500px;
    background-color: #333;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 20px;
    justify-content: space-around;
  }

  .generated-field,
  .character,
  .weight-of-password {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .password-strength {
    display: flex;
    gap: 10px;
    justify-content: space-around;
  }

  button {
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f5f5f5;
    cursor: pointer;
    color: #333;
  }
`;
export const ProgressBarStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .progress {
    width: 60%;
    height: 60px;
    border: 3px solid black;
    border-radius: 100px;
    display: flex;
    position: relative;
    overflow: hidden;

    .progress-text {
      font-size: 20px;
      font-weight: 500;
      position: absolute;
      display: flex;
      justify-content: center;
      height: 100%;
      align-items: center;
      width: 100%;
    }

    .fill {
      height: 100%;
      background-color: green;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      transition: width 0.5s;
    }
  }
`;

export const BoxStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
`;

export const LikeButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  button {
    padding: 8px 20px;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: #f5f5f5;
    cursor: pointer;
    color: gray;
    font-weight: bold;
  }

  button:hover {
    border: 2px solid red;
    color: red;
  }

  .likedbtn,
  .likedbtn:hover {
    border: 2px solid red;
    background-color: red;
    color: white;
  }
`;

export const LoadMoreDataStyles = styled.div`
  .products {
    display: flex;
    flex-direction: column;
  }
`;

export const ThemeStyles = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;

  .dark-theme-color {
    width: 100%;
    height: 100%;

    flex-direction: column;
    background-color: black;
    color: white;
    flex: 1;
  }
`;
