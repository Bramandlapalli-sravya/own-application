import styled from "styled-components";

export const StringsContainerStyles = styled.div`
  width: 100%;
  height: 100%;

  .strings-container {
    width: 75%;
    height: 5%;
    background-color: rgb(254 249 195);
    position: relative;

    .heading {
      top: -20px;
      position: absolute;
      background-color: black;
      color: white;
      padding: 4px 8px;
      font-size: 12px;
      left: 20px;
    }
    .input-text-value {
      padding: 8px;
    }
  }
`;
