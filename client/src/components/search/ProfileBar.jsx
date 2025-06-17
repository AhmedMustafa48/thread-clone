import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProfileBar = () => {
  const { darkMode } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        width={_700 ? "100%" : "90%"}
        borderRadius={"15px"}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={_700 ? "1rem" : "0.9rem"}
            >
              Ahmed-m
            </Typography>
            <Typography
              variant="caption"
              fontSize={_700 ? "1.1rem" : "0.75rem"}
              color={"gray"}
            >
              this is bio
            </Typography>
            <Typography variant="caption" fontSize={_700 ? "1rem" : "0.9rem"}>
              3 followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            borderRadius: "10px",
            color: darkMode ? "whitesmoke" : "black",
            p: 2,
            height: 40,
          }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
};

export default ProfileBar;
