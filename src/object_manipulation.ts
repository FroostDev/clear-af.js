/**
 * @category Object Manipulation
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
function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) return obj.map(item => deepClone(item)) as T;

    const cloned = {} as T;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) cloned[key] = deepClone(obj[key]);
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
function noTwins(arr: unknown[]): unknown[] {
    return Array.from(new Set(arr));
}

export {deepClone, noTwins};