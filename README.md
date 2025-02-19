# GhPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Deploy Angular Project to GitHub Pages

This guide explains how to deploy an Angular project to GitHub Pages using `angular-cli-ghpages`.

---

## **1. Install `angular-cli-ghpages`**

First, install the deployment tool globally:

```sh
npm install -g angular-cli-ghpages
```

---

## **2. Configure `angular.json`**

Modify your `angular.json` to set up GitHub Pages deployment.

### **Original Configuration:**

```json
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:application",
    "options": {
      "outputPath": "dist/gh-page",
      "index": "src/index.html",
      "browser": "src/main.ts",
      "polyfills": ["zone.js"],
      "tsConfig": "tsconfig.app.json",
      "inlineStyleLanguage": "scss",
      "assets": [{"glob": "**/*", "input": "public"}],
      "styles": ["src/styles.scss"],
      "scripts": []
    }
  }
}
```

### **Modified Configuration:**

Update the following settings in `angular.json`:

- **Change `builder`** to `@angular-devkit/build-angular:browser`
- **Set `baseHref`** to your repository name (`/gh-page/`)
- **Change `outputPath`** to `"docs"` (GitHub Pages serves content from this directory)
- **Update `browser` to `main`**

```json
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      "baseHref": "/gh-page/",
      "outputPath": "docs",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": ["zone.js"],
      "tsConfig": "tsconfig.app.json",
      "inlineStyleLanguage": "scss",
      "assets": [{"glob": "**/*", "input": "public"}],
      "styles": ["src/styles.scss"],
      "scripts": []
    }
  }
}
```

---

## **3. Build and Deploy**

### **Step 1: Build the Angular Project**

Run the following command to generate production-ready files:

```sh
ng build --configuration=production --output-path=docs --base-href "/gh-page/"
```

### **Step 2: Deploy to GitHub Pages**

Use `angular-cli-ghpages` to deploy your project:

```sh
npx angular-cli-ghpages --dir=docs
```

This will automatically create a `gh-pages` branch and push the built files.

---

## **4. Configure GitHub Pages**

1. Go to your **GitHub repository**.
2. Navigate to **Settings > Pages**.
3. Under **Branch**, select `gh-pages`, and set the **folder** to `/ (root)`.
4. Click **Save**.

---

## **5. Verify Deployment**

1. Go to the **Actions** tab in your repository.
2. Look for the latest **deployment record**.
3. Once completed, visit:
   ```
   https://your-username.github.io/gh-page/
   ```
   Replace `your-username` with your actual GitHub username.

---

## **Troubleshooting**

- If the page does not load correctly, check the browser console for errors.
- Ensure `baseHref` matches your repository name (`/gh-page/`).
- Check the `gh-pages` branch to confirm that files were correctly deployed.

---

## **Conclusion**

Your Angular project is now successfully deployed to GitHub Pages! 🎉
