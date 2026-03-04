# Authentication

VEED Fabric uses OAuth 2.0 for secure authentication with AI assistants.

## How It Works

1. When you first use a VEED tool, your AI assistant redirects you to VEED's login page
2. Log in with your VEED account (or create one for free)
3. Review and authorize the requested permissions
4. You're returned to your AI assistant with access granted

## Server Endpoint

The VEED Fabric MCP server is available at:

```
https://www.veed.io/api/v1/mcp
```

Use this URL when connecting from any MCP-compatible client. The server supports Streamable HTTP transport.

## Session Duration

Your authorization remains active until you explicitly disconnect the integration.