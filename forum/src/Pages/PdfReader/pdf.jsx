import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './PDF.css'; // Import your custom CSS file

function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onPageChange({ pageNumber }) {
    setPageNumber(pageNumber);
  }

  return (
    <div className="pdf-container">
      <div className="pdf-viewer">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${'^2.9.152'}/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl='/relatorio/Relatório de Trabalho Interfaces Web.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
            onPageChange={onPageChange}
          />
        </Worker>
      </div>
    </div>
  );
}

export default PDF;
