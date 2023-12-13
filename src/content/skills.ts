import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import type { Skill } from "../lib/Main/Skills.svelte";

// See: [https://devicon.dev] for icon lookup
export const skills: { [key: string]: Skill[]; } = {
  languages: [
    { name: "Bash", devicon: "bash-plain" },
    { name: "C#", devicon: "csharp-plain" },
    { name: "C++", devicon: "cplusplus-plain" },
    { name: "Delphi", text: "㎩" },
    { name: "Haskell", devicon: "haskell-plain" },
    { name: "Java", devicon: "java-plain" },
    { name: "Javascript", devicon: "javascript-plain" },
    { name: "Julia", devicon: "julia-plain" },
    { name: "PHP", devicon: "php-plain" },
    { name: "Prolog", text: "𓅓" },
    { name: "Python", devicon: "python-plain" },
    { name: "RStudio", devicon: "rstudio-plain" },
    { name: "Scheme", text: "λ" },
    { name: "SQL", devicon: "mysql-plain" },
    { name: "Typescript", devicon: "typescript-plain" },
  ],
  frameworks: [
    { name: "Angular", devicon: "angularjs-plain" },
    { name: "Bootstrap", devicon: "bootstrap-plain" },
    { name: "Electron", devicon: "electron-original" },
    { name: "JQuery", devicon: "jquery-plain" },
    { name: "NextJS", devicon: "nextjs-plain" },
    { name: "Processing", devicon: "processing-plain" },
    { name: "React", devicon: "react-plain" },
    { name: "Svelte", devicon: "svelte-plain" },
    { name: "SocketIO", devicon: "socketio-plain" },
    { name: "TailwindCSS", devicon: "tailwindcss-plain" },
    { name: "Tensorflow", devicon: "tensorflow-original" },
    { name: "ThreeJS", devicon: "threejs-original" },
  ],
  tools: [
    { name: "After Effects", devicon: "aftereffects-plain" },
    { name: "Blender", devicon: "blender-original" },
    { name: "Docker", devicon: "docker-plain" },
    { name: "Figma", devicon: "figma-plain" },
    { name: "Git", devicon: "git-plain" },
    { name: "Photoshop", devicon: "photoshop-plain" },
    { name: "Unity3D", devicon: "unity-original" },
  ],
  services: [
    { name: "Firebase", devicon: "firebase-plain" },
    { name: "Heroku", devicon: "heroku-plain" },
    { name: "Vercel", fa: faServer },
  ]
};
