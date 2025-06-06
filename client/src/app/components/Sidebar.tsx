import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

function Sidebar({
  types,
  selectedType,
  onSelect,
}: {
  types: { type: string; count: number }[];
  selectedType: string | null;
  onSelect: (type: string) => void;
}) {
  return (
    <Box
      component="aside"
      sx={{
        width: '250px',
        p: 2,
        borderRight: '1px solid #ccc',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Product Types
      </Typography>
      <List>
        {types.map((typeObj) => (
          <ListItem disablePadding key={typeObj.type}>
            <ListItemButton
              selected={selectedType === typeObj.type}
              onClick={() => onSelect(typeObj.type)}
            >
              <ListItemText
                primary={`${typeObj.type} (${typeObj.count})`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
