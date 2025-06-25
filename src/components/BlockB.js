import React from 'react';
import { Handle, Position } from 'reactflow';
import { contextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'node-context-menu';

const BlockB = ({ data }) => {
  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log('handleContextMenu event:', event);
    contextMenu.show({
      id: MENU_ID,
      event,
      props: { nodeId: data.id },
    });
  };

  return (
    <>
      <div className="block-b" onContextMenu={handleContextMenu}>
        <div className="block-icon">B</div>
        {data.label}
        <Handle
          type="target"
          position={Position.Left}
          id="b-input"
          className="connection-handle"
        />
      </div>
    </>
  );
};

export default BlockB;
