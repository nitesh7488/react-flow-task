import React from 'react';
import { initialBlocks } from '../constants/blocks';

const BlockPanel = () => (
  <div className="sidebar">
    <h3>Blocks</h3>
    <div className="blocks">
      {initialBlocks.map((block) => (
        <div
          key={block.id}
          className={`draggable-block ${block.type === 'blockA' ? 'block-a' : 'block-b'}`}
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData('application/reactflow', block.type);
            event.dataTransfer.effectAllowed = 'move';
            event.currentTarget.style.opacity = '0.5';
          }}
          onDragEnd={(event) => {
            event.currentTarget.style.opacity = '1';
          }}
        >
          {block.label}
        </div>
      ))}
    </div>
  </div>
);

export default BlockPanel;