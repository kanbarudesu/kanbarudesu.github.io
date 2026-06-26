---
title: "Menu System for Unity"
order: 11
category: ["Technical Prototype"]
summary: "A simple Menu System for Unity Engine include with custom tween animation."
thumbnail: "GitHub_Invertocat_White_Clearspace.png"
assetsDir: "Tools/MenuSystem"
video: ""
demoUrl: "https://kanbarudesu.itch.io/menusystem"
tech: ["Unity", "C#", "Tools", "uGUI"]
---

<a href="https://kanbarudesu.itch.io/menusystem" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/View%20on-itch.io-FA5C5C?logo=itchdotio&logoColor=white" alt="Itchio">
</a>

## Development Details

This project is a Unity menu system built using a stack-based navigation approach. It manages UI menus through a central controller that handles opening, closing, and transitioning between menu.

The system uses a singleton-based manager to control menu navigation and maintain a stack of active menus, allowing basic forward and back navigation between UI states. Menu transitions are animated using DOTween to create smooth UI movement.

The design is based on the Unity talk [**“Unite Europe 2017 – Building an easy to use menu system”**](https://www.youtube.com/watch?v=wbmjturGbAQ&ab_channel=Unity), which served as the main reference for the stack-based menu structure.

---

## My Tasks

* Implemented a stack-based menu navigation system.
* Built a singleton menu manager to control menu flow.
* Added menu transition animations using DOTween.
* Structured UI screens to support push/pop navigation.
* Created a custom inspector to improve editor usability.
* Implemented support for custom menu components script for different UI menu.

---

## Result

The project provides a reusable menu system for Unity with stack-based navigation, and animated transitions.

It supports:

* Navigating between menus using a stack system
* Smooth transitions between UI screens
* Easier configuration through a custom inspector

The system is implemented in C# using Unity uGUI, DOTween, and Unity Editor scripting.