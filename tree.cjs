const fs = require("fs");
const path = require("path");

const ignore = new Set([
  "node_modules",
  ".git",
  "dist",
  ".astro",
  ".vscode",
  ".gitignore",
  "CONTRIBUTING.md",
  "README.md",
  "tree.cjs"
]);

function tree(dir, prefix = "") {
  const files = fs.readdirSync(dir)
    .filter(file => !ignore.has(file));

  files.forEach((file, index) => {
    const full = path.join(dir, file);
    const last = index === files.length - 1;

    console.log(prefix + (last ? "└── " : "├── ") + file);

    if (fs.statSync(full).isDirectory()) {
      tree(full, prefix + (last ? "    " : "│   "));
    }
  });
}

tree(".");