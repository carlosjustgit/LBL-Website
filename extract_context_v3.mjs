import fs from 'fs';
import pdf from 'pdf-parse';

const files = [
    'Branding__Social_Media_Guidelines_for_GenAI_Content_Creation.pdf',
    'LBL_Manifesto.pdf',
    'LBL_service_offering.pdf',
    'Apresentação - Empowering Growth.pdf'
];

async function readPdf(file) {
    try {
        if (fs.existsSync(file)) {
            const dataBuffer = fs.readFileSync(file);
            const data = await pdf(dataBuffer);
            console.log(`\n--- START OF ${file} ---\n`);
            console.log(data.text);
            console.log(`\n--- END OF ${file} ---\n`);
        } else {
            console.log(`File not found: ${file}`);
        }
    } catch (error) {
        console.error(`Error reading ${file}:`, error.message);
    }
}

async function main() {
    for (const file of files) {
        await readPdf(file);
    }
}

main();
