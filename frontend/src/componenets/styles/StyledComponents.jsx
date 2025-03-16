import { styled } from "@mui/material";

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