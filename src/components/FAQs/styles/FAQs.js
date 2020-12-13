import styled from 'styled-components/macro';


 export const Frame = styled.div `
  margin:70px 45px;
  display:flex;
  flex-direction: column;
  justify-content:center;
 `;

export const Title = styled.h1 `
  margin: 0 0 .4em;
  text-align: center;
  font-size: 3.125rem;
  line-height: 1.1;
`;

export const Accordion = styled.ul `
    width: 75%;
    margin: 2em auto;
    padding:0px;
`;

export const Item = styled.li `
  margin-bottom:8px;
  list-style-type:none;
`;
export const ItemT = styled.a `
  display: block;
  cursor: pointer;
  padding: .8em 2.2em .8em 1.2em;
  margin-bottom:1px;
  font-weight: 400;
  position: relative;
  border: 0;
  background: #303030;
  font-size: 1.625rem;
  img {
    position: absolute;
    right: 1em;
    top: 30%;
    height: 1em;
    width: 1em;
    filter:invert(100%);
  }
`;

export const ItemP = styled.p `
  display: inline-block;
  background: #303030;
  max-width:100%;
  padding: 1.2em;
  font-size: 1.625rem;
  margin:0;
`;

