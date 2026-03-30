# clear-af.js

Un package JavaScript rempli d'utilitaires pour rendre votre code **lisible af**. Parce que la clarté, c'est la clé de la survie en programmation.

📖 **Languages** : [🇬🇧 English](README.md) | [🇫🇷 Français](#)

---

## 📦 Installation
```bash
npm install clear-af
```

---

## 🚀 Utilisation rapide
```javascript
const clear = require('clear-af');

clear.prettyError("Une erreur !");
clear.camelify("hello world"); // "helloWorld"
clear.isEmpty(data);
```

---

## ✨ Fonctionnalités

### 🔍 Logging amélioré
Messages colorés et formatés pour un meilleur debugging.
```javascript
clear.prettyError(error);
clear.prettySuccess(message);
clear.prettyWarn(warning);
```

### ✅ Validation facile
Vérifiez vos données rapidement.
```javascript
clear.isEmpty(value);
clear.isEmail("test@example.com");
clear.isURL("https://example.com");
```

### 🔄 Manipulation d'objets
Clonez profondément et manipulez vos données.
```javascript
clear.deepClone(obj);
clear.noTwins([1, 2, 2, 3]); // [1, 2, 3]
```

### 📝 Transformation de strings
Convertissez vos strings en différents formats.
```javascript
clear.camelify("hello world");   // "helloWorld"
clear.kebabify("hello world");   // "hello-world"
clear.snakify("hello world");    // "hello_world"
clear.capitalize("hello");       // "Hello"
```

---

## 📚 API Complète

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

### Objets & Arrays
- `deepClone(obj)`
- `noTwins(array)`

### Transformation de strings
- `camelify(string)`
- `kebabify(string)`
- `snakify(string)`
- `capitalize(string)`

---

## 🤔 FAQ

**Q: Pourquoi "-af" dans le nom ?**  
R: Parce que ton code doit être lisible *af*, mec.

**Q: Compatible avec TypeScript ?**  
R: Oui ! Les types TypeScript sont inclus.

**Q: Ça ralentit mon app ?**  
R: Non, zéro overhead. Ce ne sont que des helpers.

---

## 📝 Licence

MIT - Libre de l'utiliser comme bon vous semble.

---

## 🤝 Contribution

Les contributions sont bienvenues !
```bash
git clone https://github.com/FroostDev/clear-af.js
cd clear-af.js
npm install
npm run build
```

---

**clear-af.js** - *Parce que la clarté, c'est la santé mentale du dev.* 🖤