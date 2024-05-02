import { ReactComponent as DocIcon } from '../../ui/assets/file-doc.svg';
import { ReactComponent as PdfIcon } from '../../ui/assets/file-pdf.svg';
import { ReactComponent as XlsIcon } from '../../ui/assets/file-xsl.svg';
import { ReactComponent as File } from '../../ui/assets/file.svg';

export const UDFileExtIconMap: any = {
  '.doc': DocIcon,
  '.docx': DocIcon,
  '.xls': XlsIcon,
  '.xslx': XlsIcon,
  '.pdf': PdfIcon,
  '.jpeg': File,
  '.jpg': File,
  '.png': File,
  any: File
};
