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
declare function formatDate(date: DateParam, format?: string): string;
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
declare function dayAgo(date: DateParam): string;
export { formatDate, dayAgo };
//# sourceMappingURL=date.d.ts.map