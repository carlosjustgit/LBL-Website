import { PDFExtract } from 'pdf.js-extract';
const pdfExtract = new PDFExtract();
const options = {}; /* see below */

const files = [
    'LBL_AI_adoption_framework.pdf',
    'Making_AI_simple_for_your_business.pdf'
];

async function readPdf(file) {
    return new Promise((resolve, reject) => {
        pdfExtract.extract(file, options, (err, data) => {
            if (err) {
                console.error(`Error reading ${file}:`, err);
                resolve(); // Resolve anyway to continue
                return;
            }
            console.log(`\n--- START OF ${file} ---\n`);
            // Extract text from pages
            const text = data.pages.map(page =>
                page.content.map(item => item.str).join(' ')
            ).join('\n\n');
            console.log(text);
            console.log(`\n--- END OF ${file} ---\n`);
            resolve();
        });
    });
}

async function main() {
    for (const file of files) {
        await readPdf(file);
    }
}

main();
