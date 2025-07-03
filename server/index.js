import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

const PARENT_FOLDER_ID = process.env.GDRIVE_PARENT_ID;

app.get('/api/folders', async (req, res) => {
  try {
    // Step 1: List folders in the parent folder
    const foldersResponse = await drive.files.list({
      q: `'${PARENT_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: 'files(id, name)',
    });

    const folders = foldersResponse.data.files;
    const results = [];

    // Step 2: For each folder, list images inside it
    for (const folder of folders) {
      const imagesResponse = await drive.files.list({
  q: `'${folder.id}' in parents and mimeType contains 'image/' and trashed = false`,
  fields: 'files(id, name, thumbnailLink, webContentLink)',
});

      const images = imagesResponse.data.files.map(file => ({
  name: file.name,
  url: file.thumbnailLink.replace('=s220', '=s800'), // bigger preview
}));

      results.push({
        folder: folder.name,
        images,
      });
    }

    res.json(results);
  } catch (err) {
    console.error('Error fetching folders/images from Drive:', err);
    res.status(500).send('Failed to fetch image data');
  }
});

// Run server on port 5002
app.listen(5002, () => {
  console.log('Server running at http://localhost:5002');
});
