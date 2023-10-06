import React from "react";
import Switch from "@material-ui/core/Switch";
import { Tooltip } from "@material-ui/core";
import { useN01SwitchStyles } from "@mui-treasury/styles/switch/n01";
  
const DarkThemeSwitch = ({ darkTheme, onDarkTheme }) => {
  const switchStyles = useN01SwitchStyles();
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  return (
    <div>
      <Tooltip title="Dark Theme">
        <Switch
          classes={switchStyles}
          checked={isTheme}
          onChange={(e) => onDarkTheme(e.target.checked)}
        />
      </Tooltip>
    </div>
  );
};

 
export default  (DarkThemeSwitch);
