let isBlocking = true;

function updateStatus() {
    document.getElementById('status').innerText = isBlocking ? 'Enabled' : 'Disabled';
}

document.getElementById('toggle').addEventListener('click', () => {
    isBlocking = !isBlocking;
    updateStatus();
    chrome.storage.sync.set({ blocking: isBlocking }, () => {
        console.log(`Blocking is now ${isBlocking ? 'enabled' : 'disabled'}`); // Use backticks for template literals
    });
});

// Get the current blocking state when the popup opens
chrome.storage.sync.get('blocking', (data) => {
    if (data.blocking !== undefined) {
        isBlocking = data.blocking;
    }
    updateStatus();
});
