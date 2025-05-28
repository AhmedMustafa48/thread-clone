import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        height={52}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        py={1}
      >
        <img src="/Threads-logo-black-bg.webp" alt="" width={60} height={40} />
        <Stack
          justifyContent={"center"}
          width={"550px"}
          bgcolor={"aliceblue"}
          zIndex={2}
          height={96}
        >
          <Navbar />
        </Stack>
        <IoMenu size={32} class="image-icon" />
      </Stack>
    </div>
  );
};

export default Header;
