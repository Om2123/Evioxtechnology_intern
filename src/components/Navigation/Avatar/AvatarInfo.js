import React from "react";
 import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { IconButton, Typography, Link, Badge } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

 

export const AvatarInfo = React.memo(function ProfileCard() {
   const user = JSON.parse(localStorage.getItem("user"));
  const isGV = user && user.maLoaiNguoiDung === "GV";

  return (
    <Card
      >
      {user ? (
        <CardContent>
          <Badge
            badgeContent={isGV ? user.maLoaiNguoiDung : null}
            color="error"
          >
            <Avatar
               src={"https://i.pravatar.cc/150?img=14"}
            />
          </Badge>
          <h3 
           >{user.taiKhoan}</h3>
          <span 
           >
            {user.maNhom}
            <br />
            {user.email}
          </span>
        </CardContent>
      ) : null}
      <Divider light />
      <Typography 
       >
        Designed by barhouum7
      </Typography>
      <Typography 
      // className={styles.subheader} 
      style={{ marginBottom: 0 }}>
        Contact Me
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton
          size="small"
          component={Link}
          href="https://twitter.com/mindh4q3rr"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          size="small"
          component={Link}
          href="https://github.com/barhouum7"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon style={{ fontSize: "1.125rem" }} />
        </IconButton>
      </Box>
      <Typography
      //  className={styles.subheader}
       >
        © Copyright 2020 MathUniverse.
      </Typography>
    </Card>
  );
});

export default AvatarInfo;
