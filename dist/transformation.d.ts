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
export { camelify, kebabify, snakify, capitalize };
//# sourceMappingURL=transformation.d.ts.map