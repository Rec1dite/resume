import type { ProjectData } from "../lib/Main/ProjectModal.svelte";
import blix_screenshot1 from "../content/projects/blix/screenshot1.png";
import ceevee_blenderScene from "../content/projects/ceevee/blenderScene.png";
import hashed_thumb from "../content/projects/hashed/thumb.png";
import hashed_concept from "../content/projects/hashed/concept.jpg";
import artSurvival_thumb from "../content/projects/artSurvival/thumb.png";
import artSurvival_conceptFpv from "../content/projects/artSurvival/concept_fpv.jpg";
import artSurvival_conceptItems1 from "../content/projects/artSurvival/concept_items1.jpg";
import artSurvival_conceptItems2 from "../content/projects/artSurvival/concept_items2.jpg";
import artSurvival_conceptPoster from "../content/projects/artSurvival/concept_poster.jpg";
import splinter_thumb from "../content/projects/splinter/thumb.jpg";
import legoGameBuilder_bricks from "../content/projects/legoGameBuilder/bricks.png";
import legoGameBuilder_goose from "../content/projects/legoGameBuilder/goose.png";
import legoGameBuilder_house from "../content/projects/legoGameBuilder/house.png";
import legoGameBuilder_rocket from "../content/projects/legoGameBuilder/rocket.png";
import legoGameBuilder_soccer from "../content/projects/legoGameBuilder/soccer.png";
import rudasa_thumb from "../content/projects/rudasa/thumb.png";
import rudasa_contactPage from "../content/projects/rudasa/contactPage.png";
import processing_thumb from "../content/projects/processing/thumb.png";
import delirium_thumb from "../content/projects/delirium/thumb.png";
import spellingBee_thumb from "../content/projects/spellingBee/thumb.png";
import delirium_screenshot1 from "../content/projects/delirium/screenshot1.jpg";
import delirium_screenshot2 from "../content/projects/delirium/screenshot2.jpg";
import delirium_screenshot3 from "../content/projects/delirium/screenshot3.jpg";
import cobwebs_thumb from "../content/projects/cobwebs/thumb.png";

