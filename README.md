# 🎺 Aardvark Music Instrument Repair Website

A React + Express web app to showcase before-and-after instrument repair work, powered by Google Drive for image hosting.

---

## 🚀 Features

- 🏠 Home, Gallery, and Contact pages
- 📂 Google Drive-backed image gallery
- 🔒 Secure backend using a service account
- ✅ Thumbnails render correctly (no CORS issues)
- 🐳 Docker-ready (optional)

---

## ✅ Requirements

- Node.js (LTS recommended)
- A Google Cloud Project
- A Google Drive folder structure with images
- A Google service account with a JSON key

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourname/aardvark-music.git
cd aardvark-music
```

---

### 2. Google Cloud & Drive Setup

#### 📁 Create Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project

#### ✅ Enable the Google Drive API

1. Navigate to `APIs & Services > Library`
2. Search for and enable **Google Drive API**

#### 🔑 Create a Service Account

1. Go to `IAM & Admin > Service Accounts`
2. Create a new service account (no roles needed)
3. Go to the **Keys** tab → `Add Key` → `Create JSON`
4. Save the file as `credentials.json` inside `/server`

---

### 3. Share Your Google Drive Folder

1. In your Google Drive, create a folder (e.g. `Instrument Repairs`)
2. Add subfolders for each instrument job (`Trumpet123`, `SaxFix001`, etc.)
3. Upload `Before` and `After` images inside each folder
4. **Share each individual image file** with the service account email (from `credentials.json`)
5. Change the access to “Anyone with the link” → Viewer

> 🔎 Google doesn’t inherit permissions from folders — share individual image files.

---

### 4. Configure `.env` in `/server`

Create a `.env` file in the `/server` directory:

```
GDRIVE_PARENT_ID=your_drive_folder_id_here
```

You can find this ID in the folder’s URL:

```
https://drive.google.com/drive/folders/14qmtN4AmhjHBO3H7yw-GSJxUkg-bMbUm
                             👆 This part is the ID
```

---

### 5. Install Dependencies

#### Server

```bash
cd server
npm install
npm run dev
```

#### Client

```bash
cd ../client
npm install
npm run dev
```

---

### 6. Test It

- Visit the frontend: [http://localhost:5173](http://localhost:5173)
- Check the backend route: [http://localhost:5002/api/folders](http://localhost:5002/api/folders)

You should see folders and image URLs. The frontend gallery will display image thumbnails grouped by folder.

---

## 📁 Example Google Drive Structure

```
Instrument Repairs/
├── Trumpet23445/
│   ├── Before.jpg
│   └── After.jpg
├── Sax223/
│   ├── Before.jpg
│   └── After.jpg
```

---

## 🐳 Optional: Docker Support

_Coming soon._ Reach out if you’d like help adding `Dockerfile` + `docker-compose.yml`.

---

## 💡 Tips

- Use `thumbnailLink` from the Drive API to avoid CORS issues
- Test image URLs in **incognito** to make sure they're publicly viewable
- Add console logs in `/server/index.js` to debug Drive access

---

## 🧰 Troubleshooting

- 🛑 Image not showing? → It's probably not shared publicly
- 🌐 Wrong link format? → Use `thumbnailLink` from the API
- ❌ Empty array? → Folder ID is wrong or not shared with the service account

---

## 📬 Support

If you want to:
- Auto-share image files via API
- Add lightbox/gallery features
- Deploy this on Docker/Render/Fly.io

Let me know — happy to help!
