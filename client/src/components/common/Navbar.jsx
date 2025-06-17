import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";

const Navbar = () => {
  const { darkMode } = useSelector((state) => state.service);

  const _300 = useMediaQuery("(min-width:300px)");
  const dispatch = useDispatch();
  const handleAddPost = () => {
    dispatch(addPostModal(true));
  };
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <FaArrowLeft
          size={_300 ? 32 : 24}
          className="image-icon"
          color={darkMode ? "white" : "black"}
        />
        <Link to="/" className="link">
          <GoHomeFill
            size={_300 ? 32 : 24}
            color={darkMode ? "white" : "black"}
          />
        </Link>
        <Link to="/search" className="link">
          <IoIosSearch
            size={_300 ? 32 : 24}
            color={darkMode ? "white" : "black"}
          />
        </Link>
        <Link className="link">
          <TbEdit
            size={_300 ? 32 : 24}
            onClick={handleAddPost}
            color={darkMode ? "white" : "black"}
          />
        </Link>
        <Link className="link">
          <CiHeart size={_300 ? 32 : 24} color={darkMode ? "white" : "black"} />
        </Link>
        <Link to={"/profile/threads/1"} className="link">
          <RxAvatar
            size={_300 ? 32 : 24}
            color={darkMode ? "white" : "black"}
          />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
