import styled from 'styled-components/macro';




export const Item = styled.div `
  max-width:100%;
  display: flex;
  flex-direction: ${({direction}) => direction};
  max-height: 380px;
  justify-content:space-between;
  align-items: center;
  border-bottom:8px solid #222;
  padding:65px 45px;
  
`;
export const Text = styled.div `
  color: #fff;
  max-width: 43%;
  margin: 0px 25px 0px 75px;
  font-size: 1.625rem;
`;
export const Title = styled.h1 `
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: .5rem;
  font-weight: bold;
  font-family: 'Netflix Sans','Helvetica Neue','Helvetica','Arial','sans-serif';
`;
export const Image = styled.img `
  max-width: 40%;
  max-height: 30%;
  margin: 0px 65px
`;

export const SubTitle = styled.h2 `
  margin: .75em 0em;
  font-size: 1.625rem;
  font-weight: 400;
`;
export const Container = styled.div `
  max-width:100vw;
  background-color: #000;
`;