"use strict";
/*
 ____  ____   __   ____         __   ____          __  ____
(  _ \(  __) / _\ (    \ ___   / _\ (  __)       _(  )/ ___)
 )   / ) _) /    \ ) D ((___) /    \ ) _)   _   / \) \\___ \
(__\_)(____)\_/\_/(____/      \_/\_/(__)   (_)  \____/(____/

Made by FroostDev | https://github.com/FroostDev - MIT Licence
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = getDate;
exports.prettyError = prettyError;
exports.prettyWarn = prettyWarn;
exports.prettySuccess = prettySuccess;
exports.prettyInfo = prettyInfo;
exports.prettyDebug = prettyDebug;
exports.logSeparator = logSeparator;
exports.logHeader = logHeader;
exports.isEmpty = isEmpty;
exports.isType = isType;
exports.isEmail = isEmail;
exports.isURL = isURL;
exports.deepClone = deepClone;
exports.noTwins = noTwins;
exports.camelify = camelify;
exports.kebabify = kebabify;
exports.snakify = snakify;
exports.capitalize = capitalize;
/**
 * =======================
 * Functions for utilities
 * =======================
 */
function getDate(time = false) {
    return time ? `[${new Date().toLocaleString()}]` : '';
}
/*
 * =================
 * Logging utilities
 * =================
 */
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
function prettyError(err, time = false) {
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
function prettyWarn(warn, time = false) {
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
function prettySuccess(success, time = false) {
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
function prettyInfo(info, time = false) {
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
function prettyDebug(debug, time = false) {
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
function logSeparator() {
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
function logHeader(title) {
    console.log(`\x1b[1m╔${'═'.repeat(title.length + 2)}╗\x1b[0m`);
    console.log(`\x1b[1m║ ${title} ║\x1b[0m`);
    console.log(`\x1b[1m╚${'═'.repeat(title.length + 2)}╝\x1b[0m`);
}
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
function isEmpty(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === "string")
        return value.trim().length === 0;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
}
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
function isType(value, type) {
    return typeof value === type;
}
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
function isEmail(email) {
    const regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
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
function isURL(url) {
    try {
        new URL(url);
        return true;
    }
    catch (error) {
        return false;
    }
}
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
function deepClone(obj) {
    if (obj === null || typeof obj !== "object")
        return obj;
    if (Array.isArray(obj))
        return obj.map(item => deepClone(item));
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}
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
function noTwins(arr) {
    return Array.from(new Set(arr));
}
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
function camelify(str) {
    let camelCased = "";
    if (!isEmpty(str)) {
        let cleaned = str.replace(/[^a-zA-Z0-9\s]/g, "");
        let toCamelify = cleaned.split(" ");
        camelCased = toCamelify.map((word, index) => {
            if (index === 0)
                return word.toLowerCase();
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
            .join('');
    }
    return camelCased;
}
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
function kebabify(str) {
    let kebabised = "";
    if (!isEmpty(str)) {
        let cleaned = str.replace(/[^a-zA-Z0-9\s]/g, "");
        let toKebabify = cleaned.split(" ");
        kebabised = toKebabify.map(word => word.toLowerCase())
            .join("-");
    }
    return kebabised;
}
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
function snakify(str) {
    let snaked = "";
    if (!isEmpty(str)) {
        let cleaned = str.replace(/[^a-zA-Z0-9\s]/g, "");
        let toSnakify = cleaned.split(" ");
        snaked = toSnakify.map(word => word.toLowerCase())
            .join("_");
    }
    return snaked;
}
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
function capitalize(str) {
    if (isEmpty(str))
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
