import React from "react";
import styled from "@emotion/styled";
import LibraryContentsView from "./LibraryContentsView";
import LibraryFoldersView from "./LibraryFoldersView";

const LibrarySection = styled("section")`
  display: grid;
  height: 100%;
`;

function LibraryView() {
  return (
    <LibrarySection>
      <LibraryFoldersView />
      <LibraryContentsView />
    </LibrarySection>
  );
}

export default LibraryView;
