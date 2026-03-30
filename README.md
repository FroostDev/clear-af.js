# clear-af.js

A JavaScript package packed with utilities to make your code **readable af**. Because clarity is the key to survival in programming.

📖 **Languages** : [🇬🇧 English](#) | [🇫🇷 Français](README_FR.md)

📚 **[Full Documentation](https://froostdev.github.io/clear-af.js/)**

---

## 📦 Installation
```bash
npm install clear-af
```

---

## 🚀 Quick Start
```javascript
const clear = require('clear-af');

clear.prettyError("An error!");
clear.camelify("hello world"); // "helloWorld"
clear.isEmpty(data);
```

---

## ✨ Features

### 🔍 Improved Logging
Colored and formatted messages for better debugging.
```javascript
clear.prettyError(error);
clear.prettySuccess(message);
clear.prettyWarn(warning);
```

### ✅ Easy Validation
Verify your data quickly.
```javascript
clear.isEmpty(value);
clear.isEmail("test@example.com");
clear.isURL("https://example.com");
```

### 🔄 Object Manipulation
Deep clone and manipulate your data.
```javascript
clear.deepClone(obj);
clear.noTwins([1, 2, 2, 3]); // [1, 2, 3]
```

### 📝 String Transformation
Convert your strings to different formats.
```javascript
clear.camelify("hello world");   // "helloWorld"
clear.kebabify("hello world");   // "hello-world"
clear.snakify("hello world");    // "hello_world"
clear.capitalize("hello");       // "Hello"
```

---

## 📚 Complete API

### Logging
- `prettyError(message, showTime?)`
- `prettyWarn(message, showTime?)`
- `prettySuccess(message, showTime?)`
- `prettyInfo(message, showTime?)`
- `prettyDebug(message, showTime?)`
- `logSeparator()`
- `logHeader(title)`

### Validation
- `isEmpty(value)`
- `isType(value, type)`
- `isEmail(email)`
- `isURL(url)`

### Objects & Arrays
- `deepClone(obj)`
- `noTwins(array)`

### String Transformation
- `camelify(string)`
- `kebabify(string)`
- `snakify(string)`
- `capitalize(string)`

---

## 🤔 FAQ

**Q: Why "-af" in the name?**  
A: Because your code should be readable *af*, mate.

**Q: Is it compatible with TypeScript?**  
A: Yes! TypeScript types are included.

**Q: Will it slow down my app?**  
A: No, zero overhead. These are just helpers.

---

## 📝 License

MIT - Free to use as you see fit.

---

## 🤝 Contributing

Contributions are welcome!
```bash
git clone https://github.com/FroostDev/clear-af.js
cd clear-af.js
npm install
npm run build
```

---

**clear-af.js** - *Because clarity is the developer's mental health.* 🖤