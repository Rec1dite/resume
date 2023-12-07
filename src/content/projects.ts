import type { ProjectData } from "../lib/Main/ProjectModal.svelte";
import blix_screenshot1 from "../content/projects/blix/screenshot1.png";
import ceevee_blenderScene from "../content/projects/ceevee/blenderScene.png";
import hashed_concept from "../content/projects/hashed/concept.jpg";
import hashed_thumb from "../content/projects/hashed/thumb.jpg";
import artSurvival_thumb from "../content/projects/artSurvival/thumb.jpg";
import artSurvival_conceptFpv from "../content/projects/artSurvival/concept_fpv.jpg";
import artSurvival_conceptItems1 from "../content/projects/artSurvival/concept_items1.jpg";
import artSurvival_conceptItems2 from "../content/projects/artSurvival/concept_items2.jpg";
import artSurvival_conceptPoster from "../content/projects/artSurvival/concept_poster.jpg";

export const projects: { [key: string]: ProjectData } = {
    "001_blix": {
        title: "Blix",
        year: 2023,
        desc: "Blix is an extensible AI-assisted graph editor.\n\nBlix is a cross-platform desktop application designed for power through extensibility. It provides a composable node-based system that establishes a common ground to facilitate collaborative human/AI media editing workflows.",
        thumbnailImg: blix_screenshot1,
        sources: [
            {
                type: "github",
                url: "https://github.com/BlixEditor/blix"
            },
            {
                type: "website",
                url: "https://the-spanishinquisition.github.io/blix-site"
            }
        ],
        collaborators: [
            { name: "Armand Krynauw", url: "https://github.com/ArmandKrynauw" },
            { name: "Francois Combrinck", url: "https://github.com/CenturionLC" },
            { name: "Jake Mileham", url: "https://github.com/SharkmanZA" },
            { name: "Karel Olwage", url: "https://github.com/Klairgo" }
        ],
        showcase: [
            { caption: "Demo vid", yt: "7y2TohRtZDU" },
            { caption: "Editor screenshot", img: blix_screenshot1 },
        ]
    },
    "002_ceevee": {
        title: "CeeVee",
        year: 2021,
        desc: "Home-made 3D graphics engine.\n\nCeeVee is a 3D graphics engine written in C++ from the ground-up.\nIt's original purpose was to serve as platform for me to learn the fundamentals of low-level 3D graphics, however for fun I decided to take it a step further and built it into a kind of 'interactive resume'.\n\nFeatures include:\n- Support for Wavefront .obj/.mtl 3D model files\n- Extended custom-made file format for defining object modifiers, useful for stuff like looping animations and pre-defined movement paths\n- WASDQE camera controller\n- Splineable camera controller\n- Depth buffer generation\n- Auto mip-mapping for textures\n- 2D billboard objects\n- Animated textures\n\n As mentioned above I also built a custom Blender plugin to allow me to export my Blender scenes to CeeVee's custom format. All 3D models and textures scene were created by me.",
        thumbnailImg: ceevee_blenderScene,
        sources: [{
                type: "github",
                url: "https://github.com/Rec1dite/CeeVee"
        }],
        showcase: [
            { caption: "Demo vid", yt: "EzvPQZdXQwA" },
            { caption: "Blender project screenshot working with custom exporter add-on", img: ceevee_blenderScene },
        ]
    },
    "003_hashed": {
        title: "Hashed",
        year: 2020,
        desc: "My 24hour matric art exam final\n\nThe concept was for the piece to be a VR experience taking the viewer through a cyber-dystopian Orwellian society, mechanized and devoid of free-will.\n\nAll assets were 3D modelled/textured by me. Made in Unity using the XR Interaction Toolkit with custom scripts for object interaction and scene navigation.",
        thumbnailImg: hashed_thumb,
        showcase: [
            { caption: "Demo playthrough", yt: "IwsaaEb6UEQ" },
            { caption: "Original concept drawing", img: hashed_concept },
        ]
    },
    "004_artSurvival": {
        title: "ART: Survival",
        desc: "This was one of my matric visual art final pieces, designed to be a partially-gamified exploration of VR interactions.\n\nThe primary focus was to allow the player to mess around with a bunch of interesting VR trinkets and weapons in a cyber-classroom environment.\nThe scene was designed to be a parody of the art room environment at my school, where you take the role of the teacher who must fend off angry cyborg art students after you've given them failing grades.\n\nAll assets were 3D modelled/textured by me. Made in Unity using the XR Interaction Toolkit with custom scripts for object interaction and scene navigation.",
        thumbnailImg: artSurvival_thumb,
        showcase: [
            { caption: "Demo playthrough", yt: "KxiY5wFny6s" },
            { caption: "Main boss animation", yt: "KyQCT3VagTc" },
            { caption: "Student enemy animantion", yt: "B1-q8d8WsP4" },
            { caption: "First-person view concept sketch", img: artSurvival_conceptFpv, },
            { caption: "Items concept sketch", img: artSurvival_conceptItems1, },
            { caption: "Items concept sketch", img: artSurvival_conceptItems2, },
            { caption: "Concept poster sketch", img: artSurvival_conceptPoster, }
        ]
    },
    "005_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
    "006_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
    "007_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
    "008_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
    "009_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
    "010_": {
        title: "TODO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnailImg: "https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max",
    },
};