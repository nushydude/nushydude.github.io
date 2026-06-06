---
title: crypto-stdev
summary: A crypto decision-support project that combines portfolio views, alerts, and market context without pretending certainty.
featured: true
status: maintained
role: Builder and iterative product owner
stack:
  - TypeScript
  - JavaScript
  - Market signals
  - Portfolio tooling
tags:
  - crypto
  - analytics
  - product
yearStart: 2022
sortOrder: 70
coverImage: /images/projects/crypto-stdev-card.svg
heroImage:
  src: /images/projects/crypto-stdev/dashboard.svg
  alt: crypto-stdev dashboard mock-up showing portfolio totals and per-token signals with sample data.
gallery:
  - src: /images/projects/crypto-stdev/dashboard.svg
    alt: crypto-stdev dashboard mock-up with portfolio KPIs and accumulate/trim signals.
    caption: Signals dashboard — illustrative sample portfolio values in place of real holdings.
  - src: /images/projects/crypto-stdev/best-dca.svg
    alt: crypto-stdev Best DCA mock-up showing target versus spot price per token.
    caption: Best DCA view — sample target and spot prices, not live market data.
links:
  live: https://crypto-stdev-cra.vercel.app/
  repo: https://github.com/nushydude/crypto-stdev
---

## Overview

crypto-stdev is an attempt to make noisy market information more usable. The product combines portfolio summaries, alerts, and broader context into one decision-support surface.

## Problem

Crypto tools usually lean too hard in one of two directions: raw data overload or shallow hype. The useful middle ground is harder. You need enough context to support judgement without turning the product into a false oracle.

## What I built

The project has gone through multiple iterations around signals, monitoring, and portfolio views. A lot of the design work has been about deciding what to surface, what to suppress, and how to make uncertainty visible rather than quietly hiding it.

## What makes it interesting

The hard part is product honesty. Data is easy to accumulate. Deciding which parts matter, and how to present them without encouraging bad confidence, is where the work gets interesting.
