import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useLibraryStore, { Directory } from "../../store/library";
import { styled, Typography } from "@mui/material";

const LibraryEntryButton = styled(ListItemButton)`
  &.Mui-selected {
    background-color: lightgrey;
    color: black;
  }

  &.Mui-selected:hover {
    background-color: lightgrey;
    color: black;
  }

  &.Mui-focusVisible {
    background-color: lightgrey;
    color: black;
  }

  :hover {
    background-color: lightgrey;
    color: black;
  }
`;

function LibraryFoldersView() {
  const {
    libraries,
    playlists,
    toggleLibrarySelected,
    togglePlaylistSelected,
  } = useLibraryStore(
    ({
      libraries,
      playlists,
      toggleLibrarySelected,
      togglePlaylistSelected,
    }) => ({
      libraries,
      playlists,
      toggleLibrarySelected,
      togglePlaylistSelected,
    })
  );

  const handleLibrarySelect = useCallback((library: Directory) => {
    if (!library.selected) {
      toggleLibrarySelected(library.id);
    }
  }, []);

  const handlePlaylistSelect = useCallback((playlist: Directory) => {
    togglePlaylistSelected(playlist.id);
  }, []);
  // TODO: we need a global style for these colors / styles
  return (
    <Box bgcolor={"#404040"} color={"white"} sx={{ width: "100%" }}>
      <Typography
        paddingLeft={"0.5rem"}
        fontWeight={"bold"}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Library
      </Typography>
      {libraries.length ? (
        <List component="nav">
          {libraries.map((library) => (
            <LibraryEntryButton
              key={library.id}
              selected={library.selected}
              onClick={() => handleLibrarySelect(library)}
            >
              <ListItemText primary={library.name} />
            </LibraryEntryButton>
          ))}
        </List>
      ) : null}
      <Typography
        paddingLeft={"0.5rem"}
        fontWeight={"bold"}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Playlist
      </Typography>
      {playlists?.length ? (
        <List component="nav">
          {playlists?.map((playlist) => (
            <LibraryEntryButton
              key={playlist.id}
              selected={playlist.selected}
              onClick={() => handlePlaylistSelect(playlist)}
            >
              <ListItemText primary={playlist.name} />
            </LibraryEntryButton>
          ))}
        </List>
      ) : null}
    </Box>
  );
}

export default LibraryFoldersView;
