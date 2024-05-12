import { Button, Stack } from "@mui/material";
import React from "react";

export default function CategoriesFiltes() {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={1.5}
        alignItems={"center"}
        flexWrap={"wrap"}
        useFlexGap
        sx={{
          "& button": {
            height: "45px",
            fontSize: "13px !important",
            "& span": { color: " #4B4CFF" },
          },
        }}
      >
        <Button variant="outlined">
          Development <span>(243)</span>
        </Button>
        <Button variant="outlined">
          Finance & Accounting <span>(200)</span>
        </Button>
        <Button variant="outlined">
          Design <span>(95)</span>
        </Button>
        <Button variant="outlined">
          Photography & Video <span>(310)</span>
        </Button>
        <Button variant="outlined">
          Personal Development <span>(310)</span>
        </Button>
        <Button variant="outlined">
          Life Style <span>(28)</span>
        </Button>

        <Button variant="outlined">
          Marketing<span>(308)</span>
        </Button>
        <Button variant="outlined">
          Music <span>(308)</span>
        </Button>
        <Button variant="outlined">
          Photography & Video <span>(308)</span>
        </Button>
      </Stack>
    </>
  );
}
