# Agent Skill

## What is an Agent Skill?

An Agent Skill is a modular set of instructions that teaches AI assistants best practices for using VEED Fabric tools. Skills follow the open [Agent Skills spec](https://agentskills.io/specification), making them portable across platforms and tooling.

## What the VEED Fabric Skill Includes

The `veed-fabric-skill` skill provides:

- **Recommended workflow** — step-by-step guide for creating talking head videos (browse characters → pick voice → confirm → generate → check status)
- **Tool usage tips** — parameter guidance, required vs optional fields, and common pitfalls for each VEED Fabric tool
- **Common patterns** — maps natural user requests ("make me a video", "show me characters") to the right tool calls
- **Error handling** — how to handle insufficient credits, generation failures, and missing voice locales

## Installation

### Claude Code

Clone the repo and copy the skill folder:

```bash
git clone https://github.com/veedstudio/veed-fabric-mcp.git
# Personal (available in all projects)
cp -r veed-fabric-mcp/skills/veed-fabric-skill ~/.claude/skills/
# Or project-level (shared with collaborators)
cp -r veed-fabric-mcp/skills/veed-fabric-skill .claude/skills/
```

### Claude.ai

1. Download the [`skills/veed-fabric-skill/`](https://github.com/veedstudio/veed-fabric-mcp/tree/main/skills/veed-fabric-skill) folder as a zip
2. Go to **Settings > Features** in Claude.ai
3. Upload the skill

### Claude API

Upload via the skills endpoint:

```bash
curl -X POST https://api.anthropic.com/v1/skills \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "content-type: application/json" \
  -d '{"skill_id": "veed-fabric-skill"}'
```

### npm

```bash
npm install veed-fabric-skill
```

The package is published with the `agent-skill` keyword for discoverability.

### skillpm

```bash
skillpm install veed-fabric-skill
```

Auto-discovered via the `agent-skill` keyword on npm.

### skild

```bash
skild install veed-fabric-skill
```

Published to the [skild.sh](https://skild.sh) registry.

### Other Compatible Tools

The skill follows the open [Agent Skills spec](https://agentskills.io). Any tool that supports the spec can install and use the skill. See the [specification](https://agentskills.io/specification) for details.

## Source

The skill source is available on GitHub: [`veedstudio/veed-fabric-mcp/skills/veed-fabric-skill`](https://github.com/veedstudio/veed-fabric-mcp/tree/main/skills/veed-fabric-skill)
