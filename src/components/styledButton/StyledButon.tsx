import { styled, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledButtonProps {l
  children: ReactNode,
  onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const theme = useTheme();  // Acessa o tema do Material UI

  const StyledButton = styled('button')(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    justifyContent: "center",
    width: "100%",
    color: "#abd726",
    display: "inline-flex",
    marginTop :"30px",
    alignItems: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default StyledButton;
