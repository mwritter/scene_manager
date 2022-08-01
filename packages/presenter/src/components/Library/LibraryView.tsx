import React from "react";
import styled from "styled-components";
import useLibraryStore from "../../store/library";

const LibrarySection = styled.section`
  background-color: #404040;
  color: white;
`;

const LibraryHeader = styled.span`
  font-weight: bold;
  padding: 0 0.5rem;
`;

const LibraryEntry = styled.div<{ selected: boolean }>`
  background-color: ${(p) => (p.selected ? "lightgrey" : "transparent")};
  &:hover {
    background-color: lightgrey;
  }
  > button {
    color: ${(p) => (p.selected ? "black" : "white")};
  }
`;

const LibraryEntryBtn = styled.button`
  background: transparent;
  width: 100%;
  text-align: start;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: black;
  }
`;

function LibraryView() {
  const { libraries, toggleLibrarySelected } = useLibraryStore(
    ({ libraries, toggleLibrarySelected }) => ({
      libraries,
      toggleLibrarySelected,
    })
  );
  return (
    <LibrarySection>
      <LibraryHeader>Library</LibraryHeader>
      {libraries.map((library) => (
        <LibraryEntry key={library.id} selected={library.selected}>
          <LibraryEntryBtn onClick={() => toggleLibrarySelected(library.id)}>
            {library.name}
          </LibraryEntryBtn>
        </LibraryEntry>
      ))}
    </LibrarySection>
  );
}

export default LibraryView;
