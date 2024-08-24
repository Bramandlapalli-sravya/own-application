import styled from "styled-components";

export const DessertScreen = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex:1;

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
