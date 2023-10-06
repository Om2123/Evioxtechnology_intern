import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid, Button, Box, Typography, Paper } from "@material-ui/core";
import {
  Email,
  PhoneCallback,
} from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import Image from "material-ui-image";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Logo from "../../components/Navigation/Logo/Logo";
import Video1 from "../../components/Videos/Video1";
import Video2 from "../../components/Videos/Video2";
import { tileData , useStyles, featureList, slideItems } from "./dashboard-nd";



const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        hideArrows={false}
        mobile={isMobile}
      >
        {slideItems.map((item) => (
          <Slide
            key={item.title}
            media={<img src={item.media} alt={item.title} />}
            title={item.title}
            subtitle={item.subtitle}
            mediaBackgroundStyle={{
              background: `linear-gradient(120deg, gray, green)`,
            }}
            style={{ background: `linear-gradient(120deg, gray, green)` }}
          />
        ))}
      </AutoRotatingCarousel>
    </div>
  );
};

function Dashboard() {
  const classes = useStyles();
  const matchSM = useMediaQuery("(min-width:600px)");
  const matchMD = useMediaQuery("(min-width:1000px)");
  const matchLG = useMediaQuery("(min-width:1400px)");
  const user = JSON.parse(localStorage.getItem("user"));
  const [handleOpen, setHandleOpen] = useState({ open: false });
 
  const handleClick = () => {
    setHandleOpen({ open: true });
  };

  const topSwoop = (
    <svg
      viewBox="0 0 1430 140"
      className={classes.topSwoop}
      fill={  "#303030"  }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1440 0v59.969c-65.287-39.594-188.865-55.343-370.736-47.248C766 26.221 627.87 140 277 140 171.698 140 79.365 124.417 0 93.25V0h1440z"></path>
    </svg>
  );

  const bottomSwoop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1430 140"
      fill={    "#303030"  }
      className={classes.bottomSwoop}
    >
      <path d="M0 140h1440V46.75C1360.635 15.583 1268.302 0 1163 0 812.13 0 674 113.78 370.736 127.279 188.866 135.374 65.286 119.625 0 80.03V140z"></path>
    </svg>
  );

  return (
    <Fragment>
      <Grid container alignItems="center" className={classes.header}>
        <Video2 />
        <Grid item className={classes.heroText} align="center">
          <Typography variant="h4" gutterBottom>
            Attend math and physics lessons according to the official program
            while staying at home.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Welcome to our online platform.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClick}>
            make a tour
          </Button>
          <AutoRotatingCarouselModal
            isMobile={matchSM}
            handleOpen={handleOpen}
            setHandleOpen={setHandleOpen}
          />
        </Grid>
      </Grid>

      <Box pb={7} className={classes.feature}>
        <Grid container justify="space-between" alignItems="center">
          {featureList.map((item) => (
            <Box m={1} display="flex" alignItems="center" key={item.title}>
              <Avatar className={classes.avatar}>{item.icon}</Avatar>
              <Box ml={1} display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  {item.count ? item.count : null}
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Box>
                <Typography variant="caption">{item.subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Box>{bottomSwoop} 
         
        </Box>
      </Box>

      <Box my={5} style={{ minHeight: 520 }}>
        <Box mx={6} py={3}>
          <Typography variant="h5" gutterBottom>
            <strong>Most recommended set of courses</strong>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Choose from 1000's online video courses, with new additions
            published almost every day
          </Typography>
        </Box>
        <Box m={20}>
          <Typography>
            THIS CONTENT IS UNAVAILABLE FOR NOW, THIS PLATFORM IS ON MAINTENANCE
            NOW ....
          </Typography>
        </Box>
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="90vh"
        >
          <Box mx={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                Choose and Enroll your favor courses
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                Simply sign up as a verified user on MathUniverse to start to
                access many excellent course resources.
              </Typography>
            </Box>
            {user ? null : (
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={"/sign-up"}
                  style={{ width: 150 }}
                >
                  Sign up
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to={"/sign-in"}
                  style={{ width: 150, marginLeft: 8, color: "inherit" }}
                >
                  Log in
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        {bottomSwoop}
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        <Box width="100vh">
          <Carousel
            animation={"slide"}
            timeout={500}
            indicators={false}
            className={classes.carousel}
          >
            {slideItems.map((item) => (
              <Paper key={item.title}>
                <Image src={item.media} aspectRatio={16 / 9} />
              </Paper>
            ))}
          </Carousel>
        </Box>
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="nowrap"
          pt={matchLG ? 20 : matchMD ? 15 : 10}
          pb={5}
        >
          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                1
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Easy to search the topic you want to learn
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  MathUniverse is a collection of many resources. People who
                  study at the MathUniverse can grow their knowledge by joining
                  suitable courses by fields.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-end" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                2
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Join us to help share knowledge for the community
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  We have an enthusiastic and responsible team of teachers from
                  many companies and corporations with many years of experience.
                  Join us to grow together.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                3
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  MathUniverse users easy to achieve the desired skills
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  MathUniverse is meticulously built to teach students and
                  enhance their skills from professional teachers in several
                  fields. We provide an easy experience and friendly user
                  interface to easily access the information as well as help you
                  interact with teachers easily
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {bottomSwoop}
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        <Box width="100vh">
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
          <Box mt={4}>
            <Video1 />
          </Box>
        </Box>
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="50vh"
        >
          <Box mx={5} mt={9} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                A bunch of topics are waiting you
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>What are you waiting for? join us now!</Typography>
            </Box>
            {user ? null : (
              <Box mt={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  to={"/sign-up"}
                  style={{ width: 150 }}
                >
                  Sign up
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box m={1} display="flex">
        <Box ml={1} alignItems="left" display="flex">
          <Logo />
        </Box>
        <Box mt={1} display="flex" flexDirection="column">
          <Box display="flex">
            <Email />
            <Box ml={1}>
              <Typography>contact@math-universe.com</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <PhoneCallback />
            <Box ml={1}>
              <Typography>+216 50 549 080</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}


export default Dashboard;
