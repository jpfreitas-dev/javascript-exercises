# 01-variables-data-types-and-scopes

### Tasks (English)

- **01. The Hoisting Enigma**: Create a script that calls a function and logs a variable before they are declared. Use `var` for the variable. Then, try to do the same with `let` and `const` inside a block and document the difference in the comments.
- **02. Shadowing and Scope Chain**: Declare a global variable `layer = "global"`. Create a function that declares `layer = "function"`. Inside that function, create an `if` block that declares `layer = "block"`. Log the value at every level and explain how the Scope Chain works.
- **03. Global Namespace Pollution**: Write a piece of code that accidentally creates a global variable from inside a function (without using `let`, `var`, or `const`). Demonstrate how to fix it and explain why this is a bad practice.
- **04. Constants and Mutation**: Declare an object using `const`. Change one of its properties. Then, try to reassign the entire object to a new value. Comment on why the property change worked but the reassignment failed.
- **05. String Lab**: Create a string and use methods to: find its length, convert to uppercase, extract a slice, and replace a word. Show that the original string remains unchanged (Immutability).
- **06. Number Limits**: Create a variable with `Number.MAX_SAFE_INTEGER`. Add `1` to it and then add `2`. Log both results. Then, do the same using `BigInt` (`n` suffix) and show the difference in precision.
- **07. Symbol Uniqueness**: Create two Symbols with the same description: `Symbol("id")`. Compare them using `===`. Use one of them as a key in an object and try to access it using a regular string key `"id"`.
- **08. Null vs Undefined**: Create a variable and don't assign a value. Create another and explicitly assign `null`. Use `typeof` on both. Create a comparison that returns `true` for them and another that returns `false`.
- **09. Dynamic Typing**: Create a variable `data`. Assign a Number, then a String, then a Boolean. Use `typeof` after each assignment to demonstrate JavaScript's dynamic typing system.
- **10. The TDZ (Temporal Dead Zone)**: Write a code block that accesses a `let` variable inside a function, but the variable is declared at the end of the function. Explain the error triggered.
- **11. Block Scope in Loops**: Create a `for` loop that uses `var` for the counter. Outside the loop, log the counter. Then, do the same with `let` and compare the results.
- **12. Template Literal Expressions**: Create variables for `product`, `price`, and `quantity`. Use a Template Literal to calculate the total price directly inside the `${}` placeholder and format a professional message.
- **13. Explicit Coercion Challenge**: Convert the following values to Boolean, Number, and String: `0`, `"123"`, `undefined`, `null`, `NaN`. Create a table-like log with the results.
- **14. Multi-line Strings**: Use Template Literals to create a string that spans 5 lines without using `\n`.
- **15. Boolean Logic with Primitives**: Create variables using all 7 primitive types. Write a script that checks which ones are "Truthy" and which ones are "Falsy" using an `if` statement for each.

<br>

---

### Tarefas (Português)

- **01. O Enigma do Hoisting**: Crie um script que chama uma função e loga uma variável antes de serem declaradas. Use `var` para a variável. Depois, tente fazer o mesmo com `let` e `const` dentro de um bloco e documente a diferença nos comentários.
- **02. Shadowing e Scope Chain**: Declare uma variável global `layer = "global"`. Crie uma função que declare `layer = "function"`. Dentro dessa função, crie um bloco `if` que declare `layer = "block"`. Logue o valor em cada nível e explique como a Scope Chain funciona.
- **03. Poluição do Namespace Global**: Escreva um código que acidentalmente crie uma variável global de dentro de uma função (sem usar `let`, `var` ou `const`). Demonstre como corrigir e explique por que isso é uma má prática.
- **04. Constantes e Mutação**: Declare um objeto usando `const`. Altere uma de suas propriedades. Depois, tente reatribuir o objeto inteiro a um novo valor. Comente por que a alteração da propriedade funcionou, mas a reatribuição falhou.
- **05. Laboratório de Strings**: Crie uma string e use métodos para: encontrar seu tamanho, converter para maiúsculas, extrair um pedaço (slice) e substituir uma palavra. Mostre que a string original permanece inalterada (Immutabilidade).
- **06. Limites Numéricos**: Crie uma variável com `Number.MAX_SAFE_INTEGER`. Some `1` a ela e depois some `2`. Logue ambos os resultados. Então, faça o mesmo usando `BigInt` (sufixo `n`) e mostre a diferença na precisão.
- **07. Unicidade de Symbols**: Crie dois Symbols com a mesma descrição: `Symbol("id")`. Compare-os usando `===`. Use um deles como chave em um objeto e tente acessá-lo usando uma chave de string comum `"id"`.
- **08. Null vs Undefined**: Crie uma variável e não atribua valor. Crie outra e atribua explicitamente `null`. Use `typeof` em ambas. Crie uma comparação que retorne `true` para elas e outra que retorne `false`.
- **09. Tipagem Dinâmica**: Crie uma variável `data`. Atribua um Number, depois uma String, depois um Boolean. Use `typeof` após cada atribuição para demonstrar o sistema de tipagem dinâmica do JavaScript.
- **10. A TDZ (Zona Morta Temporal)**: Escreva um bloco de código que acesse uma variável `let` dentro de uma função, mas a variável é declarada apenas no final da função. Explique o erro gerado.
- **11. Escopo de Bloco em Loops**: Crie um loop `for` que use `var` para o contador. Fora do loop, logue o contador. Depois, faça o mesmo com `let` e compare os resultados.
- **12. Expressões em Template Literals**: Crie variáveis para `product`, `price` e `quantity`. Use uma Template Literal para calcular o preço total diretamente dentro do espaço `${}` e formate uma mensagem profissional.
- **13. Desafio de Coerção Explícita**: Converta os seguintes valores para Boolean, Number e String: `0`, `"123"`, `undefined`, `null`, `NaN`. Crie um log em formato de tabela com os resultados.
- **14. Strings de Múltiplas Linhas**: Use Template Literals para criar uma string que ocupe 5 linhas sem usar o caractere `\n`.
- **15. Lógica Booleana com Primitivos**: Crie variáveis usando todos os 7 tipos primitivos. Escreva um script que verifique quais são "Truthy" e quais são "Falsy" usando um `if` para cada um.