import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px",
        }}
      >
        <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with email" : "Register with email"}
          </Typography>
          {login ? null : (
            <TextField variant="outlined" placeholder="Enter your username" />
          )}
          <TextField variant="outlined" placeholder="Enter your email" />
          <TextField variant="outlined" placeholder="Enter your password" />
          <Button
            size="large"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "white",
              fontSize: "1rem",
              ":hover": {
                bgcolor: "blue",
                cursor: "pointer",
              },
            }}
          >
            {login ? "LOGIN" : "SIGN UP"}
          </Button>

          <Typography
            variant="subtitle2"
            fontSize={"1.3rem"}
            alignSelf={"center"}
          >
            {login ? "Dont't have an account" : `Already have an account?{" "}`}
            <span className="login-link" onClick={toggleLogin}>
              {login ? "Sign up" : "Login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
