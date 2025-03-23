import React, { memo } from 'react'
import { StyledLink } from '../styles/StyledComponents';
import { Box, Stack, Typography } from '@mui/material';

const ChatItem = ({avatar=[], name, _id, groupChat=false, sameSender, isOnline, newMessage, index=0, handleDeleteChatOpen}) => {

  return (
    <StyledLink to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>

      <div style={{display: "flex", alignItems: "center", padding: "1rem", gap: "1rem", 
        backgroundColor: sameSender ? "black" : "unset", color: sameSender ? "white" : "unset", 
        justifyContent: "space-between", position: "relative"}}
      >

        {/* Avatar Card */}

        <Stack>
          <Typography>{name}</Typography>

          {newMessage && (
            <Typography>{newMessage.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box sx={{
            backgroundColor: "green",
            position: "absolute",
            top: 0,
            right: 0,
            width: "10px",
            height: "10px",
            borderRadius: "50%"

          }}/>
        )}
      </div>
    </StyledLink>
  )
}

export default memo(ChatItem)
