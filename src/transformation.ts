/**
 * @category Transformation
 */

import { isEmpty } from './validation';

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
function camelify(str: string): string {
    let camelCased: string = "";
    if (!isEmpty(str)) {
        let cleaned = str.replace(/[^a-zA-Z0-9\s]/g, "");
        let toCamelify = cleaned.split(" ");

        camelCased = toCamelify.map((word, index) => {
            if (index === 0) return word.toLowerCase();
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
function kebabify(str: string): string {
    let kebabised: string = "";
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
function snakify(str: string): string {
    let snaked: string = "";
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
function capitalize(str: string): string {
    if (isEmpty(str)) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export {camelify, kebabify, snakify, capitalize};