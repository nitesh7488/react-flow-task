import React from 'react';
import { Handle, Position } from 'reactflow';
import { ContextMenuTrigger } from 'react-contextmenu';

const BlockA = ({ data }) => (
  <ContextMenuTrigger id="node-context-menu" collect={() => ({ nodeId: data.id })}>
    <div className="block-a">
      <div className="block-icon">A</div>
      {data.label}
      <Handle
        type="source"
        position={Position.Right}
        id="a-output"
        className="connection-handle"
      />
    </div>
  </ContextMenuTrigger>
);

export default BlockA;