import React, { useState } from 'react';
import './App.css';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Component1() {
    const actions = [
        { name: 'Action 1', icon: <DeleteIcon /> },
        
      ];
      
    return(<SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
    >
    {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        />
    ))}
    </SpeedDial>
);
}
