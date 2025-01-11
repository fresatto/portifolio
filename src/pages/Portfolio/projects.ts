export enum ProjectId {
  Hapvida = "Hapvida",
  Azul = "Azul",
  NDI = "NDI",
  Consultamais = "Consultamais",
}

export type Project = {
  projectId: ProjectId;
  name: string;
  bgImage: string;
  disabled?: boolean;
  techs: string[];
};

export const projects: Project[] = [
  {
    projectId: ProjectId.Hapvida,
    name: "Hapvida",
    bgImage:
      "https://i.pinimg.com/736x/78/52/6d/78526dbcdc8934f9fdebed6d5069549f.jpg",
    techs: ["React Native", "typescript"],
  },
  {
    projectId: ProjectId.Azul,
    name: "Azul",
    bgImage:
      "https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg",
    techs: ["react", "react js", "typescript"],
  },
  {
    projectId: ProjectId.NDI,
    name: "GNDI",
    bgImage:
      "https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg",
    techs: ["React Native", "typescript"],
  },
  {
    projectId: ProjectId.Consultamais,
    name: "Consultamais",
    disabled: true,
    bgImage:
      "https://i.pinimg.com/736x/07/7d/2e/077d2ef8979c89fab96d4c646005fa01.jpg",
    techs: ["PHP", "jQuery", "Bootstrap"],
  },
];
