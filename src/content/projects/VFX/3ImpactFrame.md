---
title: "Impact Frame Effect - Unity 6 URP"
order: 5
category: ["VFX", "Featured"]
summary: "An impact frame effect made using Custom renderer feature in Unity 6 that captures scene color."
thumbnail: ""
assetsDir: "VFX/ImpactFrame"
video: "1-frameimpact003.mp4"
demoUrl: "https://www.artstation.com/artwork/1NZNBq"
tech: ["Unity", "C#", "Renderer Feature", "Shader Graph", "Particle System"]
---

<a href="https://www.artstation.com/artwork/1NZNBq" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/View%20on-ArtStation-13AFF0?logo=artstation&logoColor=white" alt="ArtStation">
</a>

## Overview
Custom renderer feature in Unity 6 that captures scene color after transparent rendering into a global texture. This enables Shader Graph and particle systems to access full scene data, including transparent objects.

I used the custom renderer feature to create an impact frame effect and it is reusable for other screen-space effects like distortion.

Render feature source code [here](https://gist.github.com/kanbarudesu/db1b64f9361232d122da91808c45ccdd)