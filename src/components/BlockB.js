import React from 'react';
import { Handle, Position } from 'reactflow';
import { useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'node-context-menu';

const BlockB = ({ data }) => {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  const handleContextMenu = (event) => {
    event.preventDefault();
    show(event, { props: { nodeId: data.id } });
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
