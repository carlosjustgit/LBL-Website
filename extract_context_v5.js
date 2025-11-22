import { PDFExtract } from 'pdf.js-extract';
const pdfExtract = new PDFExtract();
const options = {}; /* see below */

const files = [
    'Branding__Social_Media_Guidelines_for_GenAI_Content_Creation.pdf',
    'LBL_Manifesto.pdf',
    'LBL_service_offering.pdf',
    'Apresentação - Empowering Growth.pdf'
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
