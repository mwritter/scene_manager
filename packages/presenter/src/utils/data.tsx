import { Directory } from "../store/library";

export const libraries: Directory[] = [
  {
    id: "1",
    name: "Default",
    selected: false,
    children: [
      {
        id: "mighty_warrior",
        name: "Mighty Warrior",
        path: "Scene_Manager/Lib/Default/mighty_warrior",
        selected: false,
      },
    ],
  },
  {
    id: "2",
    name: "Default 2",
    selected: false,
    children: [],
  },
];

export const playlists: Directory[] = [
  {
    id: "1",
    name: "08-01-22",
    selected: false,
    children: [],
  },
  {
    id: "2",
    name: "08-02-22",
    selected: false,
    children: [
      {
        id: "authority",
        name: "Authority",
        path: "Scene_Manager/Playlists/authority",
        selected: false,
      },
    ],
  },
];
