export function cookieValue(cookie, value) {
  if (!cookie) return "";
  return cookie
    .split("; ")
    .find((row) => row.startsWith(`${value}=`))
    .split("=")[1];
}
