const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument({
   layout: 'landscape',
   size: 'A4',
});

// Pipe its output somewhere, like to a file or HTTP response
doc.pipe(fs.createWriteStream('output.pdf'));

// add image and allow it to have one dimension equal to page size
doc.image('./cert.png', 0, 0, {
   fit: [doc.page.width, doc.page.height],
   align: 'center',
   valign: 'center',
});

// Add text in the middle of the PDF and on top of the image
doc.fontSize(25).text('Certificate of Completion', 20, 265, {
   align: 'center',
});

// export pdf
doc.end();
