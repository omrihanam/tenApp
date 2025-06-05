import React from 'react';
import  '../styles/Sidebar.css';
import { ProductTypeStat } from '../types/product';
import { ListGroup} from 'react-bootstrap';


interface Props {
  types: ProductTypeStat[];
  selectedType: string | null;
  onSelect: (type: string) => void;
}

function Sidebar({ types, selectedType, onSelect }: {
  types: { type: string; count: number }[];
  selectedType: string | null;
  onSelect: (type: string) => void;
}) {
  return (
    <aside className="p-3 border-end bg-light" style={{ width: '250px' }}>
      <h5>Product Types</h5>
      <ListGroup>
        {types.map(type => (
          <ListGroup.Item
            key={type.type}
            active={selectedType === type.type}
            onClick={() => onSelect(type.type)}
            style={{ cursor: 'pointer' }}
          >
            {type.type} ({type.count})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </aside>
  );
}

export default Sidebar;
