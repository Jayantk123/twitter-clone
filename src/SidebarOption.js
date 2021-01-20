import React from 'react'
import './SidebarOption.css';
function SidebarOption({ active , text , Icon}) {
    return (
      <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
   
     {/*making sidebar icon active....showing color when the page is open*/}
      <Icon />
      <h2>{text}</h2>
    </div>
    );
}

export default SidebarOption;
