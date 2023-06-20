
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import './styles.css';

export default function ImageAvatar() {
  return (
    <div className="container">
      <Stack direction="row" spacing={2} className="avatar-container">
        <Avatar
          alt="Remy Sharp"
          src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          className="avatar-image"
        />
        <h6 className="avatar-name">Justin Pot</h6>
      </Stack>
    </div>
  );
}

