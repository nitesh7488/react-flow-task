import React from 'react';
import { Handle, Position } from 'reactflow';
import { ContextMenuTrigger } from 'react-contextmenu';

const BlockB = ({ data }) => (
  <ContextMenuTrigger id="node-context-menu" collect={() => ({ nodeId: data.id })}>
    <div className="block-b">
      <div className="block-icon">B</div>
      {data.label}
      <Handle
        type="target"
        position={Position.Left}
        id="b-input"
        className="connection-handle"
      />
    </div>
  </ContextMenuTrigger>
);

export default BlockB;