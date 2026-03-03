import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VEED Fabric MCP',
  description: 'Documentation for the VEED Fabric MCP Server — AI Talking Video Generator',
  base: '/veed-mcp-docs/',
  head: [
    ['link', { rel: 'icon', href: 'https://www.google.com/s2/favicons?domain=veed.io&sz=64' }],
  ],
  themeConfig: {
    logo: 'https://www.google.com/s2/favicons?domain=veed.io&sz=64',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools & Resources Reference', link: '/tools-reference' },
      { text: 'Examples', link: '/examples' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Authentication', link: '/authentication' },
        ],
      },
      {
        text: 'Platform Setup',
        items: [
          { text: 'Supported Platforms', link: '/chat-agents' },
          { text: 'Claude', link: '/claude' },
          { text: 'ChatGPT', link: '/chatgpt' },
          { text: 'Goose', link: '/goose' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Usage Examples', link: '/examples' },
          { text: 'Tools & Resources Reference', link: '/tools-reference' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/veedstudio/veed-mcp-docs' },
    ],
    footer: {
      message: '<a href="https://www.veed.io/privacy">Privacy Policy</a> · <a href="https://www.veed.io/terms-of-use">Terms of Service</a>',
      copyright: '© 2024-present VEED',
    },
  },
})
