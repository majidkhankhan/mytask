import React from "react";
import Header from "../component/header";
import { Box, Container } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 3, pt: 5, px: 0 }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </>
  );
}
