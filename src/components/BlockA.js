import React from 'react';
import { Handle, Position } from 'reactflow';
import { useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'node-context-menu';

const BlockA = ({ data }) => {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  const handleContextMenu = (event) => {
    event.preventDefault();
    show(event, { props: { nodeId: data.id } });
  };

  return (
    <>
      <div className="block-a" onContextMenu={handleContextMenu}>
        <div className="block-icon">A</div>
        {data.label}
        <Handle
          type="source"
          position={Position.Right}
          id="a-output"
          className="connection-handle"
        />
      </div>
    </>
  );
};

export default BlockA;
