import React from "react";
import { classnames, makeStyles } from "ghostwheel";

const useStyles = makeStyles(({ colors }) => ({
  root: {
    display: "block",
    position: "relative",

  },
  input: {
    background: "rgba(0,0,0,.5)",
    border: `1px solid ${colors.green}`,
    color: "white",
    display: "block",
    padding: "calc(.5rem - 1.5px) .5rem",

    "&:focus": {
      border: `1px solid ${colors.green}`,
      outline: "none",
    },
  },
  iconOnly: {
    opacity: 0,
    position: "absolute",
    left: -999,
  },
  iconLabel: {
    color: colors.green,
    position: "absolute",
    left: 5,
    top: "50%",
    transform: "translateY(-50%)",
    height: 23,

    "& + $input": {
      paddingLeft: 35,
    },
  },
  normal: {},
}), "Input");

export const Input = ({ style = "normal", icon = false, iconOnly = false, name = "new input", label = name, type = "text", ...p }) => {
  const c = useStyles();

  return (
    <div className={classnames(c.root, c[style])}>
      <label htmlFor={name} className={classnames(c.label, !!icon && c.iconLabel)}>
        {icon}
        <span className={classnames(!!iconOnly && c.iconOnly)}>{label}</span>
      </label>
      <input className={c.input} name={name} type={type} {...p} />
    </div >);
};
