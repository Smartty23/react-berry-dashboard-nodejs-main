const fs = require('fs');
const path = require('path');

const replacements = [
  // Material-UI to MUI core
  { from: /@material-ui\/core\/styles/g, to: '@mui/material/styles' },
  { from: /@material-ui\/core\/([A-Za-z]+)/g, to: '@mui/material/$1' },
  { from: /@material-ui\/core/g, to: '@mui/material' },
  { from: /@material-ui\/styles/g, to: '@mui/styles' },
  { from: /@material-ui\/lab/g, to: '@mui/lab' },
  { from: /@material-ui\/icons\/([A-Za-z]+)/g, to: '@mui/icons-material/$1' },
  { from: /@material-ui\/icons/g, to: '@mui/icons-material' },
  { from: /@material-ui\/data-grid/g, to: '@mui/x-data-grid' },

  // Tabler icons
  { from: /@tabler\/icons/g, to: '@tabler/icons-react' },

  // React Router v6 changes
  {
    from: /import\s+\{([^}]*)\bSwitch\b([^}]*)\}\s+from\s+['"]react-router-dom['"]/g,
    to: 'import {$1Routes$2} from \'react-router-dom\''
  },
  {
    from: /import\s+\{([^}]*)\bRedirect\b([^}]*)\}\s+from\s+['"]react-router-dom['"]/g,
    to: 'import {$1Navigate$2} from \'react-router-dom\''
  },
  {
    from: /import\s+\{([^}]*)\buseHistory\b([^}]*)\}\s+from\s+['"]react-router-dom['"]/g,
    to: 'import {$1useNavigate$2} from \'react-router-dom\''
  },
  { from: /\bwithRouter\b/g, to: '/* withRouter removed in v6 - use hooks instead */' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'build' && file !== '.git') {
        walkDir(filePath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      processFile(filePath);
    }
  });
}

console.log('Starting migration...\n');
walkDir(path.join(__dirname, 'src'));
console.log('\n✓ Migration complete!');
console.log('\nNote: You still need to manually update:');
console.log('- Switch → Routes (and update Route syntax)');
console.log('- Redirect → Navigate');
console.log('- useHistory → useNavigate');
console.log('- withRouter usage');
console.log('- component prop → element prop in Route');
