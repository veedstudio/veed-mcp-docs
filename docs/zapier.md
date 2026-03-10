# Zapier Setup

Connect VEED Fabric to Zapier to generate AI talking head videos in your workflows.

## Setup

1. Go to [zapier.com/mcp](https://zapier.com/mcp) and log in
2. Click **+ New MCP Server**
3. Enter connection details:
   - **Server URL:** `https://www.veed.io/api/v1/mcp`
   - **Transport:** Streamable HTTP
   - **OAuth:** Yes
4. Click through OAuth flow to authenticate with your VEED account
5. Authorize Zapier to access your workspace

## What You Get

Once connected, Zapier automatically discovers all VEED Fabric tools:

- **create_fabric_video** - Create talking head videos
- **confirm_fabric_video** - Confirmation widget for parameters
- **get_generation_status** - Check video generation progress
- **list_voices** - Browse available voices
- **list_workspaces** - List your workspaces
- **get_credit_balance** - Check your AI credits

## Usage

Ask Zapier's AI to create videos:

- "Make a talking head video introducing our new product"
- "Create a video in Spanish about our company"
- "How many AI credits do I have left?"

See [Authentication](./authentication) for more details.

## Costs

- **Zapier:** 2 Zapier tasks per MCP tool call (counts toward your Zapier plan)
- **VEED:** AI Playground credits (per video generation)
- Available on all Zapier plans (Free, Starter, Professional, Team, Company)

## Troubleshooting

### Connection Issues

If you can't connect to the MCP server:
- Verify the server URL: `https://www.veed.io/api/v1/mcp`
- Ensure transport is set to **Streamable HTTP**
- Check that OAuth is enabled

### Authentication Errors

If OAuth fails:
- Clear browser cookies and try again
- Make sure you're using a VEED account with an active workspace
- Check that your VEED account has AI Playground credits

### Tool Discovery

If tools don't appear:
- Disconnect and reconnect the MCP server
- Verify your VEED account is authenticated
- Check Zapier's MCP connection status

Need help? Contact support at hello@veed.io
