import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

const NodeContextMenu = () => (
  <ContextMenu id="node-context-menu">
    <MenuItem onClick={(_, { nodeId }) => alert(`Hello World from Node ${nodeId}`)}>
      Hello World
    </MenuItem>
  </ContextMenu>
);

export default NodeContextMenu;