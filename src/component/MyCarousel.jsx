import React from "react";
import logoworkout from "../image/logoworkout.png";
import { Box, Typography } from "@mui/material/";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ allWorkout }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box
      sx={{
        width: "880px",
        backgroundColor: "#fff",
        borderRadius: "25px",
        margin: "0px auto",
      }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ paddingLeft: "24px" }}>
        Workout list
      </Typography>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {allWorkout.map((item) => (
          <Box key={item.data} sx={{ padding: 3 }}>
            <img
              src={item.avatar ? item.avatar : logoworkout}
              //   srcSet={logoworkout}
              alt={item.data}
              width="150px"
              height="150px"
            />
            <Typography>
              {new Date(item.data).getDate()}/
              {new Date(item.data).getMonth() < 10
                ? `0${new Date(item.data).getMonth()}`
                : new Date(item.data).getMonth()}
              /{new Date(item.data).getYear() + 1900}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default MyCarousel;
