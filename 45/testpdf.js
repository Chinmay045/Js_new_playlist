const { PDFDocument } = require('pdf-lib');
const fs = require('fs/promises');  // Import the fs module for file operations

async function mergePDFs() {
    const pdfDoc = await PDFDocument.create();

    // Add pages to the PDF document
    const [firstPdfBytes, secondPdfBytes] = await Promise.all([
        fs.readFile('1.pdf'),  // Use fs.readFile instead of fs.promises.readFile
        fs.readFile('2.pdf'),  // Use fs.readFile instead of fs.promises.readFile
    ]);

    const firstPdf = await PDFDocument.load(firstPdfBytes);
    const secondPdf = await PDFDocument.load(secondPdfBytes);

    const copiedPages = await pdfDoc.copyPages(firstPdf, firstPdf.getPageIndices());
    copiedPages.forEach((page) => pdfDoc.addPage(page));

    const copiedPages2 = await pdfDoc.copyPages(secondPdf, secondPdf.getPageIndices());
    copiedPages2.forEach((page) => pdfDoc.addPage(page));

    // Save the merged PDF
    const mergedPdfBytes = await pdfDoc.save();
    await fs.writeFile('./public/merged.pdf', mergedPdfBytes);  // Use fs.writeFile instead of fs.promises.writeFile

    console.log('Merged PDF saved successfully.');
}

// Call the asynchronous function
mergePDFs();

module.exports = { mergePDFs }