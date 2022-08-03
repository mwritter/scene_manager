import { Box, styled, TextField } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";

const PlaylistTextField = styled(TextField)`
  > label {
    color: white;
  }
  & input {
    color: white;
  }
`;

function AddPlaylistInput({ blur }: AddPlaylistInputProps) {
  const [isFocused, setIsfocused] = useState(true);
  const playlistInputRef = useRef();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: Implementation will have to create a new file where ever we're reading from and writing to
    // and update the ui to include the new entry
    blur();
  }, []);

  useEffect(() => {
    if (playlistInputRef.current) {
      if (isFocused) {
        (playlistInputRef.current as HTMLInputElement).focus();
      } else {
        blur();
      }
    }
  }, [isFocused]);

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      noValidate
      autoComplete="off"
      padding={"1rem"}
    >
      <div>
        <PlaylistTextField
          inputRef={playlistInputRef}
          id="outlined-basic"
          label="Playlist"
          variant="outlined"
          fullWidth
          color={"info"}
          focused={isFocused}
          onFocus={() => setIsfocused(true)}
          onBlur={blur}
        />
      </div>
    </Box>
  );
}

type AddPlaylistInputProps = {
  blur: () => void;
};

export default AddPlaylistInput;
