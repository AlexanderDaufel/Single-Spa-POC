export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function navbar(location) {
  return true;
}

export function social_media(location) {
  return prefix(location, 'social-media');
}

export function agile_manifesto(location) {
  return prefix(location, 'agile-manifesto');
}