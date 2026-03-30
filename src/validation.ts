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
function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
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
function isType(value: unknown, type: string): boolean {
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
function isEmail(email: string): boolean {
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
function isURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

export {isEmpty, isType, isEmail, isURL};