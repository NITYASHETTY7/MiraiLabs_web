const fs = require('fs');
const { execSync } = require('child_process');
const html = execSync('git show HEAD:index.html').toString('utf8');
fs.writeFileSync('original_index.html', html, 'utf8');
