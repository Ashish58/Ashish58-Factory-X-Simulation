# Factory X Dashboard Simulation

A high-performance factory monitoring dashboard built with Vanilla JS and Tailwind CSS.

## 🚀 How to Run Locally

### Approach 1: VS Code Live Server (Easiest)
1. Open this folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **Open with Live Server**.

### Approach 2: Using npm (Command Line)
If you have Node.js installed, run the following in your terminal:
```bash
npx serve
```
Then open the local URL provided (usually `http://localhost:3000`).

## 📁 File Structure
- `index.html` - The cinematic landing page.
- `dashboard.html` - The main factory monitoring interface.
- `main.js` - Logic for the landing page animations.
- `dashboard.js` - Logic for the real-time charts and data system.
- `package.json` - Configuration for advanced development.

## 🛠 Tech Stack
- **Styling:** Tailwind CSS (via CDN)
- **Charts:** Chart.js (via CDN)
- **Icons:** Lucide Icons (SVG)
- **Runtime:** Vanilla JavaScript

## 📁 Troubleshooting
1. **Styling not appearing?**
   - Your browser might be using a cached version of the HTML. **Press `Ctrl + F5`** (Windows) or `Cmd + Shift + R` (Mac) to hard reload.
   - **Important:** Ensure you are opening `index.html` from the **ROOT** of the project, not from a subfolder.
   - Some extensions (like AdBlock or Ghostery) могут intercept requests to the Tailwind CDN. Try opening in **Incognito/Private mode**.

2. **`fetch` error in console?**
   - This error (`Cannot set property fetch of #<Window>`) is usually caused by a browser extension (like Requestly or a VPN extension) or a dev-server script that incorrectly tries to wrap the native `fetch` API.
   - **Action:** Open in an Incognito window or disable extensions that modify network requests.
   - **Note:** This portal does not use `window.fetch` explicitly, so the error is external and shouldn't affect functionality.

3. **"No Scroll" on Landing Page?**
   - The landing page is designed to be cinematic and non-scrolling. If you see scrollbars, ensure your browser window isn't zoomed in too far.
