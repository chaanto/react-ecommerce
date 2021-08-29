import styled from "styled-components";
import CustomButton from '../custom-button/custom-button-component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  text-align: center;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 70%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 21em;
  height: 24em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  /* margin-bottom: 5px; */
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  /* width: 100%; */
  height: 10%;
  /* align-items: center; */
  /* display: flex; */
  justify-content: space-between;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const NameContainer = styled.span`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
`;

export const PriceContainer = styled.span`
  width: 100%;
  text-align: center;
`;