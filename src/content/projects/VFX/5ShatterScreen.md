---
title: "Shatter Screen Effect"
order: 13
category: ["VFX"]
summary: "A screen transition effect."
thumbnail: ""
assetsDir: "VFX/ShatterScreen"
video: "shatterscreen.mp4"
demoUrl: "https://www.artstation.com/artwork/BXdN1z"
tech: ["Unity", "Shader Graph", "Blender", "Particle System", "Photoshop"]
---

<a href="https://www.artstation.com/artwork/BXdN1z" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/View%20on-ArtStation-13AFF0?logo=artstation&logoColor=white" alt="ArtStation">
</a>

## Overview
A screen transition effect inspired by weekly bosses All-Devouring Narwhal scene transitions in Genshin Impact, designed to simulate a shattering screen reveal.

I made the breaking mesh and animation in Blender, then I created a custom Shader Graph in Unity to sample the screen color into a texture and apply it to the mesh. I also created textures in Photoshop for multiple particle systems used to support the shatter effect transition. The breaking mesh is then used as a mask to reveal the next scene or area.