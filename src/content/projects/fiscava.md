---
title: Fiscava
summary: Personal finance software that grew out of expense tracking into a broader product for clearer money decisions.
featured: true
flagship: true
status: active
role: Founder, product builder, and engineer
stack:
  - TypeScript
  - React
  - Express
  - MongoDB
  - PWA
tags:
  - finance
  - product
  - side-project
yearStart: 2025
sortOrder: 100
coverImage: /images/projects/fiscava-card.svg
heroImage:
  src: /images/projects/fiscava/dashboard.png
  alt: Fiscava dashboard showing the Ask Fiscava advisor, a suggested next step, and key metrics.
gallery:
  - src: /images/projects/fiscava/insights.png
    alt: Fiscava insights page showing spending health, savings rate, cash balances, and a three-month outlook.
    caption: Insights — spending health, savings rate, cash balances, and a forward outlook. Shown with demo data.
  - src: /images/projects/fiscava/networth.png
    alt: Fiscava net worth page showing assets, liabilities, leverage, and a twelve-month trend.
    caption: Net worth — assets, liabilities, and a twelve-month trend. Shown with demo data.
  - src: /images/projects/fiscava/calendar.png
    alt: Fiscava cashflow calendar showing income and expenses laid out across a month.
    caption: Cashflow calendar — income and bills across the month, colour-coded by net. Shown with demo data.
  - src: /images/projects/fiscava/debt-planner.png
    alt: Fiscava debt planner showing balances, payoff outlook, and the accounts needing attention.
    caption: Debt planner — balances, payoff timeline, and the next account to attack. Shown with demo data.
  - src: /images/projects/fiscava/savings-goals.png
    alt: Fiscava savings goals showing progress toward funded targets.
    caption: Savings goals — progress toward funded targets. Shown with demo data.
links:
  live: https://fiscava.app
---

## Overview

Fiscava grew out of an earlier app of mine called ExpenseFlow, and it has become the most complete thing in this portfolio: a personal-finance product that goes well past expense tracking into a single, decision-oriented view of someone's money. It covers expenses and income, recurring bills, net worth and a full balance sheet, investment portfolios, debt-payoff planning, savings goals, multi-currency, spending forecasts, and an AI advisor that answers real questions about your finances.

It is the flagship app here because it sits exactly where I like to work — serious engineering in service of a product that has to stay clear and trustworthy under daily use. It is a Progressive Web App, currently past version 7, and the project I have put the most sustained product and engineering judgement into.

## The problem

Most finance apps are good at capture and weak at clarity. They will happily store thousands of transactions and still leave you unsure whether you can afford something, whether a subscription quietly crept up, or where you actually stand this month.

Fiscava is built around that gap. The goal is less "log everything" and more "help me see my situation clearly enough to make a decision" — and never show a number I can't trust.

## What it does

- **Tracking that doesn't fight you.** Expenses and income with searchable categories, stores, and payment methods, plus natural-language entry — "$50 on groceries at Aldi yesterday" parses into a structured, confidence-scored transaction, with an offline fallback so it still works without an AI key. Recurring bills can mark themselves paid or auto-pay on schedule, and payslip OCR pulls pay details straight off an uploaded payslip.
- **Insights and forecasts.** Category and trend analysis, a cashflow calendar, and a spending forecast that blends weighted history, fixed recurring commitments, seasonality, and outlier detection to project forward rather than just report the past.
- **Net worth and investments.** A real balance sheet of assets and liabilities, plus investment portfolios with live pricing, allocation, and performance that feed straight into net worth.
- **Debt and savings planning.** A payoff planner with avalanche, snowball, and hybrid strategies, and savings goals with payday and balance-sweep automation rules.
- **Ask Fiscava.** An AI advisor for questions like "can I afford this?" It works out the affordability maths deterministically from your income, debt, and cash flow first, then uses retrieval over your own records so the answer is grounded in real data, not a guess. Bring-your-own-key, OpenAI or Claude, with keys encrypted at rest.
- **Smart actions.** A ranked feed of the next useful thing to do — pay an overdue bill, review a likely duplicate, confirm an import, acknowledge a milestone.
- **Imports.** CSV/OFX import that auto-detects your bank by fingerprinting the file header, with duplicate review and transfer detection.
- **Notifications.** Bill due-soon alerts, goal milestones, and insufficient-funds warnings through an in-app inbox, email digests, and web push.
- **Accounts and security.** Email/password auth with JWT, two-factor authentication, multi-device session management, a security audit log, rate limiting, and invite-gated sign-up — with a Pro tier billed through Stripe.
- **A CLI and agent access.** A published, zero-dependency `fiscava` CLI runs the whole product from the terminal, and scoped, revocable access tokens let AI agents (Claude Code, Cursor, OpenClaw) act on your data through the same API — guarded by dry-run, idempotency keys, and plan-then-commit imports.

## Architecture and engineering

Fiscava is a TypeScript npm-workspaces monorepo: a React 19 + Vite front end, an Express 5 + MongoDB API, a shared types package, and a published, zero-dependency CLI. The web app uses TanStack Query for data, Zustand for local state, and Tailwind, and it ships as a PWA with offline, queue-first writes so you can add an expense with no connection and have it sync later.

The part I am most proud of is the v7 financial engine. Every money-changing operation — create an expense, record a transfer, complete a recurring payment, delete any of them — runs through versioned "event contracts" with idempotency keys and compensating reversals, backed by a recompute-and-replay subsystem with snapshots. Deletes correctly unwind their effects on balances, goals, and debts; retries are safe; and the whole financial state can be rebuilt deterministically. It is gated behind feature flags and parity-tested across code paths.

That rigour runs through the rest of the app: auditable point-in-time exchange-rate snapshots for multi-currency, anti-double-counting rules so transfers and card payments don't inflate totals, and a heavy governance layer — architecture decision records, custom lint rules, layout contracts, and the Playwright visual-regression system that produced the screenshots above.

## Status

Actively developed, past version 7, with a freemium model and the full product surface above running in production.
