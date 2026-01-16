// CommonJS
const { generatePDF } = require('pdf-node');
const fs = require('fs');
const path = require('path');

// Or ES Modules
// import { generatePDF } from 'pdf-node';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

async function createPDF() {
    // Read HTML template
    const html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

    // Sample data
    const users = [
        { name: 'John Doe', age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
    ];

    // PDF options
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        header: {
            height: '15mm',
            contents:
                '<div style="text-align: center;">Confidential Report</div>'
        },
        footer: {
            height: '15mm',
            contents: {
                default:
                    '<div style="text-align: center; color: #666;">Page {{page}} of {{pages}}</div>'
            }
        }
    };

    // Generate PDF
    try {
        const result = await generatePDF({
            html: html,
            data: {
                users: users,
                date: new Date().toLocaleDateString()
            },
            path: './user-report.pdf',
            type: 'pdf',
            pdfOptions: options
        });

        console.log('PDF generated successfully:', result.filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

createPDF();

import { generatePDF, PDFOptions } from 'pdf-node';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// For ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define TypeScript interfaces
interface User {
    name: string;
    age: number;
    email: string;
}

interface TemplateData {
    users: User[];
    date: string;
}

async function generateUserReport() {
    // Read HTML template
    const html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

    // Sample typed data
    const users: User[] = [
        { name: 'John Doe', age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
    ];

    // PDF options with TypeScript type
    const options: PDFOptions = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        header: {
            height: '15mm',
            contents:
                '<div style="text-align: center;">Confidential Report</div>'
        },
        footer: {
            height: '15mm',
            contents: {
                default:
                    '<div style="text-align: center; color: #666;">Page {{page}} of {{pages}}</div>'
            }
        }
    };

    // Generate PDF with buffer output
    try {
        const result = await generatePDF({
            html: html,
            data: {
                users: users,
                date: new Date().toLocaleDateString()
            },
            type: 'pdf',
            buffer: true, // Get PDF as buffer
            pdfOptions: options
        });

        // Example: Save buffer to file
        if ('buffer' in result) {
            fs.writeFileSync('./user-report-buffer.pdf', result.buffer);
            console.log('PDF generated from buffer');
        }

        // Or use the file path if not using buffer
        if ('filename' in result) {
            console.log('PDF generated at:', result.filename);
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

generateUserReport();