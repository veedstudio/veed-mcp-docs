# Goose Setup

Connect VEED Fabric to Goose to generate AI talking head videos.

## Setup

1. Follow the [Goose installation instructions](https://block.github.io/goose/docs/getting-started/installation/)
2. Connect a provider (e.g., Vertex AI, OpenAI, or Anthropic)
3. Go to **Extensions** -> **Add custom**
   - Type: Streamable HTTP
   - Endpoint: `https://www.veed.io/api/v1/mcp`
4. Log in with your VEED account when prompted
5. Authorize Goose to access your workspace

## Usage

Once connected, ask Goose to create videos:

- "Create a talking head video introducing my product"
- "How many credits do I have?"
- "Make a video in German"

See [Authentication](./authentication) for more details.
