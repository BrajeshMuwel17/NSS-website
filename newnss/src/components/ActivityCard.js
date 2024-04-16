// import React, { useState } from 'react';
import './ActivityCard.css';
import banner1 from "../images/banner.jpg";
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';

// const ActivityCard = ({ title, content, hashtag, date, instaLink, twitterLink, imageLink }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [displayContent, setDisplayContent] = useState(content.substring(0, 200));

//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//     if (!expanded) {
//       setDisplayContent(content);
//     } else {
//       setDisplayContent(content.substring(0, 200));
//     }
//   };

//   return (
//     <div className={`activity-card ${expanded ? 'expanded' : ''}`} style={{ display: 'flex' }} >
//       <div className="activity-image" >
//         <img src={imageLink} alt="Activity" />
//       </div>
//       <div className="activity-content" style={{flex:1}}>
//         <div className="titleLine">
//           <h2 className="activity-title">{title}</h2>
//           <div className="social-links">
//             <a href={instaLink} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i> <img src={insta} alt="" style={{ width: '20px' }} />
//             </a>
//             <a href={twitterLink} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//               <img src={twitter} alt="" style={{ width: '20px' }} />
//             </a>
//           </div>
//         </div>
//         <p className={`activity-description ${expanded ? 'expanded' : ''}`}>
//           {displayContent}
//           {!expanded && content.length > 200 && <button className="show-more" onClick={toggleExpanded}>...Show More</button>}
//         </p>
//         <div className="activity-info">
//           <div className="hashtags">
//             <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 5.00004L9.1 9.10004C8.97778 9.27782 8.81944 9.41671 8.625 9.51671C8.43056 9.61671 8.22222 9.66671 8 9.66671H1.33333C0.966667 9.66671 0.652778 9.53615 0.391667 9.27504C0.130556 9.01393 0 8.70004 0 8.33337V1.66671C0 1.30004 0.130556 0.986152 0.391667 0.725041C0.652778 0.46393 0.966667 0.333374 1.33333 0.333374H8C8.22222 0.333374 8.43056 0.383374 8.625 0.483374C8.81944 0.583374 8.97778 0.722263 9.1 0.900041L12 5.00004ZM10.3667 5.00004L8 1.66671H1.33333V8.33337H8L10.3667 5.00004Z" fill="#27932B" />
//             </svg>
//             {hashtag}
//           </div>
//           <div className="date">
//             <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1.33333 13.6663C0.966667 13.6663 0.652778 13.5358 0.391667 13.2747C0.130556 13.0136 0 12.6997 0 12.333V2.99967C0 2.63301 0.130556 2.31912 0.391667 2.05801C0.652778 1.7969 0.966667 1.66634 1.33333 1.66634H2V0.333008H3.33333V1.66634H8.66667V0.333008H10V1.66634H10.6667C11.0333 1.66634 11.3472 1.7969 11.6083 2.05801C11.8694 2.31912 12 2.63301 12 2.99967V12.333C12 12.6997 11.8694 13.0136 11.6083 13.2747C11.3472 13.5358 11.0333 13.6663 10.6667 13.6663H1.33333ZM1.33333 12.333H10.6667V5.66634H1.33333V12.333ZM1.33333 4.33301H10.6667V2.99967H1.33333V4.33301Z" fill="#4856D8" />
//             </svg>
//             {date}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const posts = [
//   {
//     id: 1,
//     title: 'Cleanliness drive at Amingaon',
//     content: 'During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ',
//     hashtag: 'CLEANLINESS',
//     date: '24 MAR 2024',
//     instaLink: 'https://www.instagram.com/activity1',
//     twitterLink: 'https://www.twitter.com/activity1',
//     imageLink: banner,
//   },
//   {
//     id: 1,
//     title: 'Cleanliness drive at Amingaon',
//     content: 'During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ',
//     hashtag: 'CLEANLINESS',
//     date: '24 MAR 2024',
//     instaLink: 'https://www.instagram.com/activity1',
//     twitterLink: 'https://www.twitter.com/activity1',
//     imageLink: banner,
//   },
//   {
//     id: 1,
//     title: 'Cleanliness drive at Amingaon',
//     content: 'During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ',
//     hashtag: 'CLEANLINESS',
//     date: '24 MAR 2024',
//     instaLink: 'https://www.instagram.com/activity1',
//     twitterLink: 'https://www.twitter.com/activity1',
//     imageLink: banner,
//   },
// ];

