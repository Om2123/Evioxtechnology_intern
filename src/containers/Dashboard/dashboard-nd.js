
import course1 from "../../assets/images/episodes/1.png";
import course2 from "../../assets/images/episodes/2.png";
import course3 from "../../assets/images/episodes/3.png";
import course4 from "../../assets/images/episodes/4.png";
import course5 from "../../assets/images/episodes/5.png";
import course6 from "../../assets/images/episodes/6.png";
import tileimage1 from "../../assets/images/blog/img-1.jpg";
import tileimage2 from "../../assets/images/blog/img-2.jpg";
import tileimage3 from "../../assets/images/blog/img-3.jpg";
import tileimage4 from "../../assets/images/blog/img-4.jpg";
import tileimage5 from "../../assets/images/blog/img-5.jpg";
import CountUp from "react-countup";
import { AllInclusive, Bookmark, LiveTv } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heroText: {
      position: "absolute",
      margin: "0 10% 0 10%",
      color: "white",
    },
    header: {
      height: "79vh",
      backgroundSize: "cover",
      backgroundPosition: "65% 50%",
      backgroundAttachment: "fixed",
    },
    avatar: {
      backgroundColor: "#e67e22",
    },
    feature: {
      color: "white",
      minHeight: "30vh",
      position: "relative",
      background: `linear-gradient(120deg, gray, green)`,
    },
    intro: {
      position: "relative",
      background: `linear-gradient(120deg, gray, green)`,
      animation: `5s ease 0s infinite normal none running Gradient`,
      color: "white",
    },
    topSwoop: {
      position: "absolute",
      top: "-2px",
    },
    bottomSwoop: {
      position: "absolute",
      bottom: "-2px",
      zIndex: 0,
    },
    gridListRoot: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "wrap",
      transform: "translateZ(0)",
    },
    titleNumber: {
      lineHeight: "85%",
      "@media (max-width: 1274px)": {
        lineHeight: "100%",
      },
      "@media (max-width: 600px)": {
        fontSize: "4rem",
      },
    },
  }));
const slideItems = [
    {
      media: course1,
      title: "This is a very cool feature",
      subtitle: "Just using this will blow your mind.",
    },
    {
      media: course2,
      title: "Ever wanted to be popular?",
      subtitle: "Well just mix two colors and your are good to go!",
    },
    {
      media: course3,
      title: "May the force be with you",
      subtitle:
        "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
    },
    {
      media: course4,
      title: "May the force be with you",
      subtitle:
        "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
    },
    {
      media: course5,
      title: "May the force be with you",
      subtitle:
        "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
    },
    {
      media: course6,
      title: "May the force be with you",
      subtitle:
        "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
    },
  ];
  const tileData = [
    {
      img: tileimage1,
      cols: 1,
    },
    {
      img: tileimage2,
      cols: 1,
    },
    {
      img: tileimage3,
      cols: 1,
    },
    {
      img: tileimage4,
      cols: 1,
    },
    {
      img: tileimage5,
      cols: 2,
    },
  ];
  
  const featureList = [
    {
      icon: <LiveTv />,
      title: "Interactive live online courses",
      subtitle: "Enjoy a variety of fresh topics",
      count: <CountUp end={1000} duration={6} style={{ marginRight: 4 }} />,
    },
    {
      icon: <AllInclusive />,
      title: "Lifetime access to a set of corrected exercises",
      subtitle: "Learn on your schedule",
      count: null,
    },
    {
      icon: <Bookmark />,
      title: "Expert & Certified instructors",
      subtitle: "Find the right instructor for you",
      count: null,
    },
  ];

  export {slideItems, tileData,useStyles, featureList};