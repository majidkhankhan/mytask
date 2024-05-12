"use client";
import * as React from "react";

import { SVG } from "../icon";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import Link from "next/link";

export default function Header(props: any) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Box sx={{ py: 2, px: 0, borderBottom: "1px solid #C9C9C9" }}>
        <Container maxWidth="xl">
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link href="/">
              <SVG.Logo />
            </Link>
            <Paper
              elevation={0}
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                borderRadius: "30px",
                border: "1px solid #C9C9C9",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                defaultValue="all"
                onChange={handleChange}
                displayEmpty
                sx={{
                  width: "85px",
                  borderRight: "1px solid #C9C9C9",
                  borderRadius: "0",
                  "& fieldset": {
                    display: "none",
                  },
                }}
              >
                <MenuItem value={""} sx={{ display: "none" }}>
                  All
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find anything to everything"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <SVG.Audio />
                <SVG.Camara />
                <Avatar
                  src="/user.png"
                  sx={{
                    width: "52px",
                    height: "52px",
                    border: "1px solid #003DCA",
                  }}
                />
              </Stack>
            </Paper>
            <Box sx={{ ms: "auto" }}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <IconButton sx={{ boxShadow: "0px 1px 3px 0px #00000040" }}>
                  <SVG.Globe />
                </IconButton>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ whiteSpace: "nowrap", height: "56px" }}
                >
                  AI Tools
                </Button>
                <Stack
                  direction={"row"}
                  spacing={0}
                  alignItems={"center"}
                  sx={{
                    background:
                      "linear-gradient(266.62deg, #0047EB 3.9%, #0032A4 95.12%)",
                    padding: "8px 8px",
                    borderRadius: "90px",
                    whiteSpace: "nowrap",
                    boxShadow: "0px 1px 3px 0px #00000040",
                    "& button": {
                      padding: "8px 24px",
                      textTransform: "capitalize",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "90px",
                      color: "#fff",
                    },
                  }}
                >
                  <Button
                    disableRipple
                    sx={{
                      background:
                        "linear-gradient(78.78deg, #F800C0 6.17%, #FE8A70 94.71%)",
                      padding: "8px 15px",
                    }}
                    size="small"
                  >
                    Login
                  </Button>
                  <Button disableRipple size="small">
                    Sign Up
                  </Button>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ padding: "12px 20px !important", height: "56px" }}
                >
                  <SVG.Menu style={{ color: "#fff" }} />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
