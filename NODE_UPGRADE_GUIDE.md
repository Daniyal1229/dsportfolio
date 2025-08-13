# Node.js Upgrade Guide

## Current Issue
You're using Node.js v16.20.2, but the latest Vite and other tools require Node.js 18+ or 20+.

## Recommended Solution: Upgrade Node.js

### Option 1: Using Node Version Manager (nvm) - Recommended

1. **Install nvm for Windows**:
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Install the latest version

2. **Install Node.js 20 LTS**:
   ```bash
   nvm install 20.11.0
   nvm use 20.11.0
   ```

3. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Direct Download

1. **Download Node.js 20 LTS**:
   - Go to: https://nodejs.org/
   - Download the LTS version (20.x.x)

2. **Install and restart your terminal**

### Option 3: Using Chocolatey (Windows)

```bash
choco install nodejs-lts
```

## After Upgrading Node.js

1. **Clear npm cache**:
   ```bash
   npm cache clean --force
   ```

2. **Remove old dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. **Reinstall with latest versions**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

## Benefits of Upgrading

- ✅ Better performance
- ✅ Latest security updates
- ✅ Full compatibility with modern tools
- ✅ Access to latest JavaScript features
- ✅ Better debugging and development experience

## Current Workaround

The portfolio is currently working with downgraded dependencies, but upgrading Node.js will give you:
- Better performance
- Access to latest features
- Full compatibility with all modern tools

---

**Note**: The portfolio is fully functional with the current setup, but upgrading Node.js is recommended for the best experience. 