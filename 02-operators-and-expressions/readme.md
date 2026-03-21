# 02-operators-and-expressions

### Tasks (English)

- **01. Arithmetic Precision**: Create a script that adds `0.1` and `0.2`. Show why the result is not exactly `0.3`. Use `toFixed()` or `Math.round()` to solve the precision issue and explain the "Floating Point" problem in comments.
- **02. The Equality Matrix**: Compare the following pairs using both `==` and `===`: `[]` and `false`, `[10]` and `10`, `null` and `undefined`, `""` and `0`. Document which ones triggered implicit coercion.
- **03. Object.is() vs Strict Equality**: Use `Object.is()` to compare `NaN` with `NaN` and `-0` with `+0`. Compare the same values using `===`. Explain why `Object.is()` is more "precise" in these edge cases.
- **04. Logical Short-Circuit (AND)**: Create a variable `isLoggedIn = true`. Use the `&&` operator to execute a `console.log("Welcome!")` only if the variable is true, without using an `if` statement.
- **05. Logical Short-Circuit (OR)**: Create a variable `userColor`. Use the `||` operator to assign a "default" value of `"black"` to a new variable `finalColor` if `userColor` is empty or undefined.
- **06. Nullish Coalescing (`??`)**: Create a scenario where a user has `0` friends. Show the difference between using `||` and `??` to display the number of friends. Explain why `??` is better for handling the number `0`.
- **07. Increment/Decrement Nuances**: Create a variable `count = 5`. Log the results of `count++` and `++count` in separate lines. Explain the difference between postfix and prefix operators.
- **08. Relational Operators**: Compare two strings: `"apple"` and `"banana"` using `>`. Explain how JavaScript compares strings based on Unicode/alphabetical order.
- **09. Compound Assignment**: Start with `balance = 100`. Use compound operators (`+=`, `-=`, `*=`, `/=`) to update the balance in 4 different steps and log the final value.
- **10. Logical NOT Double Negation**: Use `!!` to convert the values `"Hello"`, `0`, `undefined`, and `{}` into actual Booleans. List which ones are "Truthy" and which are "Falsy".
- **11. Unary Plus Conversion**: Use the unary plus operator (`+`) to convert the strings `"42"`, `"3.14"`, and `"abc"` into numbers. Log the result and the new `typeof` for each.
- **12. Comma Operator Usage**: (Advanced) Write a small code snippet using the comma operator `,` to evaluate multiple expressions in a single line and return the last one.
- **13. Delete Operator**: Create an object `car` with properties `make` and `model`. Use the `delete` operator to remove one property and try to access it afterwards.
- **14. Assignment Priority**: Create a complex expression like `a = b = c = 5 + 5`. Explain the order of execution (associativity) and what value each variable holds at the end.

<br>

---

### Tarefas (Português)

- **01. Precisão Aritmética**: Crie um script que some `0.1` e `0.2`. Mostre por que o resultado não é exatamente `0.3`. Use `toFixed()` ou `Math.round()` para resolver e explique o problema de "Ponto Flutuante" nos comentários.
- **02. A Matriz de Igualdade**: Compare os seguintes pares usando tanto `==` quanto `===`: `[]` e `false`, `[10]` e `10`, `null` e `undefined`, `""` e `0`. Documente quais dispararam coerção implícita.
- **03. Object.is() vs Igualdade Estrita**: Use `Object.is()` para comparar `NaN` com `NaN` e `-0` com `+0`. Compare os mesmos valores usando `===`. Explique por que `Object.is()` é mais "preciso" nesses casos limite.
- **04. Curto-Circuito Lógico (AND)**: Crie uma variável `isLoggedIn = true`. Use o operador `&&` para executar um `console.log("Bem-vindo!")` apenas se a variável for verdadeira, sem usar um `if`.
- **05. Curto-Circuito Lógico (OR)**: Crie uma variável `userColor`. Use o operador `||` para atribuir um valor "padrão" de `"black"` a uma nova variável `finalColor` se `userColor` estiver vazia ou indefinida.
- **06. Coalescência Nula (`??`)**: Crie um cenário onde um usuário tem `0` amigos. Mostre a diferença entre usar `||` e `??` para exibir o número de amigos. Explique por que o `??` é melhor para lidar com o número `0`.
- **07. Nuances de Incremento/Decremento**: Crie uma variável `count = 5`. Logue os resultados de `count++` e `++count` em linhas separadas. Explique a diferença entre operadores pós-fixados e pré-fixados.
- **08. Operadores Relacionais**: Compare duas strings: `"apple"` e `"banana"` usando `>`. Explique como o JavaScript compara strings baseado na ordem Unicode/alfabética.
- **09. Atribuição Composta**: Comece com `balance = 100`. Use operadores compostos (`+=`, `-=`, `*=`, `/=`) para atualizar o saldo em 4 etapas diferentes e logue o valor final.
- **10. Dupla Negação Lógica**: Use `!!` para converter os valores `"Olá"`, `0`, `undefined` e `{}` em Booleans reais. Liste quais são "Truthy" e quais são "Falsy".
- **11. Conversão com Unário Plus**: Use o operador unário de soma (`+`) para converter as strings `"42"`, `"3.14"` e `"abc"` em números. Logue o resultado e o novo `typeof` de cada um.
- **12. Operador Vírgula**: (Avançado) Escreva um pequeno trecho de código usando o operador vírgula `,` para avaliar múltiplas expressões em uma única linha e retornar a última.
- **13. Operador Delete**: Crie um objeto `car` com as propriedades `make` e `model`. Use o operador `delete` para remover uma propriedade e tente acessá-la depois.
- **14. Prioridade de Atribuição**: Crie uma expressão complexa como `a = b = c = 5 + 5`. Explique a ordem de execução (associatividade) e qual valor cada variável terá no final.