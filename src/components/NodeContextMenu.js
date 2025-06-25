import React from 'react';
import { Menu, Item } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'node-context-menu';

const NodeContextMenu = () => {
  const handleClick = ({ props }) => {
    alert(`Hello World from Node ${props.nodeId}`);
  };

  return (
    <Menu id={MENU_ID}>
      <Item onClick={handleClick}>Hello World</Item>
    </Menu>
  );
};

export default NodeContextMenu;
