---
title: LightFrame
summary: A fast, Windows-first desktop image viewer and photo-review app built with Tauri, React, and Rust — quick startup and real curation tools without the bloat.
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

LightFrame is a fast, Windows-first desktop image viewer and photo-review app, built with Tauri v2, React, and Rust. It exists to replace the bloated default OS viewer with something that starts instantly, moves through a folder without stutter, and gives you real curation tools — without turning into a full photo manager. It is open source, so anyone can use it or contribute.

## Why it exists

Opening and moving through images is something people do constantly, yet the usual tools are slow, cluttered, or awkward. I wanted IrfanView-class responsiveness — instant startup and keyboard navigation that never lags, even on huge files — wrapped in a clean, zero-distraction interface that can still handle a real review-and-cull session.

## What it does

- **Fast, keyboard-first viewing.** Rust-powered folder scanning with cached folder indexes and adjacent-image preloading makes navigation feel instant. Open from drag-and-drop, the command line, or a file association; sort by name (natural order, so `image2` comes before `image10`), date, size, or random; and pan, zoom, and go fullscreen with the mouse or keyboard — over a clean UI with dark and light themes.
- **Built for big folders and big images.** Large files render a generated preview first, then load full resolution; very large JPEGs use cached viewport tiles for actual-size deep zoom; and huge non-JPEG files stay preview-first to avoid unsafe decodes. A thumbnail strip and a virtualised contact-sheet grid keep large folders smooth, and Fast / Balanced / Low Memory performance modes tune the bounded in-memory caches to your machine.
- **Photo triage and curation.** Favourites, 0–5 star ratings, curation filters, saved review presets, and a side-by-side compare mode — plus bulk selection in the contact sheet for batch favourite/rating changes and quick copy/move — so you can actually review and cull a shoot, not just look at one image.
- **Editing and file actions in place.** Crop (preview, copy, or overwrite), rotation preview/save, high-quality scaled export, and a retryable background queue for crop/scale jobs, alongside everyday file actions: configurable quick-destination folders, external-editor launch, reveal in the file manager, copy to clipboard, and move to trash.
- **Format support that leans on the OS.** Standard formats (JPEG, PNG, WebP, GIF, BMP, TIFF, AVIF, SVG) plus HEIC/HEIF and a wide range of RAW files. On Windows, HEIC/HEIF and RAW previews, thumbnails, and tiled detail use the Windows Imaging Component when the matching codecs are installed, with clear placeholders when they aren't; XMP sidecar metadata shows in the EXIF/info panel for RAW workflows.
- **Built for second screens.** A projector mode opens a synced fullscreen window on a second display for reviewing with someone else, alongside slideshow controls, configurable mouse-wheel behaviour, persistent window bounds, and default fit modes.

## Architecture

A Tauri v2 shell wraps a React + Zustand front end over Rust commands that own the filesystem and image work. That split keeps the UI responsive while pushing the heavy lifting — folder scanning and watching, decoding, and preview/tile generation — into Rust, which is where the speed comes from. Folder contents stay live through a filesystem watcher backed by a persistent index, the decode pipeline is preview-first with bounded caches, and on Windows it defers to the OS for HEIC/HEIF and RAW codecs via the Windows Imaging Component. Updates are delivered through the Tauri updater plugin, and the codebase uses cross-platform Tauri throughout even though release builds currently ship Windows packages only.

## Why it's interesting

Small utilities still have real product decisions in them. Startup speed, how folder navigation feels, how zoom behaves, and how sorting, rating, and triage work matter far more here than a long feature list — and they are exactly the things a generic viewer tends to get wrong.

## Status

Actively released (currently v7.11.0) as a public, open-source, Windows-first app, with installers on the GitHub Releases page; the codebase is cross-platform Tauri, but release builds currently target Windows only. The images above are concept mock-ups standing in until captured app screenshots are added.
