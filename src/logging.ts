/**
 * @category Logging
 */

/**
 * Helper function to get formatted date
 * @internal
 */
function getDate(time: boolean = false): string {
    return time ? `[${new Date().toLocaleString()}]` : '';
}

/**
 * Show a pretty error log message with optional date information
 * @category Logging
 * @function prettyError
 * @param err - Error message to display
 * @param time - Include or not a timestamp
 * @example
 * prettyError("Database connection failed");
 * // Output: ✕ - Database connection failed (in red)
 * 
 * prettyError("Critical error", true);
 * // Output: ✕ [30/03/2026 10:30:45] - Critical error (in red with timestamp)
 */
function prettyError(err: string, time = false): void {
    const date = getDate(time);
    console.log(`\x1b[1;41m ✕ ${date} - ${err} \x1b[0m`);
}

/**
 * Show a pretty warn log message with optional date information
 * @category Logging
 * @function prettyWarn
 * @param warn - Warning message to display
 * @param time - Include or not a timestamp
 * @example
 * prettyWarn("Deprecated function used");
 * // Output: ⚠ - Deprecated function used (in orange)
 * 
 * prettyWarn("Low memory", true);
 * // Output: ⚠ [30/03/2026 10:30:45] - Low memory (in orange with timestamp)
 */
function prettyWarn(warn: string, time = false): void {
    const date = getDate(time);
    console.log(`\x1b[1;43m ⚠ ${date} - ${warn} \x1b[0m`);
}

/**
 * Show a pretty success log message with optional date information
 * @category Logging
 * @function prettySuccess
 * @param success - Success message to display
 * @param time - Include or not a timestamp
 * @example
 * prettySuccess("User created successfully");
 * // Output: ✔ - User created successfully (in green)
 * 
 * prettySuccess("Data saved", true);
 * // Output: ✔ [30/03/2026 10:30:45] - Data saved (in green with timestamp)
 */
function prettySuccess(success: string, time = false): void {
    const date = getDate(time);
    console.log(`\x1b[1;42m ✔ ${date} - ${success} \x1b[0m`);
}

/**
 * Show a pretty information log message with optional date information
 * @category Logging
 * @function prettyInfo
 * @param info - Information message to display
 * @param time - Include or not a timestamp
 * @example
 * prettyInfo("Server is running on port 3000");
 * // Output: ℹ - Server is running on port 3000 (in blue)
 * 
 * prettyInfo("Cache cleared", true);
 * // Output: ℹ [30/03/2026 10:30:45] - Cache cleared (in blue with timestamp)
 */
function prettyInfo(info: string, time = false): void {
    const date = getDate(time);
    console.log(`\x1b[1;44m ℹ ${date} - ${info} \x1b[0m`);
}

/**
 * Show a pretty debug log message with optional date information
 * @category Logging
 * @function prettyDebug
 * @param debug - Debug message to display
 * @param time - Include or not a timestamp
 * @example
 * prettyDebug("Variable x = 42");
 * // Output: ⚙ - Variable x = 42 (in white)
 * 
 * prettyDebug("Function call trace", true);
 * // Output: ⚙ [30/03/2026 10:30:45] - Function call trace (in white with timestamp)
 */
function prettyDebug(debug: string, time = false): void {
    const date = getDate(time);
    console.log(`\x1b[1;97m ⚙ ${date} - ${debug} \x1b[0m`);
}

/**
 * Show a separator line in console
 * @category Logging
 * @function logSeparator
 * @example
 * logSeparator();
 * // Output: ══════════════════════════════════════════════════
 */
function logSeparator(): void {
    console.log(`\x1b[1m${'═'.repeat(50)}\x1b[0m`);
}

/**
 * Display a header with a title in the center
 * @category Logging
 * @function logHeader
 * @param title - The title of the header
 * @example
 * logHeader("Welcome");
 * // Output:
 * // ╔═════════╗
 * // ║ Welcome ║
 * // ╚═════════╝
 */
function logHeader(title: string): void {
    console.log(`\x1b[1m╔${'═'.repeat(title.length + 2)}╗\x1b[0m`);
    console.log(`\x1b[1m║ ${title} ║\x1b[0m`);
    console.log(`\x1b[1m╚${'═'.repeat(title.length + 2)}╝\x1b[0m`);
}

export { prettyError, prettyWarn, prettySuccess, prettyInfo, prettyDebug, logSeparator, logHeader };