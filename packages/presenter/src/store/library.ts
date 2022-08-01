import create from "zustand";
import libraries from "../utils/data";

export type Library = {
  id: string;
  name: string;
  selected: boolean;
  childrend?: string[];
};

type LibraryState = {
  libraries: Library[];
  toggleLibrarySelected: (id: string) => void;
};

const useLibraryStore = create<LibraryState>((set) => ({
  libraries,
  addLibrary: (library: Library) => {
    set((state) => ({
      libraries: [library, ...state.libraries],
    }));
  },
  toggleLibrarySelected: (id: string) => {
    set((state) => ({
      libraries: state.libraries.map((library) => {
        if (id === library.id) {
          return { ...library, selected: !library.selected };
        }
        return library;
      }),
    }));
  },
}));

export default useLibraryStore;
