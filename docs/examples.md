# Usage Examples

These examples demonstrate common workflows with VEED Fabric.

---

## Example 1: Create a Talking Head Video

Generate a video with an AI avatar speaking your script.

**User:** "Create a talking head video saying 'Welcome to our channel! Today
we're going to learn about AI video generation.'"

**What happens:**

1. AI shows a carousel of available characters
2. You select an avatar
3. AI shows available English voices
4. You select a voice
5. AI shows confirmation with cost estimate
6. You confirm
7. Video generates (typically 1-2 minutes)
8. AI displays the playable video

**Tools used:** `list_characters` -> `list_voices` -> `confirm_fabric_video` ->
`create_fabric_video` -> `get_generation_status`

---

## Example 2: Check Credits Before Generating

Understand costs before committing to video generation.

**User:** "How many credits do I have? I want to make a 30-second promo video."

**What happens:**

1. AI checks your credit balance
2. AI explains: "You have 500 credits. A 30-second video costs approximately
   240 credits."
3. You provide the script
4. AI guides you through character and voice selection
5. Confirmation widget shows exact cost estimate
6. You confirm and video generates

**Tools used:** `get_credit_balance` -> `list_characters` -> `list_voices` ->
`confirm_fabric_video` -> `create_fabric_video` -> `get_generation_status`

---

## Example 3: Create a Video in Another Language

Generate content in French, Spanish, German, and more.

**User:** "Create a video in French: 'Bonjour et bienvenue sur notre chaîne!'"

**What happens:**

1. AI shows the character carousel
2. You select an avatar
3. AI shows French voices (filtered by locale "fr")
4. You select a French voice
5. AI shows confirmation with cost estimate
6. You confirm
7. Video generates with French narration

**Tools used:** `list_characters` -> `list_voices` (locale: "fr") ->
`confirm_fabric_video` -> `create_fabric_video` -> `get_generation_status`

---

## Tips for Best Results

- **Be specific about language and gender** - Mention the language and preferred
  voice gender upfront so the AI filters voices appropriately
- **Check credits first** - For longer videos, verify you have enough credits
- **Keep scripts concise** - Shorter scripts generate faster and cost less
- **Review before confirming** - The confirmation widget shows all parameters
  and estimated cost
