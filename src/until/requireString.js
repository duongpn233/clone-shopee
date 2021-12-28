export default function requireString(string) {
    const words = string.split(/\s+/);
    return words.map(w => `+${w}`).join(' ')
}