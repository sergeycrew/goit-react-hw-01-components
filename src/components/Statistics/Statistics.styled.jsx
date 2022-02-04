import styled from '@emotion/styled';

export const Section = styled.div`
margin: auto;
margin-top: 10px;
margin-bottom: 10px;
height: 150px;
  width: 360px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);`;

export const Header = styled.h2`
margin: 0;
  height: 62px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;`;

export const StatList = styled.ul`
margin: 0;
padding: 0;
display: flex;
justify-content: space-evenly;`;

export const StatItem = styled.li`
list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #${randomColor};
  font-weight: bold;
  border-radius: 5px;
  height: 58px;
  width: 58px;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;

function randomColor() {
    return (Math.floor(Math.random()*16777215).toString(16))};