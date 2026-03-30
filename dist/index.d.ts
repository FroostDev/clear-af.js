/**
 * =======================
 * Functions for utilities
 * =======================
 */
declare function getDate(time?: boolean): string;
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
/**
 *
 * Validation utilities
 *
 */
/**
 * Check if any type of variable is empty
 * @category Validation
 * @function isEmpty
 * @param value - The variable to check
 * @returns {boolean} True if the value is empty, false otherwise
 * @example
 * isEmpty("");          // true
 * isEmpty("   ");       // true
 * isEmpty(null);        // true
 * isEmpty([]);          // true
 * isEmpty({});          // true
 * isEmpty("hello");     // false
 * isEmpty([1, 2]);      // false
 */
declare function isEmpty(value: unknown): boolean;
/**
 * Check if the variable is of the chosen type
 * @category Validation
 * @function isType
 * @param value - The variable to check
 * @param type - The type you want
 * @returns {boolean} True if the value is of the chosen type, false otherwise
 * @example
 * isType("hello", "string");    // true
 * isType(42, "number");         // true
 * isType([], "object");         // true
 * isType("42", "number");       // false
 */
declare function isType(value: unknown, type: string): boolean;
/**
 * Check if an email is valid
 * @category Validation
 * @function isEmail
 * @param email - The email to check
 * @returns {boolean} True if the email is valid, false otherwise
 * @example
 * isEmail("alice@example.com");      // true
 * isEmail("bob.smith@company.co.uk"); // true
 * isEmail("invalid@.com");           // false
 * isEmail("no-at-sign.com");         // false
 */
declare function isEmail(email: string): boolean;
/**
 * Check if a URL is valid
 * @category Validation
 * @function isURL
 * @param url - The URL to check
 * @returns {boolean} True if the URL is valid, false otherwise
 * @example
 * isURL("https://www.example.com");     // true
 * isURL("http://example.com/path");     // true
 * isURL("www.example.com");             // false (missing protocol)
 * isURL("not a url");                   // false
 */
declare function isURL(url: string): boolean;
/**
 *
 * Object manipulation
 *
 */
/**
 * Create a deep clone of any object or array
 * @category Object Manipulation
 * @function deepClone
 * @param obj - The object or array to clone
 * @returns A deep clone of the object
 * @example
 * const user = { name: "Alice", skills: ["JS", "TS"] };
 * const clone = deepClone(user);
 * clone.name = "Bob";
 * clone.skills[0] = "Python";
 * console.log(user.name);    // "Alice" (unchanged)
 * console.log(user.skills[0]); // "JS" (unchanged)
 */
declare function deepClone<T>(obj: T): T;
/**
 * Remove duplicate values from an array
 * @category Object Manipulation
 * @function noTwins
 * @param arr - The array to remove duplicates from
 * @returns {unknown[]} A new array with unique values only
 * @example
 * noTwins([1, 2, 2, 3, 3, 3]);        // [1, 2, 3]
 * noTwins(["a", "b", "a", "c"]);      // ["a", "b", "c"]
 * noTwins([1, "1", 1, "1"]);          // [1, "1"]
 */
declare function noTwins(arr: unknown[]): unknown[];
/**
 *
 * Transformation utilites
 *
 */
/**
 * Transform a string to camelCase format
 * @category Transformation
 * @function camelify
 * @param str - The string to transform
 * @returns {string} The string in camelCase format
 * @example
 * camelify("hello world");       // "helloWorld"
 * camelify("C'est un test");     // "cestUnTest"
 * camelify("foo bar baz");       // "fooBarBaz"
 */
declare function camelify(str: string): string;
/**
 * Transform a string to kebab-case format
 * @category Transformation
 * @function kebabify
 * @param str - The string to transform
 * @returns {string} The string in kebab-case format
 * @example
 * kebabify("hello world");       // "hello-world"
 * kebabify("C'est un test");     // "ceststun-test"
 * kebabify("foo bar baz");       // "foo-bar-baz"
 */
declare function kebabify(str: string): string;
/**
 * Transform a string to snake_case format
 * @category Transformation
 * @function snakify
 * @param str - The string to transform
 * @returns {string} The string in snake_case format
 * @example
 * snakify("hello world");        // "hello_world"
 * snakify("C'est un test");      // "ceststun_test"
 * snakify("foo bar baz");        // "foo_bar_baz"
 */
declare function snakify(str: string): string;
/**
 * Capitalize the first character of a string
 * @category Transformation
 * @function capitalize
 * @param str - The string to capitalize
 * @returns {string} The string with the first character in uppercase
 * @example
 * capitalize("hello");        // "Hello"
 * capitalize("hello world");  // "Hello world"
 * capitalize("");             // ""
 */
declare function capitalize(str: string): string;
export { getDate, prettyError, prettyWarn, prettySuccess, prettyInfo, prettyDebug, logSeparator, logHeader, isEmpty, isType, isEmail, isURL, deepClone, noTwins, camelify, kebabify, snakify, capitalize };
//# sourceMappingURL=index.d.ts.map