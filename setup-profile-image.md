# Profile Image Setup Guide

## Adding Your Profile Image

1. **Locate your profile image file** named "Syed Daniyal Bokhari.png"

2. **Copy the image to the public folder**:
   - Copy your "Syed Daniyal Bokhari.png" file
   - Paste it into the `public/` directory
   - Rename it to `profile.png` (or update the reference in the code)

3. **Alternative: Update the image reference**:
   If you want to keep the original filename, update the image reference in:
   - `src/components/About.tsx` (line with `src="/profile.png"`)
   - `index.html` (Open Graph image meta tag)

## Image Requirements

- **Format**: PNG, JPG, or WebP
- **Size**: Recommended 400x400px or larger
- **Quality**: High resolution for crisp display
- **Style**: Professional headshot or profile photo

## Current Status

The portfolio is currently using a placeholder. Replace `public/profile.png` with your actual image to complete the setup.

---

**Note**: The development server should now be running at `http://localhost:5173` 