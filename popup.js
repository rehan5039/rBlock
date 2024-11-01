let isBlocking = true;

// Function to update the status text
function updateStatus() {
    document.getElementById('status').innerText = isBlocking ? 'Enabled' : 'Disabled';
}

// Function to update the real-time statistics
function updateStats() {
    chrome.storage.sync.get(['adsBlocked', 'maliciousBlocked'], (data) => {
        document.getElementById('adsBlocked').innerText = data.adsBlocked || 0;
        document.getElementById('maliciousBlocked').innerText = data.maliciousBlocked || 0;
    });
}

// Toggle blocking state and save it in storage
document.getElementById('toggle').addEventListener('click', () => {
    isBlocking = !isBlocking;
    updateStatus();
    chrome.storage.sync.set({ blocking: isBlocking }, () => {
        console.log(`Blocking is now ${isBlocking ? 'enabled' : 'disabled'}`);
        // Update the state in background script immediately
        chrome.runtime.sendMessage({ action: 'updateBlocking', blocking: isBlocking });
    });
});

// Get the current blocking state and update stats when the popup opens
chrome.storage.sync.get('blocking', (data) => {
    if (data.blocking !== undefined) {
        isBlocking = data.blocking;
    }
    updateStatus();
    updateStats();  // Update stats on load
});

// Continuously listen for changes in the stats and update the UI
chrome.storage.onChanged.addListener((changes) => {
    if (changes.adsBlocked || changes.maliciousBlocked) {
        updateStats();
    }
});

// Add to Allowlist functionality
document.getElementById('addAllowlist').addEventListener('click', () => {
    const site = document.getElementById('allowlistInput').value.trim();
    if (site) {
        chrome.storage.sync.get('allowlist', (data) => {
            const updatedAllowlist = data.allowlist || [];
            if (!updatedAllowlist.includes(site)) {
                updatedAllowlist.push(site);
                chrome.storage.sync.set({ allowlist: updatedAllowlist }, () => {
                    alert(`${site} has been added to the allowlist.`);
                    document.getElementById('allowlistInput').value = '';
                });
            } else {
                alert(`${site} is already in the allowlist.`);
            }
        });
    }
});
