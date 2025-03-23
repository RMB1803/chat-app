import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const VisuallyHiddenInput = styled('input')({
    position: 'absolute',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: 0,
    border: 0
})

export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: "black",
    padding: "1rem",
    ":hover": {
        backgroundColor: "rgba(0,0,0,0.1)"
    }
})