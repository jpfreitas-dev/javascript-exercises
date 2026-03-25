# 05-array-and-string-manipulation

### Tasks (English)

- **01. User Name Normalizer**: Create a script to handle messy inputs like `"  jaMIle fREItas  "`. 
    - **File:** `01-user-name-normalizer.js`
    - **Goal:** Use `trim()`, `toLowerCase()`, `split()`, and `slice()` to return `"Jamile Freitas"`.

- **02. SEO Slug Generator**: Convert a product title `"Smartphone Samsung Galaxy S24 Ultra"` into a URL-friendly slug.
    - **File:** `02-seo-slug-generator.js`
    - **Goal:** Result should be `"smartphone-samsung-galaxy-s24-ultra"` using `toLowerCase()` and `replaceAll()`.

- **03. Secure Token Extractor**: From the string `"Error: [Secret: 998877]"`, extract only the numerical token.
    - **File:** `03-secure-token-extractor.js`
    - **Goal:** Use `indexOf()` and `slice()` to isolate the digits.

- **04. Email Domain Obfuscator**: Hide the local part of emails in an array, leaving only the domain visible.
    - **File:** `04-email-domain-obfuscator.js`
    - **Goal:** Transform `["user@gmail.com"]` into `["***@gmail.com"]` using `map()` and `split()`.

- **05. Warehouse Inventory Flow**: Manage a list using LIFO (Last-In, First-Out) and FIFO (First-In, First-Out) logic.
    - **File:** `05-warehouse-inventory-flow.js`
    - **Goal:** Use `push()`, `unshift()`, `pop()`, and `shift()` to manipulate a `warehouse` array.

- **06. Content Censorship Engine**: Check a string against an array of "forbidden words" and mask them.
    - **File:** `06-content-censorship-engine.js`
    - **Goal:** Use `filter()` or `includes()` with `replaceAll()` to turn bad words into `"****"`.

- **07. Array Bisector and Inverter**: Split an array of 10 numbers exactly in half and reverse the second part.
    - **File:** `07-array-bisector-and-inverter.js`
    - **Goal:** Use `slice()` for the split and `reverse()` for the second half.

- **08. Price Range Validator**: Validate a list of product prices for consistency.
    - **File:** `08-price-range-validator.js`
    - **Goal:** Use `every()` to ensure all are numbers > 0 and `some()` to find if any is > 100.

- **09. CSV Data Parser**: Convert a raw string `"Apple,10,1.99;Banana,5,0.99"` into readable sentences.
    - **File:** `09-csv-data-parser.js`
    - **Goal:** Use `split(";")`, then `split(",")` inside a `map()` to format the output.

- **10. Specialized Type Filter**: Extract and format specific data types from a mixed array.
    - **File:** `10-specialized-type-filter.js`
    - **Goal:** Use `filter()` for strings, `map()` for uppercase, and `join("-")` for the final result.

<br>

---

### Tarefas (Português)

- **01. Normalizador de Nome de Usuário**: Trate inputs mal formatados como `"  jaMIle fREItas  "`.
    - **Arquivo:** `01-user-name-normalizer.js`
    - **Objetivo:** Use `trim()`, `toLowerCase()`, `split()` e `slice()` para retornar `"Jamile Freitas"`.

- **02. Gerador de Slug de SEO**: Converta um título de produto em uma URL amigável.
    - **Arquivo:** `02-seo-slug-generator.js`
    - **Objetivo:** O resultado deve ser `"smartphone-samsung-galaxy-s24-ultra"` usando `toLowerCase()` e `replaceAll()`.

- **03. Extrator de Token Seguro**: Da string `"Error: [Secret: 998877]"`, extraia apenas o token numérico.
    - **Arquivo:** `03-secure-token-extractor.js`
    - **Objetivo:** Use `indexOf()` e `slice()` para isolar os dígitos.

- **04. Ofuscador de Domínio de Email**: Esconda a parte local de e-mails em um array, deixando apenas o domínio visível.
    - **Arquivo:** `04-email-domain-obfuscator.js`
    - **Objetivo:** Transforme `["user@gmail.com"]` em `["***@gmail.com"]` usando `map()` e `split()`.

- **05. Fluxo de Inventário de Armazém**: Gerencie uma lista usando as lógicas LIFO e FIFO.
    - **Arquivo:** `05-warehouse-inventory-flow.js`
    - **Objetivo:** Use `push()`, `unshift()`, `pop()` e `shift()` para manipular o array.

- **06. Motor de Censura de Conteúdo**: Verifique uma string contra um array de "palavras proibidas" e mascare-as.
    - **Arquivo:** `06-content-censorship-engine.js`
    - **Objetivo:** Use `filter()` ou `includes()` com `replaceAll()` para transformar palavras ruins em `"****"`.

- **07. Bissetor e Inversor de Array**: Divida um array de 10 números ao meio e inverta a segunda parte.
    -