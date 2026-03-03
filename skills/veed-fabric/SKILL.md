---
name: veed-fabric
description: >-
  Guide for creating AI talking head videos with VEED Fabric MCP tools.
  Use when the user wants to generate videos with AI avatars, browse
  characters or voices, or check video generation status and credits.
license: Apache-2.0
metadata:
  author: veedstudio
  version: "1.0"
---

# VEED Fabric Video Creation

VEED Fabric lets users generate professional talking head videos with AI avatars directly from a conversation. No camera or editing skills required.

## Recommended Workflow

Follow this sequence for the best user experience:

1. **Browse characters** — Call `list_characters` to show the avatar carousel. Let the user pick.
2. **Browse voices** — Call `list_voices` with the appropriate locale. Let the user pick.
3. **Confirm before generating** — Call `confirm_fabric_video` to show cost estimate and parameters. Wait for user confirmation.
4. **Generate the video** — Call `create_fabric_video` only after confirmation.
5. **Check progress** — Call `get_generation_status` with the returned job ID. Videos typically take 1–2 minutes.

Always let the user make selections interactively rather than choosing defaults for them.

## Tool Usage Guide

### list_characters

- Returns AI avatar characters with thumbnails
- Optional `gender` filter: `"male"` or `"female"`
- Displays an interactive carousel widget — let users browse visually
- When the user says "show me characters", call this tool

### list_voices

- Requires `locale` parameter (e.g., `"en"`, `"fr"`, `"es"`, `"en-GB"`)
- Optional `gender` filter: `"Female"`, `"Male"`, or `"Neutral"`
- Displays a voice selector widget with audio previews
- Infer the locale from the user's script language or ask if unclear
- When the user provides a script in a specific language, filter voices to that language

### confirm_fabric_video

- Always call this before `create_fabric_video`
- Shows a confirmation dialog with: script text, selected character, selected voice, credit cost estimate
- Requires `script`, `voiceId`, and `characterId`
- Optional: `aspectRatio` (`"landscape"`, `"portrait"`, `"square"` — defaults to landscape)
- Optional: `workspaceId` (auto-selected if user has only one workspace)
- Do not skip this step — users should always see the cost before generating

### create_fabric_video

- Generates the actual video — consumes credits
- Same parameters as `confirm_fabric_video`
- Only call after the user has confirmed via `confirm_fabric_video`
- Returns a `jobId` for tracking progress

### get_generation_status

- Poll with the `jobId` from `create_fabric_video`
- Status values: `queued` → `processing` → `completed` or `error`
- When complete, displays an inline video player
- If the user asks "is my video ready?", call this tool

### get_credit_balance

- Shows available vs total AI Playground credits
- Optional `workspaceId` parameter
- Useful when the user asks about credits or before a long video

### list_workspaces

- Lists workspaces the user has access to
- No parameters required
- Only needed when the user has multiple workspaces and wants to choose one

## UI Widgets

VEED Fabric provides rich interactive widgets that display automatically when tools are called:

- **Characters Carousel** — visual browsing of avatars (from `list_characters`)
- **Voice Selection** — voice list with audio previews (from `list_voices`)
- **Video Confirmation** — cost breakdown and confirm button (from `confirm_fabric_video`)
- **Video Result** — progress indicator and video player (from `get_generation_status`)

These widgets give users a much better experience than plain text. Prefer calling the tools that trigger them.

## Common User Requests

| User says | What to do |
|-----------|------------|
| "Make me a video" / "Create a video about..." | Full workflow: characters → voices → confirm → create → status |
| "Show me characters" / "What avatars are available?" | Call `list_characters` |
| "What voices do you have?" | Ask for language preference, then call `list_voices` |
| "How many credits do I have?" | Call `get_credit_balance` |
| "Is my video ready?" / "Check my video" | Call `get_generation_status` with the job ID |
| "Make a video in French/Spanish/etc." | Use the same workflow but filter `list_voices` by the appropriate locale |

## Error Handling

- **Insufficient credits** — If `confirm_fabric_video` shows the user doesn't have enough credits, inform them and suggest a shorter script or checking their plan.
- **Generation fails** — If `get_generation_status` returns `error`, let the user know and offer to retry.
- **No voices for locale** — If `list_voices` returns empty, suggest trying a broader locale (e.g., `"en"` instead of `"en-AU"`).
