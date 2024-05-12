/* eslint-disable @next/next/no-img-element */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

export default function BannerSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box
      sx={{
        "& .slick-dots": { bottom: "25px", textAlign: "left", left: "15px" },
        "& .slick-dots li.slick-active button:before": { color: "#4B4CFF" },
        "& .slick-dots li button:before": { color: "#fff" },
      }}
    >
      <Slider {...settings}>
        {[1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <img src="/banner.png" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                zIndex: 1,
                background:
                  "linear-gradient(91.93deg, #002E8B -84.31%, #8E14A9 13.18%, rgba(248, 0, 192, 0) 85.82%)",
                borderRadius: "24px",
                fontSize: "64px",
                fontWeight: "600",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                p: 3,
              }}
            >
              <Box>
                We have thousands <br />
                of verified venues
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
