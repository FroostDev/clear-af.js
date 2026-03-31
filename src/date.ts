/**
 * Represents a date input accepted by date utility functions.
 * Can be a native Date object, an ISO string, or a Unix timestamp in milliseconds.
 * @typedef {Date | string | number} DateParam
 */
export type DateParam = Date | string | number;

/**
 * Format a date into a readable string
 * @category Date & Time
 * @function formatDate
 * @param date - The date to format (Date, string or timestamp)
 * @param format - The format string (default: 'DD/MM/YYYY')
 * @returns {string} The formatted date string
 * @example
 * formatDate(new Date());                        // "31/03/2026"
 * formatDate(new Date(), 'YYYY-MM-DD');          // "2026-03-31"
 * formatDate(new Date(), 'DD/MM/YYYY HH:mm');    // "31/03/2026 14:05"
 * formatDate(new Date(), 'DD/MM/YY');            // "31/03/26"
 * formatDate('2026-01-15', 'DD/MM/YYYY');        // "15/01/2026"
 * formatDate(1743000000000, 'HH:mm:ss');         // "10:00:00"
 */
function formatDate(date: DateParam, format: string = "DD/MM/YYYY") {
    const d = new Date(date);
    if (isNaN(d.getTime())) throw new Error("Invalid Date");

    const pad = (n: number) => String(n).padStart(2, '0');

    const tokens: Record<string, string> = {
        DD: pad(d.getDate()),
        MM: pad(d.getMonth() + 1),
        YYYY: String(d.getFullYear()),
        YY: String(d.getFullYear()).slice(-2),
        HH: pad(d.getHours()),
        mm: pad(d.getMinutes()),
        ss: pad(d.getSeconds()),
    }

    return format.replace(/DD|MM|YYYY|YY|HH|mm|ss/g, (token) => tokens[token])
}

/**
 * Returns a human-readable string representing how long ago a date was.
 * @category Date & Time
 * @function dayAgo
 * @param date - The date to compare (Date, string or number timestamp)
 * @returns "Today" if the date is today, otherwise "X day(s) ago"
 * @throws {Error} If the date is invalid
 * @throws {Error} If the date is in the future
 *
 * @example
 * dayAgo(new Date('2024-01-01')) // "X days ago"
 * dayAgo('2024-01-01')          // "X days ago"
 * dayAgo(1704067200000)         // "X days ago"
 */
function dayAgo(date: DateParam) {
    const d = new Date(date).getTime();
    const now = new Date().getTime();
    if (isNaN(d)) throw new Error("Invalid Date");

    const day_ago = Math.floor((now - d) / (1000 * 60 * 60 * 24));

    if (day_ago < 0) throw new Error("The date is not passed yet.");
    if (day_ago === 0) return "Today";

    const mess_unite = day_ago > 1 ? "days" : "day";
    return `${day_ago} ${mess_unite} ago`;
}

export { formatDate, dayAgo };