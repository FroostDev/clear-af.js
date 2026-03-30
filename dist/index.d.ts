/**
 * =======================
 * Functions for utilities
 * =======================
 */
declare function getDate(time?: boolean): string;
/**
 * Show a pretty error log message with optional date information
 * @function prettyError
 * @param err - Error message to display
 * @param time - Include or not a timestamp
 */
declare function prettyError(err: string, time?: boolean): void;
/**
 * Show a pretty warn log message with optional date information
 * @function prettyWarn
 * @param warn - Warning message to display
 * @param time - Include or not a timestamp
 */
declare function prettyWarn(warn: string, time?: boolean): void;
/**
 * Show a pretty success log message with optional date information
 * @function prettySuccess
 * @param success - Success message to display
 * @param time - Include or not a timestamp
 */
declare function prettySuccess(success: string, time?: boolean): void;
/**
 * Show a pretty information log message with optional date information
 * @function prettyInfo
 * @param info - Information message to display
 * @param time - Include or not a timestamp
 */
declare function prettyInfo(info: string, time?: boolean): void;
/**
 * Show a pretty debug log message with optional date information
 * @function prettyDebug
 * @param debug - Debug message to display
 * @param time - Include or not a timestamp
 */
declare function prettyDebug(debug: string, time?: boolean): void;
/**
 * Show a separator line in console
 * @function logSeparator
 */
declare function logSeparator(): void;
/**
 * Display a header with a title in the center
 * @function logHeader
 * @param title - The title of the header
 */
declare function logHeader(title: string): void;
/**
 *
 * Validation utilities
 *
 */
/**
 * Check if any type of variable is empty
 * @function isEmpty
 * @param value - The variable to check
 * @returns {boolean} True if the value is empty, false otherwise
 */
declare function isEmpty(value: unknown): boolean;
/**
 * Check if the variable is of the chosen type
 * @function isType
 * @param value - The variable to check
 * @param type - The type you want
 * @returns {boolean} True if the value is of the chosen type, false otherwise
 */
declare function isType(value: unknown, type: string): boolean;
/**
 * Check if an email is valid
 * @function isEmail
 * @param email - The email to check
 * @returns {boolean} True if the email is valid, false otherwise
 */
declare function isEmail(email: string): boolean;
/**
 * Check if a URL is valid
 * @function isURL
 * @param url - The URL to check
 * @returns {boolean} True if the URL is valid, false otherwise
 */
declare function isURL(url: string): boolean;
/**
 *
 * Object manipulation
 *
 */
/**
 * Create a deep clone of any object or array
 * @function deepClone
 * @param obj - The object or array to clone
 * @returns A deep clone of the object
 */
declare function deepClone<T>(obj: T): T;
/**
 * Remove duplicate values from an array
 * @function noTwins
 * @param arr - The array to remove duplicates from
 * @returns {unknown[]} A new array with unique values only
 */
declare function noTwins(arr: unknown[]): unknown[];
/**
 *
 * Transforamtion utilites
 *
 */
/**
 * Transform a string to camelCase format
 * @function camelify
 * @param str - The string to transform
 * @returns {string} The string in camelCase format
 */
declare function camelify(str: string): string;
/**
 * Transform a string to kebab-case format
 * @function kebabify
 * @param str - The string to transform
 * @returns {string} The string in kebab-case format
 */
declare function kebabify(str: string): string;
/**
 * Transform a string to snake_case format
 * @function snakify
 * @param str - The string to transform
 * @returns {string} The string in snake_case format
 */
declare function snakify(str: string): string;
/**
 * Capitalize the first character of a string
 * @function capitalize
 * @param str - The string to capitalize
 * @returns {string} The string with the first character in uppercase
 */
declare function capitalize(str: string): string;
//# sourceMappingURL=index.d.ts.map