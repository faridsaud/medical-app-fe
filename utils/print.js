import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import _ from 'lodash';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const getPrintData = (data, paragraphs = [], key, level = 0) => {
  if (!data) {
    return [];
  }

  if (key) {
    paragraphs.push({ text: _.startCase(key), style: level < 2 ? 'header1' : 'bold' });
    if (level < 2) paragraphs.push('\n');
  }
  const entries = Object.entries(data).filter(([k, v]) => k !== '_id').sort((a, b) => {
    if (typeof a[1] === 'object' && typeof b[1] !== 'object') {
      return 1;
    }
    if (typeof a[1] !== 'object' && typeof b[1] === 'object') {
      return -1;
    }
    return 0;
  });
  if (entries.length === 0) {
    paragraphs.push('NA');
  }
  for (let i = 0; i < entries.length; i++) {
    const k = entries[i][0];
    const v = entries[i][1];
    if (typeof v !== 'object') {
      // level === 0 && paragraphs.push('\n');
      paragraphs.push({
        text: [
          { text: `${_.startCase(k)}:`, style: 'bold' },
          { text: `\t${v || 'NA'}`, style: 'normal' },
        ],
      });
      if (level < 2) {
        paragraphs.push('\n');
      }
      continue;
    }

    getPrintData(v, paragraphs, k, level + 1);
    paragraphs.push({ text: '', pageBreak: level === 0 ? 'after' : undefined });
  }
  return paragraphs;
};

export const printData = (title = '', data) => {
  if (typeof data !== 'object') {
    return null;
  }
  const paragraphs = getPrintData(data, [], undefined, 0).slice(0, -1);
  pdfMake.createPdf({
    header: title,
    pageOrientation: 'portrait',
    pageSize: 'A4',
    content: paragraphs,
    pageMargins: [40, 60, 40, 60],
    styles: {
      header1: {
        fontSize: 20,
        bold: true,
      },
      bold: {
        fontSize: 14,
        bold: true,
      },
      normal: {
        fontSize: 14,
      },
    },
  }).open();
};
