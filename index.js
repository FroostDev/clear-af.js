/*
 ____  ____   __   ____         __   ____          __  ____ 
(  _ \(  __) / _\ (    \ ___   / _\ (  __)       _(  )/ ___)
 )   / ) _) /    \ ) D ((___) /    \ ) _)   _   / \) \\___ \
(__\_)(____)\_/\_/(____/      \_/\_/(__)   (_)  \____/(____/

Made by FroostDev | https://github.com/FroostDev - MIT Licence
*/

/**
 * =======================
 * Functions for utilities
 * =======================
 */
function getDate(time) {
    return time ? `[${new Date().toLocaleString()}]` : '';
}

/*
 * =================
 * Logging utilities
 * =================
 */
function prettyError(err, time=false) {
    const date = getDate(time);
    console.log(`\x1b[1;41m ✕ ${date} - ${err} \x1b[0m`);
}
function prettyWarn(warn, time=false) {
    const date = getDate(time);
    console.log(`\x1b[1;43m ⚠ ${date} - ${warn} \x1b[0m`);
}
function prettySuccess(success, time=false) {
    const date = getDate(time);
    console.log(`\x1b[1;42m ✔ ${date} - ${success} \x1b[0m`);
}
function prettyInfo(info, time=false) {
    const date = getDate(time);
    console.log(`\x1b[1;44m ℹ ${date} - ${info} \x1b[0m`);
}
function prettyDebug(debug, time=false) {
    const date = getDate(time);
    console.log(`\x1b[1;97m ⚙ ${date} - ${debug} \x1b[0m`);
}
function logSeparator() {
    console.log(`\x1b[1m${'═'.repeat(50)}\x1b[0m`);
}
function logHeader(title) {
    console.log(`\x1b[1m╔${'═'.repeat(title.length + 2)}╗\x1b[0m`);
    console.log(`\x1b[1m║ ${title} ║\x1b[0m`);
    console.log(`\x1b[1m╚${'═'.repeat(title.length + 2)}╝\x1b[0m`);
}

logHeader("Test des fonctions")
prettyError("Ceci est une erreur par exemple");
prettyError("Ceci est une erreur par exemple", true);
logSeparator();
prettyWarn("Ceci est un warn par exemple");
prettyWarn("Ceci est un warn par exemple", true);
logSeparator();
prettySuccess("Ceci est un succes par exemple");
prettySuccess("Ceci est un succes par exemple", true);
logSeparator();
prettyInfo("Ceci est une info par exemple");
prettyInfo("Ceci est une info par exemple", true);
logSeparator();
prettyDebug("Ceci est un debug par exemple");
prettyDebug("Ceci est un debug par exemple", true);