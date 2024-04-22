const fs = require('fs');
const path = require('path');

// Ensure there's a file path argument
if(process.argv.length < 3) {
    console.error('Usage: node makeModelIgnoreRequired.js <path_to_file>');
    process.exit(1);
}

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

const modifiedContent = `#pragma warning disable CS8618\n${fileContent}#pragma warning restore CS8618`;

fs.writeFileSync(filePath, modifiedContent, { encoding: 'utf8' });
console.log(`Processed file: ${filePath}`);
