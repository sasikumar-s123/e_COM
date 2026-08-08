const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'client/src/pages');

const replacements = [
  { search: /Lumina/g, replace: 'Zenith' },
  { search: /LUMINA/g, replace: 'ZENITH' },
  { search: /lumina/g, replace: 'zenith' },
  { search: /Shopez/gi, replace: 'Zenith' },
  { search: /color:\s*'#fff'/g, replace: "color: 'var(--text-main)'" },
  { search: /color:\s*'#fbbf24'/g, replace: "color: 'var(--primary)'" },
  { search: /color:\s*'#10b981'/g, replace: "color: 'var(--secondary)'" },
  { search: /fontFamily:\s*'"Cinzel", serif'/g, replace: "fontFamily: 'var(--font-heading)'" },
  { search: /fontFamily:\s*"'Cinzel', serif"/g, replace: "fontFamily: 'var(--font-heading)'" },
  { search: /className="glass-panel"/g, replace: 'className="panel"' },
  { search: /className="glass-card"/g, replace: 'className="card"' },
  { search: /className="glass-btn /g, replace: 'className="' },
  { search: / glass-btn/g, replace: '' },
  { search: /var\(--border-glass\)/g, replace: 'var(--border-color)' },
  { search: /background:\s*'rgba\(15,\s*23,\s*42,\s*0\.[0-9]+\)'/g, replace: "background: 'var(--bg-card)'" },
  { search: /background:\s*'rgba\(7,\s*9,\s*14,\s*0\.[0-9]+\)'/g, replace: "background: 'var(--bg-main)'" },
  { search: /background:\s*'rgba\(255,\s*255,\s*255,\s*0\.[0-9]+\)'/g, replace: "background: 'var(--bg-hover)'" },
  { search: /borderColor:\s*'rgba\(245,\s*158,\s*11,\s*0\.[0-9]+\)'/g, replace: "borderColor: 'var(--border-color)'" },
  { search: /border:\s*'1px solid rgba\(245,\s*158,\s*11,\s*0\.[0-9]+\)'/g, replace: "border: '1px solid var(--border-color)'" },
  { search: /borderTop:\s*'1px dashed var\(--border-glass\)'/g, replace: "borderTop: '1px solid var(--border-color)'" },
  { search: /borderBottom:\s*'1px dashed var\(--border-glass\)'/g, replace: "borderBottom: '1px solid var(--border-color)'" },
  { search: /color:\s*'#07090e'/g, replace: "color: 'var(--text-inverse)'" },
  { search: /color="#07090e"/g, replace: 'color="var(--text-inverse)"' },
  { search: /color="#fff"/g, replace: 'color="var(--text-main)"' },
  { search: /color="#fbbf24"/g, replace: 'color="var(--primary)"' },
  { search: /fill="#fbbf24"/g, replace: 'fill="var(--primary)"' },
  { search: /#fbbf24/g, replace: 'var(--primary)' },
  { search: /#fff/g, replace: 'var(--text-main)' },
  { search: /#10b981/g, replace: 'var(--secondary)' },
  { search: /#07090e/g, replace: 'var(--bg-main)' },
  { search: /'#f8fafc'/g, replace: "'var(--text-main)'" }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const rule of replacements) {
        content = content.replace(rule.search, rule.replace);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(pagesDir);
console.log('Theme replacement complete.');
