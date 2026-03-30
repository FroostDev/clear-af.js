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
declare function prettyError(err: string, time?: boolean): void;
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
declare function prettyWarn(warn: string, time?: boolean): void;
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
declare function prettySuccess(success: string, time?: boolean): void;
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
declare function prettyInfo(info: string, time?: boolean): void;
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
declare function prettyDebug(debug: string, time?: boolean): void;
/**
 * Show a separator line in console
 * @category Logging
 * @function logSeparator
 * @example
 * logSeparator();
 * // Output: ══════════════════════════════════════════════════
 */
declare function logSeparator(): void;
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
declare function logHeader(title: string): void;
export { prettyError, prettyWarn, prettySuccess, prettyInfo, prettyDebug, logSeparator, logHeader };
//# sourceMappingURL=logging.d.ts.map