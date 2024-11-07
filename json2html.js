export default function json2html(data) {
  if (!Array.isArray(data) || data.length === 0) return '';

  // Extract unique headers from all objects in the array
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Create the HTML table
  let html = '<table data-user="kranthikeyadande@gmail.com">';
  html += '<thead><tr>' + headers.map(header => `<th>${header}</th>`).join('') + '</tr></thead>';
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>' + headers.map(header => `<td>${row[header] || ''}</td>`).join('') + '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
