import React, { createContext, useContext, useState} from "react";
import { Frame, Title, Accordion, Item, ItemT, ItemP} from './styles/FAQs';

const ToggleContext = createContext();
export default function FAQs({children, ...restprops}) {
  return (
    <Frame {...restprops}>{children}</Frame>
    );
}

FAQs.Title = ({children}) => {
  return (
    <Title>{children}</Title>
  );
};

FAQs.Accordion = ({children, ...restprops}) => {
  return (
  <Accordion {...restprops}>{children}</Accordion>
  );
};
FAQs.Item = function FAQsItem({children, ...restprops}) {
    const [toggle, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{toggle, setToggleShow}}>
  <Item {...restprops}>{children}</Item>
  </ToggleContext.Provider>
  );
};
FAQs.ItemT = function FAQsItemT({children}) {
  const {toggle, setToggleShow} = useContext(ToggleContext);
  return (
    <ItemT onClick={()=>setToggleShow(!toggle)}>{children}
    {toggle ? <img src='\images\icons\close.png' alt='open'></img> : <img src='\images\icons\add.png' alt='closed'></img>}
    </ItemT>
  );
};
FAQs.ItemP = function FAQsItemP({children}) {
  const {toggle} = useContext(ToggleContext);
  return ( 
  
    toggle ? <ItemP>{children}</ItemP> : null
  );
};