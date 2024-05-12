"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CategoriesFiltes from "./component/categories";
import CategoriesCard from "./component/categories-card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BannerSlider from "./component/bannerSlider";

export default function Home() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "400" }}>
          Find Venues (2684)
        </Typography>
        <Stack
          direction={"row"}
          spacing={1.275}
          alignItems={"center"}
          justifyContent={"flex-end"}
          sx={{
            "& button": {
              gap: "15px",
              display: "flex",
              alignItems: "center",
              height: "45px",
            },
          }}
        >
          <Button variant="outlined">
            <span>My Community</span>
            <Image src="/plush.svg" alt="" width={20} height={20} />
          </Button>
          <Button variant="outlined">
            <span>My Live</span>{" "}
            <Image src="/plush.svg" alt="" width={20} height={20} />
          </Button>
          <Button variant="outlined">
            <span>My Stories</span>{" "}
            <Image src="/plush.svg" alt="" width={20} height={20} />
          </Button>
          <Button variant="outlined">
            <Image src="/map.svg" alt="" width={14} height={17} />{" "}
            <span>Map</span>
          </Button>
          <IconButton
            sx={{
              width: "45px",
              height: "45px",
              background: "#4B4CFF",
              boxShadow: " 0px 4px 4px 0px #0000000D",
              "&:hover": {
                background: "#4B4CFF",
              },
            }}
          >
            <Image src="/column_1.svg" alt="" width={21} height={21} />
          </IconButton>
          <IconButton
            sx={{
              width: "45px",
              height: "45px",
              background: "#fff",
              boxShadow: " 0px 4px 4px 0px #0000000D",
              border: "1px solid #E6E6E6",
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            <Image src="/list.svg" alt="" width={21} height={21} />
          </IconButton>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            displayEmpty
            defaultValue="Sort Default"
            size="small"
            sx={{
              width: "165px",
              borderRadius: "90px",
              border: "1px solid #F800C0",
              fontSize: "15px",
              height: "45px",
              "& fieldset": {
                display: "none",
              },
            }}
          >
            <MenuItem value={""} sx={{ display: "none" }}>
              Sort Default
            </MenuItem>
            <MenuItem value={10}>Sort 1</MenuItem>
            <MenuItem value={20}>Sort 2</MenuItem>
            <MenuItem value={30}>Sort 3</MenuItem>
          </Select>
          <Button variant="contained" sx={{ background: "#4B4CFF !important" }}>
            <span>Filters</span>{" "}
            <Image src="/slider 1.png" alt="" width={21} height={21} />
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ mt: 5 }}>
        <CategoriesFiltes />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Box>
              <Grid container spacing={2}>
                {[
                  "1.png",
                  "2.png",
                  "3.png",
                  "4.png",
                  "5.png",
                  "6.png",
                  "7.png",
                  "8.png",
                  "9.png",
                ].map((item) => (
                  <Grid item xs={12} lg={4} key={item}>
                    <CategoriesCard item={item} />
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} lg={12}>
                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <Button
                    variant="contained"
                    sx={{ background: "#4B4CFF !important" }}
                  >
                    Load More
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack direction={"column"} spacing={2}>
              <Image alt="" src="/videoplay.png" width={405} height={228} />
              <Image alt="" src="/re.png" width={405} height={482} />
              <Image alt="" src="/ads.png" width={405} height={482} />
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #EDEDED",
                  background: "#F8F8F8",
                  borderRadius: "18px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "25px",
                      fontWeight: "700",
                      color: "#4B4CFF",
                      mb: 2,
                    }}
                  >
                    {"What's"} New
                  </Typography>
                  <Stack direction={"column"} spacing={2.5}>
                    {[1, 2, 3, 4, 5].map((index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        spacing={1}
                        alignItems={"center"}
                      >
                        <Image alt="" src="/el.png" width={80} height={79} />
                        <Box sx={{ fontSize: "16px" }}>
                          <b>Golf Terrace</b> is a residential development in
                          Damac Hills
                        </Box>
                      </Stack>
                    ))}
                    <Stack
                      direction={"row"}
                      spacing={2}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      sx={{
                        border: "1px solid #003DCA",
                        borderRadius: "30px",
                        p: 1,
                        fontSize: "15px",
                        fontWeight: "500",
                        pl: 2,
                      }}
                    >
                      View All{" "}
                      <Box
                        component={"span"}
                        sx={{
                          background: "#4B4CFF",
                          px: 1.5,
                          color: "#fff",
                          borderRadius: "90px",
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4, p: 3, background: "#F2F3F5", borderRadius: "12px" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: "400", mb: 2 }}
        >
          <Box
            component={"span"}
            sx={{ borderBottom: "2px solid #4B4CFF", mb: 2 }}
          >
            Featured Listings
          </Box>
        </Typography>
        <Box>
          <Grid container spacing={2}>
            {["1.png", "2.png", "3.png", "4.png"].map((item) => (
              <Grid item xs={12} lg={3} key={item}>
                <CategoriesCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ pt: 2 }}>
        <BannerSlider />
      </Box>
      {/* <Box sx={{ pt: 3 }}>
        <Box sx={{ pb: 2, borderBottom: "1px solid #EDEDED" }}>
          <Button></Button>
        </Box>
      </Box> */}
    </>
  );
}
