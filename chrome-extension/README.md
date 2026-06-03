# Chrome Extension — Brainly AI Companion

A Manifest V3 Chrome Extension with a **Side Panel** that lets users save links directly to their Brainly AI Vault while browsing the web.

## Architecture

```
chrome-extension/
├── manifest.json      # Manifest V3 config (permissions, side_panel)
├── background.js      # Service worker — opens side panel on icon click
├── sidepanel.html     # Side panel HTML form (Title, URL, Tags, Settings)
├── sidepanel.css      # Premium light-themed styles
└── sidepanel.js       # Controller logic (tab prefill, storage, API calls)
```

## How It Works

1. User clicks the extension icon → side panel opens in the browser sidebar
2. The panel **auto-fills** the current tab's title and URL
3. User can optionally add tags (press Enter after each tag)
4. Clicking "Save to Vault" sends a `POST` request to the web app's `/api/save` endpoint
5. Authentication uses a **Sync Key** (Clerk User ID) stored in `chrome.storage.local`

## Authentication Flow

The extension does NOT use Clerk session cookies. Instead, it uses a simple token-based approach:

```
Extension                         Web App
   │                                 │
   │  1. User copies Sync Key        │
   │     from /dashboard/settings    │
   │  ◄──────────────────────────    │
   │                                 │
   │  2. Pastes key in extension     │
   │     settings panel              │
   │                                 │
   │  3. POST /api/save              │
   │     Authorization: Bearer       │
   │     <sync-key>                  │
   │  ──────────────────────────►    │
   │                                 │
   │  4. Server validates key        │
   │     (checks user_ prefix)       │
   │     and saves to DB             │
   │  ◄──────────────────────────    │
```

## Settings Stored

The extension persists two values in `chrome.storage.local`:

| Key        | Default                              | Description                      |
| ---------- | ------------------------------------ | -------------------------------- |
| `syncKey`  | *(none — must be set by user)*       | Clerk User ID for authentication |
| `apiUrl`   | `http://localhost:3000/api/save`     | API endpoint URL                 |

---

## Installation & Testing Guide

### Step 1: Start the Web App

Make sure the Next.js dev server is running:

```bash
bun dev
```

Verify it's accessible at [http://localhost:3000](http://localhost:3000).

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Toggle **Developer mode** ON (top-right corner)
3. Click **"Load unpacked"**
4. Select the `chrome-extension/` folder from this repository
5. The extension icon (puzzle piece) will appear in the toolbar

> **Tip:** Pin the extension by clicking the puzzle icon in the toolbar and pinning "Brainly AI Companion".

### Step 3: Get Your Sync Key

1. Open [http://localhost:3000/dashboard/settings](http://localhost:3000/dashboard/settings)
2. You'll see your **Sync Key** displayed as a masked password field
3. Click the copy button to copy it to your clipboard

### Step 4: Configure the Extension

1. Click the **Brainly AI Companion** icon in the toolbar — the side panel opens
2. If this is your first time, the **Settings** panel will auto-expand
3. Paste your Sync Key into the "Sync Key (Clerk ID)" field
4. The API Server URL defaults to `http://localhost:3000/api/save` — change this only if your server is at a different address
5. Click **"Save Settings"**
6. A green success alert confirms the settings are saved

### Step 5: Save a Link

1. Navigate to any webpage (e.g., a YouTube video, GitHub repo, or article)
2. Open the extension side panel (click the icon)
3. The **Title** and **URL** fields auto-populate with the current tab's info
4. Optionally add tags by typing a tag name and pressing **Enter**
5. Click **"Save to Vault"**
6. On success, a green alert says "Vault updated successfully!"
7. Go to [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to see the saved link

### Step 6: Verify in the Dashboard

1. Open the dashboard Overview page — the saved link should appear as a card
2. Open the Saved Items page (`/dashboard/saved`) — it should be listed with all metadata

---

## Troubleshooting

| Issue                                  | Solution                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------ |
| Side panel doesn't open                | Make sure you clicked the extension icon (not right-clicked)             |
| "Sync Key is missing" error            | Click the gear icon in the panel header and enter your Sync Key          |
| "Unauthorized" error on save           | Verify the Sync Key matches your Clerk User ID (starts with `user_`)    |
| "Failed to fetch" error                | Check that `bun dev` is running and the API URL is correct               |
| Title/URL fields are empty             | The page might be a `chrome://` internal page (these are restricted)     |
| Changes not appearing in dashboard     | Hard-refresh the dashboard page (`Ctrl + Shift + R`)                     |

## Development Notes

- The extension is **plain HTML/CSS/JS** — no build step required
- Changes to `sidepanel.html`, `.css`, or `.js` take effect after clicking "Reload" on `chrome://extensions`
- The `background.js` service worker uses `chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })` to trigger the panel
- The extension requires `tabs` permission to query the active tab's title and URL
- CORS is handled by the `/api/save` route with `Access-Control-Allow-Origin: *`
