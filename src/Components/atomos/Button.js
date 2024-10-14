


import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Default from "@/styles/Default";
import TextStyles from "@/styles/TextStyle";

const ButtonComponent = ({
  title,
  variant,
  color,
  textColor,
  size,
  sx,
  backgroundColor,
  borderColor,
  hoverOutlined,
  rounded = false,
  onClick
}) => {
  const getColor = (color) => {
    switch (color) {
      case "primary":
        return Default.primary;
      case "black":
        return Default.black;
      case "white":
        return Default.white;
      case "success":
        return Default.success;
      case "danger":
        return Default.danger;
      default:
        return "transparent";
    }
  };

  const StyledButton = styled(Button)(({ variant }) => ({
    color: variant === "outlined" ? getColor("primary") : getColor(color),
    backgroundColor: variant === "contained" ? "transparent" : getColor(backgroundColor),
    borderColor: variant === "outlined" ? getColor("primary") : getColor(color),
    borderRadius: rounded ? "5px" : "0",
    "&:hover": {
      backgroundColor: variant === "outlined" ? getColor("primary") : getColor(color),
      color: variant === "outlined" ? Default.white : getColor(textColor),
      borderColor: getColor(color),
    },
    ...sx,
  }));

  return (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      borderColor={borderColor}
      hoverOutlined={hoverOutlined}
      rounded={rounded}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

export default ButtonComponent;
