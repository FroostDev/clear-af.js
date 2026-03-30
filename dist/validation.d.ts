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
export { isEmpty, isType, isEmail, isURL };
//# sourceMappingURL=validation.d.ts.map