// const ActivityCards = () => {
//   return (
//     <div className="ActivityCards">
//       {posts.map((post) => (
//         <ActivityCard key={post.id} {...post} />
//       ))}
//     </div>
//   );
// };

// export default ActivityCards;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { useState } from "react";

// import React, { useState } from 'react';
// import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Box, Collapse } from '@mui/material';
// import { Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';

function RecipeReviewCard({ title, subheader, content, banner ,hashtag,instaLink,twitterLink}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const [displayContent, setDisplayContent] = useState(
    content.substring(0, 200)
  );
  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setDisplayContent(content);
    } else {
      setDisplayContent(content.substring(0, 200));
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "70%",
          border: "1px solid lightgray",
          boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s",
          borderRadius:'10px',
          "&:hover": {
            boxShadow: "0px 0px 20px 4px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        


        <CardMedia
          component="img"
          height="154"
          image={banner}
          alt="Paella dish"
          sx={{ width: { xs: "100%", md: 345 } }} // Full width on small screens, fixed width on medium screens
        />
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{display:"flex",}}>
          <CardHeader title={title} subheader={subheader} />
          <div className="social-links" style={{marginLeft:'auto',marginTop:'15px',marginRight:'15px'}}>
          <a
            href={instaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>{" "}
            <img src={insta} alt="" style={{ width: "20px" }} />
          </a>
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <img src={twitter} alt="" style={{ width: "20px" }} />
          </a>
        </div>
          </div>
         
          <CardContent>
  <Typography variant="body2" color="text.secondary">
    {expanded ? content : displayContent}
    {content.length > 200 && (
      <button className="show-more" onClick={toggleExpanded}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    )}
  </Typography>
</CardContent>

          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            <IconButton aria-label="show more" onClick={handleExpandClick}>
              {/* <ExpandMoreIcon /> */}
            </IconButton>
            <div className="hashtags">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.00004L9.1 9.10004C8.97778 9.27782 8.81944 9.41671 8.625 9.51671C8.43056 9.61671 8.22222 9.66671 8 9.66671H1.33333C0.966667 9.66671 0.652778 9.53615 0.391667 9.27504C0.130556 9.01393 0 8.70004 0 8.33337V1.66671C0 1.30004 0.130556 0.986152 0.391667 0.725041C0.652778 0.46393 0.966667 0.333374 1.33333 0.333374H8C8.22222 0.333374 8.43056 0.383374 8.625 0.483374C8.81944 0.583374 8.97778 0.722263 9.1 0.900041L12 5.00004ZM10.3667 5.00004L8 1.66671H1.33333V8.33337H8L10.3667 5.00004Z"
                  fill="#27932B"
                />
              </svg>
              {hashtag}
            </div>
            
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </Box>
      </Card>
    </div>
  );
}

// export default RecipeReviewCard;

const posts = [
  {
    id: 1,
    title: "Cleanliness drive at Amingaon",
    content:
      "During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ",
    hashtag: "CLEANLINESS",
    date: "24 MAR 2024",
    instaLink: "https://www.instagram.com/activity1",
    twitterLink: "https://www.twitter.com/activity1",
    imageLink: banner1,
  },
  {
    id: 1,
    title: "Cleanliness drive at Amingaon",
    content:
      "During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ",
    hashtag: "CLEANLINESS",
    date: "24 MAR 2024",
    instaLink: "https://www.instagram.com/activity1",
    twitterLink: "https://www.twitter.com/activity1",
    imageLink: banner1,
  },
  {
    id: 1,
    title: "Cleanliness drive at Amingaon",
    content:
      "During the visit to the village school in Manikarneswar During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar  During the visit to the village school in Manikarneswar   ",
    hashtag: "CLEANLINESS",
    date: "24 MAR 2024",
    instaLink: "https://www.instagram.com/activity1",
    twitterLink: "https://www.twitter.com/activity1",
    imageLink: banner1,
  },
];



const ActivityCards = () => {
  return (
    <div className="ActivityCards">
      {posts.map((post) => (
        // <ActivityCard key={post.id} {...post} />
        <RecipeReviewCard
          title={post.title}
          subheader={post.date}
          content={post.content}
          banner={post.imageLink}
          hashtag={post.hashtag}
          instaLink={post.instaLink}
          twitterLink={post.tw}
        />
      ))}
    </div>
  );
};

export default ActivityCards;
