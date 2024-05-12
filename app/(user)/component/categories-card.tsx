import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CategoriesCard(props: any) {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          border: "1px solid #EDEDED",
          borderRadius: "18px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            alt=""
            src={`/${props.item}`}
            width={407}
            height={241}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            alt=""
            src="/heart.png"
            width={30}
            height={27}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
        </Box>

        <CardContent>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: "16px", mb: 1 }}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography
                component={"p"}
                sx={{ fontSize: "12px", fontWeight: "400" }}
              >
                Antler is the investor backing the world most driven founders,
                from day zero to greatness.
              </Typography>
            </Box>
            <Avatar
              src="/useri.png"
              sx={{ border: "1px solid #F800C0", p: 0.5 }}
            />
          </Stack>
        </CardContent>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ p: 1, borderTop: "1px solid #EDEDED" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/map.svg" width={14} height={17} />
            <span>Abu Dhabi, UAE</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{ fontSize: "10px" }}
          >
            <Image alt="" src="/google-logo.png" width={12} height={13} />{" "}
            <Rating
              sx={{ fontSize: "12px" }}
              size="small"
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
            <Box>
              <span style={{ fontSize: "10px", fontWeight: "500" }}>4.5</span>{" "}
              (45 Rating)
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ p: 1, borderTop: "1px solid #EDEDED" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/gift-list.png" width={14} height={17} />
            <span>My Listing</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/video.png" width={14} height={17} />
            <span>My Video</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/usergroup.png" width={14} height={17} />
            <span>My Community</span>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ p: 1, borderTop: "1px solid #EDEDED" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/fredo.png" width={14} height={17} />
            <span>Fredo</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/cap.png" width={14} height={17} />
            <span>Book an Consultant</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              fontSize: "10px",
              fontWeight: "600",
              py: 1,
            }}
          >
            <Image alt="" src="/Interaction.png" width={14} height={17} />
            <span>Share</span>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
