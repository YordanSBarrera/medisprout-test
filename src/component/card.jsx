import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export  const  CardSimple=(name,email,body)=> {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
         {body}
        </Typography>
      </CardContent>
     
    </Card>
  );
}