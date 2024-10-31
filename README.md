<div align="center">
  <img src="img/rBlock-logo.png" alt="rBlock Logo" width="200" style="margin-bottom: -10px;"/>
  <h1 style="margin-top: 0;">rBlock</h1>
</div>

**rBlock** is a versatile ad and malicious URL blocker that prevents unwanted ads and unsafe websites from loading in your browser...

## Features

- **Ad Blocking**: Automatically blocks trackers and ad URLs to create an ad-free browsing experience.
- **Malicious URL Blocking**: Prevents access to known malicious and phishing websites, safeguarding your browsing.
- **Allowlist Functionality**: Enables users to add specific sites to an allowlist, permitting ads or specific content on these domains.
- **Real-Time Statistics**: Displays the number of blocked ads and malicious sites within the extension popup.
- **User-Friendly Interface**: Simple toggle to enable or disable blocking with a single click.

## Installation in Chrome

To install **rBlock** locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/rBlock.git
   
2. Open Chrome, go to **chrome://extensions/**, and enable **Developer mode**.
3. Click **Load unpacked** and select the `rBlock` directory from this repository.
4. The rBlock icon will appear in your extensions toolbar.

## Developer Notes

This extension uses `chrome.webRequest` and `chrome.storage` APIs to block ads and malicious URLs and store data on blocking activity and allowlist entries. It remains undetectable to most websites by not injecting visible elements or altering the DOM directly.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
