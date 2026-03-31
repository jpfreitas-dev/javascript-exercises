# 06-modern-js-logic-challenges

### Tasks (English)

- **01. The System Log Parser**: You receive an array where the first element is the error level and the rest are log messages: `["CRITICAL", "Memory Leak", "CPU Overheating"]`.
    - **File:** `01-system-log-parser.js`
    - **Goal:** Use the **Rest Operator** to capture the level and the logs. Create an **Arrow Function** that returns a formatted string: `"[CRITICAL ALERT]: Memory Leak | CPU Overheating"`.

- **02. Digital Menu Builder**: Merge two objects, `baseMenu` and `promoMenu`, into a `finalMenu`.
    - **File:** `02-digital-menu-builder.js`
    - **Goal:** Use the **Spread Operator** to merge them (promo should overwrite base). Use **Destructuring** to extract and log only the `mainDish` and `price` from the result.

- **03. User Profile Shaper**: Transform an array of "legacy" user objects (with keys like `user_id`, `user_email`) into a modern format.
    - **File:** `03-user-profile-shaper.js`
    - **Goal:** Use `.map()` with **Destructuring** in the function parameters to return new objects with keys `id`, `name`, and `email`. Ensure names are uppercase.

- **04. Smart Cart Calculator**: Create a function `calculateTotal` that accepts a dynamic number of prices.
    - **File:** `04-smart-cart-calculator.js`
    - **Goal:** Use **Rest Params** to receive arguments. Use a loop or method to sum them. If total > 500, apply a 10% discount using a **Ternary Operator**. Return the value with 2 decimal places.

- **05. Data Consistency Guard**: Validate a list of new products before "saving" them to a database.
    - **File:** `05-data-consistency-guard.js`
    - **Goal:** Use `.every()` to check if all objects have `id` and `price`. If valid, use the **Spread Operator** to return a new array where each object has an extra property `verified: true`.

<br>

---

### Tarefas (Português)

- **01. Parser de Logs do Sistema**: Você recebe um array onde o primeiro item é o nível do erro e o restante são mensagens: `["CRITICAL", "Memory Leak", "CPU Overheating"]`.
    - **Arquivo:** `01-system-log-parser.js`
    - **Objetivo:** Use o **Rest Operator** para capturar o nível e os logs. Crie uma **Arrow Function** que retorne: `"[CRITICAL ALERT]: Memory Leak | CPU Overheating"`.

- **02. Construtor de Menu Digital**: Mescle dois objetos, `baseMenu` e `promoMenu`, em um `finalMenu`.
    - **Arquivo:** `02-digital-menu-builder.js`
    - **Objetivo:** Use o **Spread Operator** para fundi-los (promo deve sobrescrever a base). Use **Destructuring** para extrair e logar apenas o `mainDish` e o `price` do resultado.

- **03. Modelador de Perfil de Usuário**: Transforme um array de objetos de usuário "legados" (chaves como `user_id`, `user_email`) para um formato moderno.
    - **Arquivo:** `03-user-profile-shaper.js`
    - **Objetivo:** Use `.map()` com **Destructuring** nos parâmetros da função para retornar novos objetos com chaves `id`, `name` e `email`. Garanta nomes em maiúsculas.

- **04. Calculadora de Carrinho Inteligente**: Crie uma função `calculateTotal` que aceite uma quantidade dinâmica de preços.
    - **Arquivo:** `04-smart-cart-calculator.js`
    - **Objetivo:** Use **Rest Params** para receber os argumentos. Some-os e, se o total for > 500, aplique 10% de desconto usando um **Operador Ternário**. Retorne com 2 casas decimais.

- **05. Guarda de Consistência de Dados**: Valide uma lista de novos produtos antes de "salvá-los".
    - **Arquivo:** `05-data-consistency-guard.js`
    - **Objetivo:** Use `.every()` para garantir que todos os objetos tenham `id` e `price`. Se válido, use o **Spread Operator** para retornar um novo array onde cada objeto tenha a propriedade `verified: true`.