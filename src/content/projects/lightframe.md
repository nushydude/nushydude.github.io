---
title: LightFrame
summary: A fast desktop image viewer built with Tauri, React, and Rust to avoid the usual bloated default viewer experience.
featured: true
status: active
role: Solo builder
stack:
  - TypeScript
  - React
  - Rust
  - Tauri
tags:
  - utility
  - desktop
  - imaging
yearStart: 2026
sortOrder: 60
coverImage: /images/projects/lightframe-card.svg
heroImage:
  src: /images/projects/lightframe/workspace-view.svg
  alt: LightFrame concept UI showing a desktop image viewer workspace.
gallery:
  - src: /images/projects/lightframe/workspace-view.svg
    alt: LightFrame concept image showing the main workspace.
    caption: A generated product mock to hold the place until captured app screenshots are available.
  - src: /images/projects/lightframe/folder-strip.svg
    alt: LightFrame concept image showing a fast folder browsing workflow.
    caption: A second generated mock showing the folder and filmstrip interaction.
links:
  download: https://github.com/nushydude/lightframe/releases
  repo: https://github.com/nushydude/lightframe
---

## Overview

LightFrame is a blazingly fast, minimal desktop image viewer for Windows, built with Tauri v2, React, and Rust. It exists to replace the bloated default OS viewer with something that starts instantly, moves through a folder without stutter, and otherwise gets out of the way. It is open source, so anyone can use it or contribute.

## Why it exists

Opening and moving through images is something people do constantly, yet the usual tools are slow, cluttered, or awkward. I wanted IrfanView-class responsiveness — instant startup and keyboard navigation that never lags, even on huge files — wrapped in a clean, zero-distraction interface.

## What it does

- **Fast, keyboard-first viewing.** Rust-powered folder scanning and debounced background loading make navigation feel instant. Drag in a single image or a whole folder, sort by name (natural order, so `image2` comes before `image10`), date, size, or random, and pan and zoom with the mouse or shortcuts — over a disappearing-chrome UI with dark and light themes.
- **Built for big images.** Large files render a generated preview first, then request full-resolution pixels; very large JPEGs use cached viewport tiles for actual-size and deep-zoom inspection; and huge PNG, TIFF, AVIF, HEIC, and SVG files stay preview-first to avoid unsafe full-image decodes. Preview, thumbnail, and image work runs through shared, budgeted, prioritised queues.
- **Photo triage and curation.** Favourites, star ratings, a favourites-only review pass, a side-by-side compare mode, and copy/move actions straight from the viewer or grid — for actually culling a folder, not just looking at one image.
- **Editing in place.** Crop and crop-overwrite, lossless JPEG rotation, high-quality scaled export, pending edits, and external-editor launch, plus a background queue that batches scaled and cropped copy jobs.
- **Codec support that leans on the OS.** When the Windows codec is installed, HEIC/HEIF previews and tiled detail are generated through the Windows Imaging Component, with clear placeholders when it isn't; common RAW files surface in review folders with XMP sidecar metadata and native preview/thumbnail attempts.
- **Viewer polish.** Projector mode, slideshow controls, a command palette, mouse-wheel navigation, persistent window bounds, and configurable default fit modes.

## Architecture

A Tauri v2 shell wraps a React front end over Rust-backed filesystem and image work. That split keeps the UI responsive while pushing the heavy lifting — folder scanning, decoding, and preview/tile generation — into Rust, which is where the speed comes from. Folder contents stay live through a filesystem watcher backed by a persistent index, and the decode pipeline is preview-first with shared, budgeted worker queues. On Windows it defers to the OS for HEIC/HEIF and RAW codecs via the Windows Imaging Component. It ships as a Windows installer through GitHub Releases.

## Why it's interesting

Small utilities still have real product decisions in them. Startup speed, how folder navigation feels, how zoom behaves, and how sorting and triage work matter far more here than a long feature list — and they are exactly the things a generic viewer tends to get wrong.

## Status

Actively released (currently v7.11) as a public, open-source Windows app, with installers on the GitHub Releases page. The images above are concept mock-ups standing in until captured app screenshots are added.
