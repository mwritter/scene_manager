import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, Typography } from "@mui/material";
// TODO: these types 'File' etc, probably should live in a 'constants' file somewhere
// and the names should be 'FileType'
import useLibraryStore, { File } from "../../store/library";

// TODO: create a global theme
const FileEntryButton = styled(ListItemButton)`
  padding: 0 1rem;
  &.Mui-selected,
  &.Mui-selected:hover,
  &.Mui-focusVisible,
  :hover {
    background-color: lightgrey;
    color: black;
  }
`;

const ItemList = styled(List)`
  padding-top: 0;
` as typeof List;

function LibraryContentsView() {
  const { toggleFileSelected, files = [] } = useLibraryStore(
    ({ files, toggleFileSelected }) => ({
      files,
      toggleFileSelected,
    })
  );

  const handleListItemClick = useCallback((file: File) => {
    if (!file.selected) {
      toggleFileSelected(file.id);
    }
  }, []);

  return (
    <Box flex={1} bgcolor={"#262626"} color={"white"} sx={{ width: "100%" }}>
      <Typography
        paddingLeft={"0.5rem"}
        fontWeight={"bold"}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Items
      </Typography>
      <ItemList component="nav">
        {files.map((file) => (
          <FileEntryButton
            key={file.name}
            selected={file.selected}
            onClick={() => handleListItemClick(file)}
          >
            <ListItemText primary={file.name} />
          </FileEntryButton>
        ))}
      </ItemList>
    </Box>
  );
}

export default LibraryContentsView;
