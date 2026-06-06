---
title: crypto-stdev
summary: A statistics-driven crypto decision-support and DCA tool — transparent accumulate/trim signals, cycle-risk reads, and dip-based targets, without pretending certainty.
featured: true
status: maintained
role: Builder and iterative product owner
stack:
  - TypeScript
  - React
  - Express
  - MongoDB
  - MCP
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
  - src: /images/projects/crypto-stdev/single-token.svg
    alt: crypto-stdev single-token analysis mock-up showing the signal verdict and contributing factors.
    caption: Single-token analysis — target vs spot, the action verdict, and the factors behind it. Sample data.
links:
  live: https://crypto-stdev-cra.vercel.app/
  repo: https://github.com/nushydude/crypto-stdev
---

## Overview

crypto-stdev is a decision-support tool for dollar-cost averaging into crypto. It turns raw market data into transparent, statistics-driven guidance — accumulate / trim / hold calls, a per-coin "cycle risk" read, and statistically-derived target prices — for a single portfolio.

The defining principle is decision support without false certainty. Every call ships with the exact threshold that produced it, a plain "why this call?" explanation, an explicit model version so signals from different versions are never compared, and honest low-confidence or empty states whenever there isn't enough history to trust a number.

## The problem

DCA investors tend to fail in one of two ways: buying mechanically regardless of price, or over-trading on gut feel and hype. crypto-stdev aims for the harder middle — one clear, evidence-backed read on each pair ("add, trim, or sit tight, and where are we in the cycle?") that never overstates how sure it is.

## What it does

- **Signals dashboard.** One card per pair in your DCA universe, each with a colour-coded action (buy / accumulate / trim / sell / hold), a conviction percentage and confidence level, a cycle-risk traffic-light bar, and the top contributing factors. A market-regime banner and a "things to do" panel sit above the cards.
- **Best DCA.** A ranked list of the pairs most worth buying right now — computed by comparing spot price to a statistical target and surfacing the deepest dips first.
- **Single-token analysis.** Price visualisation, the computed target versus spot, distance from target, and an instant "buy the dip?" read.
- **Portfolio, transactions, and tax.** A ledger with cost basis, realised and unrealised P/L, allocation, rebalance hints, a per-coin targets editor, and tax-lot export.
- **Market context.** A risk-on / risk-off / neutral regime badge, halving-cycle and altseason views, and the Bitcoin Fear &amp; Greed index.

## How the signals work

Each signal is a pure function over price and volume history, the current spot, and your position, returning a value, a weight, and a direction. The factors are deliberately named and explainable rather than pretending to reproduce proprietary models: mean-minus-sigma (how far below a trailing statistical floor the price is trading), RSI-14, Bollinger lower-band breaks, volume-spike capitulation, drawdown-from-high, and trend breaks, plus position-aware factors like target-hit and allocation drift.

An aggregator sums each direction's weighted votes and normalises by the total weight — so a missing-data factor can't inflate confidence — then maps the result through fixed thresholds into the action buckets, with confidence set by how many factors actually agree. Separately, a set of long-horizon cycle factors (Mayer multiple, Pi-cycle, 200-week SMA, MVRV, Puell) feed only the cycle-risk score, and a log-price regression band reports where price sits within its own trend as a percentile. A backtest harness replays history bar by bar with no look-ahead and reports hit rate, P/L distribution, a Sharpe approximation, and a calibration curve.

## Architecture

crypto-stdev is a microservice-style system on Vercel. A public API gateway is the only browser-facing surface and owns market data and the signal engine; separate auth and user services sit behind a shared gateway key; and an MCP server exposes the account as a set of read and write tools, so an AI agent can query signals or record transactions — with personal access tokens exchanged for short-lived JWTs and every mutation audit-logged. The front end is React + TypeScript on Vite with TanStack Query and Chart.js; data comes from Binance, CoinGecko, alternative.me, and on-chain sources.

## Status

Live in production and actively maintained, with the signal model, the backtesting harness, and MCP agent access all in place. The screenshots above use sample data in place of real holdings.
