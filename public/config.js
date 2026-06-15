// This file is overwritten at container startup by docker-entrypoint.sh
// when GOOGLE_DRIVE_API_KEY and DRIVE_FOLDER_* env vars are set.
// Without it the gallery falls back to picsum placeholder images.
window.__KAMILA_CONFIG = {
  apiKey: "",
  folders: {}
};
