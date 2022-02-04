import styled from '@emotion/styled';


export const Card = styled.div`
margin: auto;
height: 410px;
  width: 360px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Description = styled.div`
padding: 30px;
`;

export const Avatar = styled.img`
display: block;
width: 200px;
height: 200px;
border-radius: 70%;
margin: auto;
`;

export const Name = styled.p`
text-align: center;
margin: 0px 0px 9px 0px;
font-weight: 500;
`;

export const Tag = styled.p`
text-align: center;
  margin: 0px 0px 11px 0px;
  font-size: 13px;
  color: #8f8f8f;
`;

export const Location = styled.p`
text-align: center;
  margin: 0;
  font-size: 13px;
  color: #8f8f8f;
`;

export const Statistics = styled.ul`
display: flex;
  padding: 0;
  margin: 0;
`;
export const StatisticItem = styled.li`
list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;
  width: calc(100% / 3);
  height: 100%;
  border-top: 1px solid;
  border-color: rgb(216, 216, 216);
  font-size: 11px;
  padding: 12px 0px;`;

// export const Span = styled.span`
// // display: block;

// // padding: 0;
// // margin: auto;
// `;

export const Label = styled.span`
color: #8f8f8f;
  margin-bottom: 5px;
`;


export const Quantity = styled.span`
font-weight: 500;
  font-size: 13px;
`;
