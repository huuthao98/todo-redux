// import React, { useState } from "react";
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import { Button, Menu } from "antd";
// import { useSelector } from "react-redux";
// import { changeMenuSelector } from "../../redux/selector";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <ContainerOutlined />),
//   getItem("Navigation One", "sub1", <MailOutlined />, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//   ]),
//   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 11", "11"),
//       getItem("Option 12", "12"),
//     ]),
//   ]),
// ];
// const MenuApp = () => {
//   const changeMenu = useSelector(changeMenuSelector);

//   return (
//     <div
//       style={{
//         width: 256,
//       }}
//     >
    
//       <Menu
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["sub1"]}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={changeMenu.show}
//         items={items}
//       />
//     </div>
//   );
// };
// export default MenuApp;