export const projects: { [key: string]: ProjectData } = {
  "001_blix": {
    title: "Blix",
    year: 2023,
    desc: "Blix is an extensible AI-assisted graph editor.\n\nBlix is a cross-platform desktop application designed for power through extensibility. It provides a composable node-based system that establishes a common ground to facilitate collaborative human/AI media editing workflows.",
    thumbnailImg: blix_screenshot1,
    sources: [
      {
        type: "github",
        url: "https://github.com/BlixEditor/blix",
      },
      {
        type: "website",
        url: "https://the-spanishinquisition.github.io/blix-site",
      },
    ],
    collaborators: [
      { name: "Armand Krynauw", url: "https://github.com/ArmandKrynauw" },
      { name: "Francois Combrinck", url: "https://github.com/CenturionLC" },
      { name: "Jake Mileham", url: "https://github.com/SharkmanZA" },
      { name: "Karel Olwage", url: "https://github.com/Klairgo" },
    ],
    showcase: [
      {
        caption:
          "Demo of Blix editor: Querying the AI, Reactive graph updates, Image editing",
        yt: "7y2TohRtZDU",
      },
      { caption: "Editor screenshot", img: blix_screenshot1 },
    ],
  },
  "002_ceevee": {
    title: "CeeVee",
    year: 2021,
    desc: "Home-made 3D graphics engine.\n\nCeeVee is a 3D graphics engine written in C++ from the ground-up.\nIt's original purpose was to serve as platform for me to learn the fundamentals of low-level 3D graphics, however for fun I decided to take it a step further and built it into a kind of 'interactive resume'.\n\nFeatures include:\n- Support for Wavefront .obj/.mtl 3D model files\n- Extended custom-made file format for defining object modifiers, useful for stuff like looping animations and pre-defined movement paths\n- WASDQE camera controller\n- Splineable camera controller\n- Depth buffer generation\n- Auto mip-mapping for textures\n- 2D billboard objects\n- Animated textures\n\n As mentioned above I also built a custom Blender plugin to allow me to export my Blender scenes to CeeVee's custom format. All 3D models and textures scene were created by me.",
    thumbnailImg: ceevee_blenderScene,
    sources: [
      {
        type: "github",
        url: "https://github.com/Rec1dite/CeeVee",
      },
    ],
    showcase: [
      { caption: "Demo vid", yt: "EzvPQZdXQwA" },
      {
        caption:
          "Blender project screenshot working with custom exporter add-on",
        img: ceevee_blenderScene,
      },
    ],
  },
  "003_hashed": {
    title: "Hashed",
    year: 2020,
    desc: "My 24hour matric art exam final\n\nThe concept was for the piece to be a VR experience taking the viewer through a cyber-dystopian Orwellian society, mechanized and devoid of free-will.\n\nAll assets were 3D modelled/textured by me. Made in Unity using the XR Interaction Toolkit with custom scripts for object interaction and scene navigation.",
    thumbnailImg: hashed_thumb,
    showcase: [
      { caption: "Demo playthrough", yt: "IwsaaEb6UEQ" },
      { caption: "Original concept drawing", img: hashed_concept },
    ],
  },
  "004_splinter": {
    title: "Splinter",
    year: 2021,
    desc: "2D physics engine designed for simulating ropes and pendulums.\n\nWritten from scratch in C++ using [olcPixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine) for rendering.",
    thumbnailImg: splinter_thumb,
    showcase: [{ caption: "Messing around with Splinter", yt: "q3iFZbSLArM" }],
  },
  "005_legoGameBuilder": {
    title: "Lego Game Builder",
    year: 2021,
    desc: "2D Lego-based level creation engine for teaching kids game design and as a creative tool for education.\n\nFeatures:\n- Avatar creator\n- 'Build mode' for designing and building a world\n- 'Play mode' for playing through a world\n- LAN multiplayer",
    thumbnailImg: legoGameBuilder_rocket,
    showcase: [
      { caption: "Playthrough & world showcase", yt: "u7pUdY9Fbjw" },
      { caption: "Brick palette", img: legoGameBuilder_bricks },
      { caption: "Goose pixel art", img: legoGameBuilder_goose },
      { caption: "House build", img: legoGameBuilder_house },
      { caption: "Rocket build", img: legoGameBuilder_rocket },
      { caption: "Soccer stadium build", img: legoGameBuilder_soccer },
    ],
  },
  "006_processing": {
    title: "Processing3D Crap",
    year: [2017, 2020],
    desc: "A bunch of random crap I made in high school when I should have been studying.\n\nI was head of the IT task team in matric, so many of these were designed as fun simple projects to help other students learn to code.",
    thumbnailImg: processing_thumb,
    showcase: [
      { caption: "Solar System Tour", yt: "NTAsQrNtzqQ" },
      { caption: "Typing Test", yt: "E2W1VOBjM2Q" },
      { caption: "White Flash", yt: "ux8trh789Tc" },
      { caption: "Minesweeper", yt: "FohO5PsqtsY" },
      { caption: "IsoCubes", yt: "4MArfq8Eg8A" },
      { caption: "Gravity Balls", yt: "7a0dYZFteu0" },
      { caption: "Glitch Text", yt: "d5LzpzI6fWU" },
      { caption: "Electric Arc Generator", yt: "bzcnlC-tsAU" },
      { caption: "Confetti Sprayer", yt: "XbIYrO0B0mc" },
      { caption: "Chrome Dino Game", yt: "7E-hHGppI4A" },
      { caption: "Audio Visualizer", yt: "ZZwh8QxYuWg" },
      { caption: "2D Shooter Controller", yt: "GSRh9-BaoxA" },
      { caption: "Firefly Removal Utility", yt: "TyijSYV4Aks" },
    ],
  },
  "007_rudasa": {
    title: "RuDASA Website",
    year: 2022,
    desc: "Next.js",
    thumbnailImg: rudasa_thumb,
    sources: [
      {
        type: "website",
        url: "https://rudasa.org.za",
      },
    ],
    collaborators: [
      { name: "Keelan Matthews", url: "https://github.com/Keelan-Matthews" },
      { name: "Tayla Orsmond", url: "https://github.com/tayla-orsmond" },
    ],
    showcase: [
      { caption: "Login page", img: rudasa_thumb },
      { caption: "Contact page", img: rudasa_contactPage },
    ],
  },
  "008_artSurvival": {
    title: "ART: Survival",
    desc: "This was one of my matric visual art final pieces, designed to be a partially-gamified exploration of VR interactions.\n\nThe primary focus was to allow the player to mess around with a bunch of interesting VR trinkets and weapons in a cyber-classroom environment.\nThe scene was designed to be a parody of the art room environment at my school, where you take the role of the teacher who must fend off angry cyborg art students after you've given them failing grades.\n\nAll assets were 3D modelled/textured by me. Made in Unity using the XR Interaction Toolkit with custom scripts for object interaction and scene navigation.",
    thumbnailImg: artSurvival_thumb,
    showcase: [
      { caption: "Demo playthrough", yt: "KxiY5wFny6s" },
      { caption: "Main boss animations", yt: "KyQCT3VagTc" },
      { caption: "Basic enemy animantions", yt: "B1-q8d8WsP4" },
      {
        caption: "First-person view concept sketch",
        img: artSurvival_conceptFpv,
      },
      { caption: "Items concept sketch", img: artSurvival_conceptItems1 },
      { caption: "Items concept sketch", img: artSurvival_conceptItems2 },
      { caption: "Concept poster sketch", img: artSurvival_conceptPoster },
    ],
  },
  "009_delirium": {
    title: "Delirium",
    year: 2021,
    desc: "Infinite runner 3rd-person shooter made in 48 hours for the 2021 GMTK Game Jam.\n\nPlay as a delirious prisoner trying to escape asylum by battling waves of guards as he descends into madness.",
    thumbnailImg: delirium_thumb,
    sources: [
      {
        type: "website",
        url: "https://slightlyaboveaverage.itch.io/delirium",
      },
    ],
    collaborators: [
      { name: "James Lamusse", url: "https://jameslamusse.github.io" },
      {
        name: "Tristan Voulelis",
        url: "https://www.artstation.com/tristanvoulelis",
      },
    ],
    showcase: [
      { caption: "Trailer", yt: "TzEtEfV3SDg" },
      { caption: "Gameplay screenshot 1", img: delirium_screenshot1 },
      { caption: "Gameplay screenshot 2", img: delirium_screenshot2 },
      { caption: "Gameplay screenshot 3", img: delirium_screenshot3 },
    ],
  },
  "010_spellingBee": {
    title: "Spelling Bee",
    year: 2020,
    desc: "A simple level-based spelling bee game designed to help kids practice for the Vodacom Spelling Bee.\nThe project was unfortunately scrapped before reaching fruition.",
    thumbnailImg: spellingBee_thumb,
    showcase: [
      { caption: "Pre-alpha gameplay demo", yt: "qIiD1KGHN0w" },
      { caption: "Custom water/island shaders", yt: "0jZkQzmcsNM" },
    ],
  },
  "011_espr": {
    title: "Espr",
    year: 2023,
    githubRepo: "Rec1dite/espr",
    desc: "A simple polybar module to remind you when loadshedding is scheduled.\n\nShould work for most other Linux status bars too.",
    sources: [
      {
        type: "github",
        url: "https://github.com/Rec1dite/espr",
      },
    ],
    showcase: [{ caption: "Repo", gh: "Rec1dite/espr" }],
  },
  "012_feetpics": {
    title: "FeeTPics",
    year: 2023,
    githubRepo: "Rec1dite/FeeTPics",
    desc: "An FTP auto-backupper for your projects.\n\nMonitors your project directory for changes then automatically caches and uploads backups at regular intervals.\nFTP implemented with raw websockets",
    collaborators: [
      { name: "Daniel Radloff", url: "https://github.com/Daniel-Radloff" },
    ],
    sources: [
      {
        type: "github",
        url: "https://github.com/Rec1dite/FeeTPics",
      },
    ],
    showcase: [{ caption: "Repo", gh: "Rec1dite/FeeTPics" }],
  },
  "013_splParser": {
    title: "SPL Parser/Compiler",
    year: 2023,
    githubRepo: "Rec1dite/splParser",
    desc: "A top-down recursive-descent parser and compiler for the SPL mock programming language.\n\nCross-compiles to executable BASIC.",
    sources: [
      {
        type: "github",
        url: "https://github.com/Rec1dite/splParser",
      },
    ],
    showcase: [{ caption: "Repo", gh: "Rec1dite/splParser" }],
  },
  "014_cobwebs": {
    title: "Cobwebs",
    year: 2023,
    thumbnailImg: cobwebs_thumb,
    desc: "A collection of small WebGL projects/experiments.\n\nWritten in raw WebGL.",
    sources: [
      {
        type: "website",
        url: "https://rec1dite.github.io/cobwebs/",
      },
      {
        type: "github",
        url: "https://github.com/Rec1dite/cobwebs",
      },
    ],
    showcase: [{ caption: "Repo", gh: "Rec1dite/cobwebs" }],
  },
  "014_knack": {
    title: "Cobwebs",
    year: 2023,
    githubRepo: "Rec1dite/knack",
    desc: "Solving the knapsack problem with a genetic algorithm and ant colony optimization.",
    sources: [
      {
        type: "github",
        url: "https://github.com/Rec1dite/knack",
      },
    ],
    showcase: [{ caption: "Repo", gh: "Rec1dite/knack" }],
  },
};
