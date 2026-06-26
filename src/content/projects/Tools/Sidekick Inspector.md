---
title: "Sidekick Inspector"
order: 6
category: ["Technical Prototype", "Featured"]
summary: "A lightweight Unity Editor extension that adds a custom control to the Inspector header, allowing individual components isolated on a GameObject by toggling their visibility."
thumbnail: "GitHub_Invertocat_White_Clearspace.png"
assetsDir: "Tools/SidekickInspector"
video: ""
demoUrl: "https://github.com/kanbarudesu/Sidekick-Inspector"
tech: ["Unity", "C#", "Tools"]
---

<a href="https://github.com/kanbarudesu/Sidekick-Inspector" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="Github">
</a>

## Development Details

Sidekick Inspector is a Unity Editor extension that improves Inspector workflow by adding tools for component visibility control and component transfer between GameObjects.

The tool allows users to hide or isolate specific components in the Inspector without disabling them, helping reduce visual clutter when working with complex GameObjects. It also includes functionality for copying and pasting components while preserving serialized data.

The system supports multi-object selection to apply operations across multiple GameObjects.

---

## My Tasks

* Created a custom Unity Inspector extension using Unity Editor scripting.
* Implemented a system to toggle component visibility within the Inspector.
* Built component copy and paste functionality with serialized data support.
* Added support for applying operations to multiple selected GameObjects.
* Ensured compatibility with Unity’s serialization and editor lifecycle.

---

## Result

The project provides a set of editor tools for managing components more efficiently in the Inspector, particularly for GameObjects with many components or repeated setup tasks.

It allows users to:

* Hide or isolate components in the Inspector
* Copy and paste components between GameObjects
* Apply actions across multiple selections

The tool is implemented as a Unity Editor extension written in C#.
