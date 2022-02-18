import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import videoSrc from "../image/video.png";
const VideoPreview = () => {
  return (
    <VideoPreviewStyle>
      <Box className="video-box">
        <Box
          sx={{
            backgroundImage: `url(${videoSrc})`,
            backgroundSize: "cover",
            width: "110px",
            height: "80px",
            margin: "15px",
            padding: "15px",
          }}></Box>
        <Box>
          <Box>
            <Typography>Workout Goal</Typography>
            <Typography className="subtitle">by Mikael Smith</Typography>
          </Box>

          <Box sx={{ paddingTop: "10px" }}>
            <Typography className="subtitle">Video: 3</Typography>
            <Typography className="subtitle">Total duration: 40 min</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="stat-info">
        <Box>
          <Typography>B+</Typography>
          <Typography className="subtitle">Blood type</Typography>
        </Box>

        <Box>
          <Typography>173 cm</Typography>
          <Typography className="subtitle">Height</Typography>
        </Box>

        <Box>
          <Typography>72 kg</Typography>
          <Typography className="subtitle">Weight</Typography>
        </Box>
      </Box>
    </VideoPreviewStyle>
  );
};
export default VideoPreview;

const VideoPreviewStyle = styled(Box)`
  margin: 0 auto;
  width: 40%;
  max-width: 350px;
  @media (max-width: 780px) {
    max-width: 100%;
  }

  .video-box {
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 13px;
    display: flex;
    margin-bottom: 10px;
  }

  .stat-info {
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
  }

  .subtitle {
    color: #a3abbd;
  }
`;
