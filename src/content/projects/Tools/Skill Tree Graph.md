---
title: "Skill Tree Graph"
order: 1
category: ["Technical Prototype", "Featured"]
summary: "A node-based Skill Tree editor for Unity that allows developers to visually create, connect, and manage skill trees directly inside the Unity Editor."
thumbnail: "GitHub_Invertocat_White_Clearspace.png"
assetsDir: "Tools/SkillTreeGraph"
video: ""
demoUrl: "https://github.com/kanbarudesu/SkillTree-Graph"
tech: ["Unity", "C#", "Tools", "UI Toolkit", "ScriptableObjects"]
---

<a href="https://github.com/kanbarudesu/SkillTree-Graph" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="Github">
</a>

## Development Details

Skill Tree Graph is a Unity-based framework for creating and managing skill trees through a visual node editor. The project was designed to provide a flexible and scalable solution for skill progression systems while remaining easy to extend for different game genres and requirements.

The system consists of two major parts:

* A custom Unity Editor tool for creating and managing skill trees visually.
* A runtime framework that handles skill unlocking, progression, effects, costs, and save data.

To support long-term scalability, the architecture separates editor tooling, data serialization, and runtime execution. Skills are represented as graph nodes connected through prerequisite relationships, allowing designers to build complex progression paths without modifying code.

The framework also includes:

* JSON-based graph serialization.
* ScriptableObject integration.
* Modular skill effects and unlock conditions.
* Extensible cost and save systems.

---

## My Tasks

### Designed the Node-Based Skill Tree Editor

Developed a custom Unity Editor window that allows users to create, connect, move, and organize skill nodes through a visual graph interface.

### Implemented Graph Data Management

Created systems for storing node relationships, validating graph connections, and maintaining skill dependency structures.

### Developed Serialization Pipeline

Implemented JSON serialization and deserialization to persist graph data while supporting export workflows for runtime usage.

### Built the Runtime Skill System

Created the runtime architecture responsible for:

* Skill unlocking validation
* Progression tracking
* Skill effect execution
* Resource cost evaluation

### Created an Extensible Framework

Designed abstract base classes and interfaces that allow developers to create:

* Custom skill effects
* Custom unlock conditions
* Custom resource costs
* Custom save providers

without modifying the core framework.

### Integrated UI Animation Support

Implemented a optional custom animation system using DOTween to support runtime skill tree interfaces.

### Focused on Reusability

Structured the project as a reusable framework rather than a game-specific implementation, enabling integration into multiple projects with different gameplay requirements.

---

## Result

Successfully developed a complete skill tree framework that combines editor tooling and runtime functionality within a single package.

Key outcomes include:

* Visual node-based workflow for rapid skill tree creation.
* Data-driven architecture that separates content from implementation.
* Flexible extension points for custom gameplay mechanics.
* Multiple persistence options through configurable save systems.
* Reduced development time for future RPG progression systems.
* Reusable framework suitable for RPG, strategy, and progression-focused games.

The project demonstrates experience in Unity Editor scripting, graph-based systems, runtime architecture design, serialization, and scalable game framework development.
