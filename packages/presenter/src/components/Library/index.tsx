import React from "react";
import styled from "@emotion/styled";
import LibraryContentsView from "./LibraryContentsView";
import LibraryFoldersView from "./LibraryFoldersView";
import { Divider } from "@mui/material";

const LibrarySection = styled("section")`
  display: grid;
  grid-area: Library;
  height: 100%;
`;

export default () => (
  <LibrarySection>
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: "350px",
      }}
    >
      <LibraryFoldersView />
      <Divider />
      <LibraryContentsView />
    </div>
  </LibrarySection>
);
