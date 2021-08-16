export default function endsWithImageExtension(url) {
  if (url) {
    return url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png');
  }
}

