export function downloadByUrl(url: string, fileName: string) {
  const element = document.createElement('a');
  element.setAttribute('href', url);
  element.setAttribute('download', fileName);
  element.setAttribute('_target', 'blank');
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
