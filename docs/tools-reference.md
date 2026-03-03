# Tools Reference

Complete reference for all VEED Fabric MCP tools.

---

## list_characters

List available AI avatars for video generation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| gender | `"male"` \| `"female"` | No | Filter by gender |

**Returns:** Array of characters with id, name, thumbnail URL, and gender.

**Widget:** Displays an interactive carousel for browsing characters.

---

## list_voices

List available voices for video narration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| locale | string | Yes | Language code (e.g., "en", "fr", "es", "de") |
| gender | `"Female"` \| `"Male"` \| `"Neutral"` | No | Filter by voice gender |

**Returns:** Array of voices with id, name, locale, gender, and preview audio URL.

**Widget:** Displays a voice selector with audio previews.

**Examples:**

- `locale: "en"` - All English voices
- `locale: "en-GB"` - British English only
- `locale: "fr", gender: "Female"` - French female voices

---

## confirm_fabric_video

Preview parameters and cost before generating a video.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| script | string | Yes | The text for the avatar to speak |
| voiceId | string | Yes | Voice ID from list_voices |
| characterId | string | Yes | Character ID from list_characters |
| workspaceId | string (UUID) | No | Target workspace (auto-selected if only one) |
| aspectRatio | `"landscape"` \| `"portrait"` \| `"square"` | No | Video dimensions (default: landscape) |

**Returns:** Confirmation details including estimated cost.

**Widget:** Displays confirmation dialog with cost breakdown and confirm button.

---

## create_fabric_video

Generate a talking head video.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| script | string | Yes | The text for the avatar to speak |
| voiceId | string | Yes | Voice ID from list_voices |
| characterId | string | Yes | Character ID from list_characters |
| workspaceId | string (UUID) | No | Target workspace |
| projectId | string (UUID) | No | Existing project or creates new |
| aspectRatio | `"landscape"` \| `"portrait"` \| `"square"` | No | Video dimensions |

**Returns:** Job ID for tracking, workspace ID, and project ID.

**Note:** Consumes AI Playground credits (~8 credits per second of video).

---

## get_generation_status

Check video generation progress and view result.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| jobId | string | Yes | Job ID from create_fabric_video |
| workspaceId | string (UUID) | No | Workspace containing the job |
| balanceBefore | number | No | Credit balance before generation (for cost summary) |

**Returns:** Status (queued, processing, completed, error) and video URL when complete.

**Widget:** Displays progress indicator and video player when complete.

---

## list_workspaces

List workspaces accessible to the current user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | | | |

**Returns:** Array of workspaces with id and name.

---

## get_credit_balance

Check AI Playground credit balance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| workspaceId | string (UUID) | No | Workspace to check (auto-selected if only one) |

**Returns:** Available credits and total credits.

---

# Resources

VEED Fabric exposes interactive UI widgets and server metadata as MCP resources. Widgets are rendered inline in the conversation when their associated tool is called.

---

## Server Information

| Field | Value |
|-------|-------|
| URI | `mcp://server-info` |
| MIME Type | `application/json` |

Returns server metadata including name, version, description, capabilities, and a list of available tools with their parameters.

---

## Characters Carousel

| Field | Value |
|-------|-------|
| URI | `ui://widget/characters-carousel.html` |
| Associated Tool | `list_characters` |

Interactive carousel widget for browsing and selecting AI avatar characters. Displays character thumbnails, names, and gender. The selected character ID is passed to `confirm_fabric_video` or `create_fabric_video`.

---

## Voice Selection

| Field | Value |
|-------|-------|
| URI | `ui://widget/voice-selection.html` |
| Associated Tool | `list_voices` |

Interactive list widget for browsing and previewing available voices. Includes audio preview playback, locale, and gender information. The selected voice ID is passed to `confirm_fabric_video` or `create_fabric_video`.

---

## Video Confirmation

| Field | Value |
|-------|-------|
| URI | `ui://widget/video-confirmation.html` |
| Associated Tool | `confirm_fabric_video` |

Confirmation dialog displayed before video generation. Shows a summary of:
- Script text
- Selected character (name, thumbnail)
- Selected voice (name, locale, gender)
- Target workspace
- Credit balance and estimated cost

Includes a confirm button to proceed with generation.

---

## Video Result

| Field | Value |
|-------|-------|
| URI | `ui://widget/video-result.html` |
| Associated Tool | `get_generation_status` |

Progress indicator and video player widget. Shows real-time generation status (queued, processing, completed) and displays the finished video with an inline player when complete. Also shows credit consumption details.
