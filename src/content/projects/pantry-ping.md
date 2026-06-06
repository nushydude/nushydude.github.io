---
title: pantry-ping
summary: A household shopping list and pantry app designed around recurring staples, stock state, and everyday domestic friction.
featured: true
status: active
role: Product designer and engineer
stack:
  - TypeScript
  - Next.js
  - Supabase
  - Drizzle
  - PWA
tags:
  - household
  - product
  - ux
yearStart: 2026
sortOrder: 80
coverImage: /images/projects/pantry-ping-card.svg
heroImage:
  src: /images/projects/pantry-ping/final-renderings.jpg
  alt: pantry-ping mobile design render showing the grocery list flow.
gallery:
  - src: /images/projects/pantry-ping/final-renderings.jpg
    alt: pantry-ping mobile render showing the main list experience.
    caption: Current product rendering from the pantry-ping repo.
  - src: /images/projects/pantry-ping/tripmode.jpg
    alt: pantry-ping mobile render showing an alternate pantry-ping flow.
    caption: Supporting design render from ongoing pantry-ping work.
links:
  live: https://pantry-ping.vercel.app
  repo: https://github.com/nushydude/pantry-ping
---

## Overview

pantry-ping is a shared household shopping-list and pantry app, built as an installable, mobile-first PWA. It started from a very ordinary problem — keeping a household stocked without the job turning into admin — and grew into a real-time shared list layered with pantry tracking, recurring staples, in-store "trip mode", receipt reconciliation, price memory, and an optional AI assistant.

## The problem

Most shopping-list apps are fine at being lists and weak at being systems. The hard parts are the repeated edges: recurring staples, pantry stock, duplicate items, and shared context between the people actually running the house. The principle I kept coming back to — and wrote down in the repo's decision notes — is that every pantry app dies of update friction. So pantry tracking is kept deliberately lightweight, and recurring items regenerate themselves rather than being re-added every week.

## What it does

- **Real-time shared list.** Household-scoped items with quantity, note, category, priority, and assignee, edited live by several people at once, with optimistic updates and undo.
- **Smart duplicate handling.** Item names are normalised, so adding something already on the list is caught and rejected instead of silently duplicated.
- **Automatic categorisation.** A rules engine maps grocery names to aisles — produce, dairy, bakery, frozen, household, and so on — so the list groups itself.
- **Pantry and recurring staples.** Lightweight in-stock and expiry tracking, plus recurring templates that regenerate due items on a schedule — guarded by a database lock so two people opening the app at once can't double-add.
- **Trip mode.** An in-store view with bigger tap targets, aisle grouping per store, and a bulk archive at the end of a shop, with optional learning of each store's aisle order.
- **Receipts, prices, and meal plans.** Post-trip receipt reconciliation with on-device OCR, price memory feeding budget estimates, and a simple meal planner.
- **An assistant you control.** A bring-your-own-key, natural-language assistant that turns "add milk and pause the bread staple" into a strict confirm-then-execute plan, plus voice add and barcode scanning.

## Architecture

pantry-ping is a pnpm + Turborepo monorepo: a Next.js 15 (App Router) + React 19 web app, a shared contracts package, a Drizzle/Postgres schema on Supabase, and an MCP server. Auth is Supabase magic-link for people and hashed bearer tokens for agents, and realtime updates come from Supabase postgres-changes. Offline is handled properly — an IndexedDB outbox queues changes and resolves conflicts on reconnect — and it installs as a PWA, hosted on Vercel.

The two decisions I like most are the agent-native design (the MCP server exposes the household as a set of tools, so an AI agent can operate the list over the same API the app uses) and the discipline of shipping deliberately narrow versions of features to avoid the update-friction trap.

## Status

Feature-complete for a real two-person household and in daily use, with production-grade foundations — row-level security, structured logging, rate limiting, and an offline-first sync layer.
