import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4b266;
  overflow-x: hidden;
  user-select: none;
`;

export const ImageContainer = styled.div<{ value: number }>`
  display: flex;
  align-items: center;
  min-width: 100%;
  min-height: 200px;
  background-color: #e2efde;
  justify-content: center;
  transform: translateX(${({ value }) => value * -100}%);
  transition: all 0.5s ease-in-out;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageCont = styled.img`
  width: 50%;
  height: 100px;
  object-fit: contain;
  background-color: #e2efde;
`;

export const ButtonToLeft = styled.button`
  position: absolute;
  width: 10%;
  height: 100%;
  left: 0;
  font-size: 30px;
  border-radius: 0 16px 16px 0;
  background-color: none;
  overflow: hidden;
  border: 1px solid #9b7e46;
  transition: background-color 0.3s ease-in-out;

  span {
    color: #9b7e46;
    background-color: transparent;
  }

  &:hover {
    background-color: #9b7e46;
    span {
      color: #e2efde;
    }
  }
`;

export const ButtonToRight = styled.button`
  position: absolute;
  width: 10%;
  height: 100%;
  right: 0;
  background-color: none;
  border: 1px solid #9b7e46;
  font-size: 30px;
  border-radius: 16px 0 0 16px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;

  span {
    color: #9b7e46;
    background-color: transparent;
  }

  &:hover {
    background-color: #9b7e46;
    span {
      color: #e2efde;
    }
  }
`;
