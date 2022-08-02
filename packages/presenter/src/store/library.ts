import create from "zustand";
import { libraries, playlists } from "../utils/data";

export type File = {
  id: string;
  name: string;
  path: string;
  selected: boolean;
};

export type Directory = {
  id: string;
  name: string;
  selected: boolean;
  children?: File[];
};

type LibraryState = {
  libraries: Directory[];
  playlists: Directory[];
  files?: File[];
  toggleLibrarySelected: (id: string) => void;
  togglePlaylistSelected: (id: string) => void;
  toggleFileSelected: (id: string) => void;
};

const useLibraryStore = create<LibraryState>((set) => ({
  libraries,
  playlists,
  toggleLibrarySelected: (id: string) => {
    set((state) => {
      const selected = state.libraries.find((l) => l.id === id);
      const libraries = state.libraries.map((library) => {
        if (id === library.id) {
          return { ...library, selected: true };
        }
        return { ...library, selected: false };
      });

      return {
        libraries,
        files: selected?.children,
      };
    });
  },
  togglePlaylistSelected: (id: string) => {
    set((state) => {
      const selected = state.playlists.find((l) => l.id === id);
      const playlists = state.playlists.map((playlist) => {
        if (id === playlist.id) {
          return { ...playlist, selected: true };
        }
        return { ...playlist, selected: false };
      });

      return {
        playlists,
        libraries: state.libraries.map((l) => ({ ...l, selected: false })),
        files: selected?.children,
      };
    });
  },
  toggleFileSelected: (id: string) => {
    set((state) => ({
      files: state.files?.map((file) => ({
        ...file,
        selected: id === file.id,
      })),
    }));
  },
}));

export default useLibraryStore;
