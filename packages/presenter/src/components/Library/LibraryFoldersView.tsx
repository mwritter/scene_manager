import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useLibraryStore, { Directory } from "../../store/library";
import AddIcon from "@mui/icons-material/Add";
import { styled, Typography } from "@mui/material";
import AddPlaylistInput from "./AddPlaylistInput";

const LibraryEntryButton = styled(ListItemButton)`
  padding: 0 1rem;
  &.Mui-selected,
  &.Mui-selected:hover,
  &.Mui-focusVisible,
  :hover {
    background-color: lightgrey;
    color: black;
  }
`;

const LibraryList = styled(List)`
  padding-top: 0;
` as typeof List;

function LibraryFoldersView() {
  const [isAddingPlaylist, setIsAddingPlaylist] = useState(false);
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

  const handleAddPlaylistClick = useCallback(() => {
    setIsAddingPlaylist((s) => !s);
  }, []);

  // TODO: we need a global style for these colors / styles
  return (
    <Box flex={1} bgcolor={"#404040"} color={"white"} sx={{ width: "100%" }}>
      <Box
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"black"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={"0.5rem"}
        sx={{ width: "100%" }}
      >
        <Typography
          fontWeight={"bold"}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Library
        </Typography>
        <AddIcon fontSize={"small"} cursor={"pointer"} />
      </Box>
      {libraries.length ? (
        <LibraryList component="nav">
          {libraries.map((library) => (
            <LibraryEntryButton
              key={library.id}
              selected={library.selected}
              onClick={() => handleLibrarySelect(library)}
            >
              <ListItemText primary={library.name} />
            </LibraryEntryButton>
          ))}
        </LibraryList>
      ) : null}
      <Box
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"black"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={"0.5rem"}
        sx={{ width: "100%" }}
      >
        <Typography
          fontWeight={"bold"}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Playlist
        </Typography>
        <AddIcon
          fontSize={"small"}
          cursor={"pointer"}
          onClick={handleAddPlaylistClick}
        />
      </Box>
      {playlists?.length ? (
        <LibraryList component="nav">
          {isAddingPlaylist ? (
            <AddPlaylistInput blur={() => setIsAddingPlaylist(false)} />
          ) : null}
          {playlists?.map((playlist) => (
            <LibraryEntryButton
              key={playlist.id}
              selected={playlist.selected}
              onClick={() => handlePlaylistSelect(playlist)}
            >
              <ListItemText primary={playlist.name} />
            </LibraryEntryButton>
          ))}
        </LibraryList>
      ) : null}
    </Box>
  );
}

export default LibraryFoldersView;
