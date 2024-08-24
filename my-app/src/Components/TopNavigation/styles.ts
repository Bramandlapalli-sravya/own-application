import styled from "styled-components";

interface TopNavigationProps {
  isSelected?: boolean;
}

export const TopNavigationStyles = styled.div<TopNavigationProps>`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rebeccapurple;
    color: white;
    padding: 8px 20px;
    gap: 20px;
  }

  .sub-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .sub-items {
    display: flex;
    gap: 10px;

    .item,
    h1 {
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      color: white;
      margin: 0;
      text-decoration: none;
      padding: 2px 8px;

      /* {
        background-color: white;
        color: rebeccapurple;
      } */
    }
  }

  .item:hover {
    background-color: rgb(102, 80, 153);
    color: white;
    border-radius: 100px;
  }

  .selected {
    border-radius: 100px;
    background-color: white;
    padding: 2px 8px;
    h1 {
      color: rebeccapurple !important;
    }
  }

  .selected:hover {
    background-color: white !important;
  }

  .profile-details {
    display: flex;
    align-items: center;
    gap: 10px;

    .user-name {
      font-size: 16px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 400px) {
    .header {
      padding: 10px;
      overflow: auto;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const PageStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 60px;
`;
