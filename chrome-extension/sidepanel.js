// Globals
let tags = [];

// DOM Elements
const toggleSettingsBtn = document.getElementById("toggle-settings-btn");
const settingsPanel = document.getElementById("settings-panel");
const syncKeyInput = document.getElementById("sync-key-input");
const apiUrlInput = document.getElementById("api-url-input");
const saveSettingsBtn = document.getElementById("save-settings-btn");

const saveFormPanel = document.getElementById("save-form-panel");
const saveLinkForm = document.getElementById("save-link-form");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const tagInput = document.getElementById("tag-input");
const tagsContainer = document.getElementById("tags-container");

const saveBtn = document.getElementById("save-btn");
const saveBtnText = document.getElementById("save-btn-text");
const saveBtnSpinner = document.getElementById("save-btn-spinner");
const statusAlert = document.getElementById("status-alert");

// Initialize
document.addEventListener("DOMContentLoaded", async () => {
  // Load settings
  const data = await chrome.storage.local.get(["syncKey", "apiUrl"]);
  if (data.syncKey) {
    syncKeyInput.value = data.syncKey;
  } else {
    // Show settings panel immediately if no sync key is set
    showSettings();
  }

  if (data.apiUrl) {
    apiUrlInput.value = data.apiUrl;
  } else {
    apiUrlInput.value = "http://localhost:3000/api/save";
  }

  // Set the dashboard footer link based on loaded URL
  updateFooterLink(apiUrlInput.value);

  // Pre-fill fields with active tab's URL and title
  await prefillActiveTab();

  // Add event listeners
  toggleSettingsBtn.addEventListener("click", toggleSettings);
  saveSettingsBtn.addEventListener("click", saveSettings);
  saveBtn.addEventListener("click", handleSaveBookmark);
  tagInput.addEventListener("keydown", handleTagInput);
  
  // Set up focus listener on inputs to clear alerts
  [titleInput, urlInput, tagInput, syncKeyInput, apiUrlInput].forEach(input => {
    input.addEventListener("focus", clearAlert);
  });
});

// Pre-fill active tab information
async function prefillActiveTab() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      // Clean up title if it has pipe separators (like "| YouTube")
      let cleanTitle = tab.title || "";
      if (cleanTitle.includes(" - ")) {
        cleanTitle = cleanTitle.split(" - ")[0];
      } else if (cleanTitle.includes(" | ")) {
        cleanTitle = cleanTitle.split(" | ")[0];
      }
      
      titleInput.value = cleanTitle.trim();
      urlInput.value = tab.url || "";
    }
  } catch (err) {
    console.error("Failed to query active tab:", err);
  }
}

// Toggle settings view
/deep/
function toggleSettings() {
  if (settingsPanel.classList.contains("hidden")) {
    showSettings();
  } else {
    hideSettings();
  }
}

function showSettings() {
  settingsPanel.classList.remove("hidden");
}

// Helper to update dashboard link in footer based on API URL
function updateFooterLink(apiUrl) {
  try {
    const urlObj = new URL(apiUrl);
    const dashboardUrl = `${urlObj.protocol}//${urlObj.host}/dashboard`;
    document.getElementById("dashboard-footer-link").href = dashboardUrl;
  } catch (e) {
    document.getElementById("dashboard-footer-link").href = "http://localhost:3000/dashboard";
  }
}

function hideSettings() {
  settingsPanel.classList.add("hidden");
}

// Save Settings (Sync Key & API URL)
async function saveSettings() {
  const syncKey = syncKeyInput.value.trim();
  const apiUrl = apiUrlInput.value.trim();

  if (!syncKey) {
    showAlert("Please enter a valid Sync Key.", "error");
    return;
  }
  if (!apiUrl) {
    showAlert("Please enter a valid API Server URL.", "error");
    return;
  }

  await chrome.storage.local.set({ syncKey, apiUrl });
  updateFooterLink(apiUrl);
  showAlert("Settings saved successfully!", "success");
  
  // Slide up panel after a small delay
  setTimeout(() => {
    hideSettings();
    clearAlert();
  }, 1000);
}

// Handle dynamic tag creations
function handleTagInput(e) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    const val = tagInput.value.trim().replace(/^#/, "");
    if (val && !tags.includes(val)) {
      tags.push(val);
      renderTags();
    }
    tagInput.value = "";
  } else if (e.key === "Backspace" && tagInput.value === "" && tags.length > 0) {
    tags.pop();
    renderTags();
  }
}

function renderTags() {
  // Remove existing tag badges (which are children before the input)
  const badges = tagsContainer.querySelectorAll(".tag-badge");
  badges.forEach(b => b.remove());

  // Insert badges before the input field
  tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.innerHTML = `${tag}<button type="button" class="tag-remove-btn">&times;</button>`;
    
    // Tag remove listener
    span.querySelector(".tag-remove-btn").addEventListener("click", () => {
      tags = tags.filter(t => t !== tag);
      renderTags();
    });

    tagsContainer.insertBefore(span, tagInput);
  });
}

// Save Bookmark Action
async function handleSaveBookmark(e) {
  e.preventDefault();
  
  const url = urlInput.value.trim();
  const title = titleInput.value.trim();
  
  if (!url || !title) {
    showAlert("Title and URL are required.", "error");
    return;
  }

  // Load sync key and api url
  const data = await chrome.storage.local.get(["syncKey", "apiUrl"]);
  const syncKey = data.syncKey;
  const apiUrl = data.apiUrl || "http://localhost:3000/api/save";

  if (!syncKey) {
    showAlert("Sync Key is missing. Click the settings gear to configure it.", "error");
    showSettings();
    return;
  }

  // Show Loading state
  setLoading(true);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${syncKey}`
      },
      body: JSON.stringify({
        url,
        title,
        tags
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to save link.");
    }

    showAlert("Vault updated successfully!", "success");
    
    // Clear inputs upon successful save
    urlInput.value = "";
    titleInput.value = "";
    tags = [];
    renderTags();

    // Re-grab tab info after success (so user can refresh or save another link if page changed)
    await prefillActiveTab();

  } catch (err) {
    showAlert(err.message, "error");
  } finally {
    setLoading(false);
  }
}

// Helper: UI alerts
function showAlert(message, type) {
  statusAlert.textContent = message;
  statusAlert.className = `alert ${type}`;
  statusAlert.classList.remove("hidden");
}

// Helper: Clear alerts
function clearAlert() {
  statusAlert.classList.add("hidden");
  statusAlert.className = "alert";
}

// Helper: Loading Spinner toggle
function setLoading(loading) {
  if (loading) {
    saveBtn.disabled = true;
    saveBtnText.classList.add("hidden");
    saveBtnSpinner.classList.remove("hidden");
  } else {
    saveBtn.disabled = false;
    saveBtnText.classList.remove("hidden");
    saveBtnSpinner.classList.add("hidden");
  }
}
