import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        width={"70%"}
        height={"70%"}
        justifyContent={"space-between"}
        p={3}
        borderBottom={"2px solid gray"}
        my={5}
        mx={"auto"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
          <Avatar src="" alt="AM" />
          <Typography color={"GrayText"}>Start a thread...</Typography>
        </Stack>
        <Button
          size="medium"
          sx={{
            bgcolor: "gray",
            color: "aliceblue",
            ":hover": {
              bgcolor: "black",
              cursor: "pointer",
            },
          }}
        >
          POST
        </Button>
      </Stack>
    </>
  );
};

export default Input;
