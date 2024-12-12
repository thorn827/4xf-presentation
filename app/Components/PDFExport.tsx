'use client'

import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function PDFExport() {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPDF = async () => {
    setIsExporting(true)
    try {
      const pdf = new jsPDF('l', 'mm', 'a4')
      const element = document.querySelector('main')
      if (element) {
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#000000'
        })
        const imgData = canvas.toDataURL('image/jpeg', 1.0)
        pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210)
        pdf.save('4xf-presentation.pdf')
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
    setIsExporting(false)
  }

  return (
    <button
      onClick={exportToPDF}
      disabled={isExporting}
      className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-white flex items-center space-x-2"
    >
      {isExporting ? 'Exporting...' : 'Export PDF'}
    </button>
  )
}