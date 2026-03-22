# 03-control-flow-and-loops (Advanced Logic)

### Tasks (English)

- **01. The Tax Bracket Engine**: Create a system that calculates income tax for 10 different salaries. Salaries below 2,000 are exempt. From 2,001 to 5,000, 15% tax. Above 5,000, 27.5% tax. **Challenge:** If the tax amount is a "Falsy" value (0), print "Tax Free". Otherwise, print the net salary using Template Literals.
- **02. Multi-Condition Validator**: Write a script that checks a `password`. It must have at least 8 characters, at least one number, and at least one special character (check this using a loop and string comparisons). Print specific errors for each missing requirement using a `switch(true)`.
- **03. The Prime Number Sequence**: Write a loop that finds and prints all prime numbers between 1 and 100. **Constraint:** You must use nested loops and a "flag" variable to determine primality.
- **04. Fibonacci Sequence Generator**: Use a `while` loop to generate the first 20 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5...). You must manage three variables to shift the values in each iteration.
- **05. Bubble Sort Logic (Conceptual)**: Given an array of 10 unsorted numbers, use nested `for` loops to sort them in ascending order manually. **Constraint:** You are NOT allowed to use `.sort()`. You must swap values using a temporary variable.
- **06. The Digital Root**: Create a variable `num` (e.g., 942). Use a `while` loop to sum its digits (9+4+2 = 15), then sum the digits of the result (1+5 = 6) until you reach a single-digit number. Log every step.
- **07. Armstrong Number Checker**: An Armstrong number (like 153) is a number that is the sum of its own digits each raised to the power of the number of digits ($1^3 + 5^3 + 3^3 = 153$). Write a script to check if a 3-digit number is an Armstrong number.
- **08. Matrix Multiplication Simulation**: Use nested loops to "multiply" two 3x3 grids (represented by logical patterns). For each coordinate `(i, j)`, print the result of `i * j` only if the sum of coordinates is even.
- **09. Palindrome Detector**: Create a string. Use a `for` loop to check if it is a palindrome (reads the same backward) without using `.reverse()` or `.split()`. Compare characters from both ends moving towards the center.
- **10. The Collatz Conjecture**: Start with a number `n`. While `n > 1`: if `n` is even, divide by 2. If `n` is odd, multiply by 3 and add 1. Print the entire sequence until it hits 1. Count how many steps it took.
- **11. Pyramid of Numbers**: Use nested loops to print a pyramid where each row `i` contains the number `i` repeated `i` times (Row 1: "1", Row 2: "2 2", Row 3: "3 3 3").
- **12. Unique Character Finder**: Given a string `"abracadabra"`, use a loop to print only the characters that appear **only once** in the entire string.
- **13. Binary to Decimal**: Create a string representing a binary number (e.g., `"1101"`). Use a loop and the powers of 2 to calculate its decimal value manually.
- **14. The "Break" Search Algorithm**: In a list of 100 random numbers, find the first number that is a perfect square (like 16, 25, 36). As soon as you find it, log its square root and terminate the loop immediately.
- **15. Logic Gate Simulator**: Create two arrays of Booleans. Use a single loop to compare them and generate a third array representing the "XOR" logic (True only if the values are different).

<br>

---

### Tarefas (Português)

- **01. Motor de Faixa de Imposto**: Calcule o imposto de 10 salários. Abaixo de 2.000 é isento. De 2.001 a 5.000, 15%. Acima de 5.000, 27,5%. **Desafio:** Se o imposto for um valor "Falsy" (0), imprima "Isento". Caso contrário, imprima o salário líquido.
- **02. Validador de Múltiplas Condições**: Verifique uma `password`. Deve ter 8+ caracteres, um número e um caractere especial (use loops e comparações de string). Imprima erros específicos para cada requisito faltando usando `switch(true)`.
- **03. Sequência de Números Primos**: Encontre e imprima todos os primos entre 1 e 100. **Restrição:** Use loops aninhados e uma variável "flag".
- **04. Gerador de Sequência Fibonacci**: Use `while` para gerar os primeiros 20 números da sequência (0, 1, 1, 2, 3...). Você deve gerenciar três variáveis para deslocar os valores.
- **05. Lógica de Bubble Sort**: Dado um array de 10 números desordenados, use `for` aninhados para ordená-los manualmente. **Restrição:** NÃO use `.sort()`. Use uma variável temporária para trocar os valores.
- **06. Raiz Digital**: Dado um `num` (ex: 942), use `while` para somar seus dígitos (9+4+2=15), e depois os dígitos do resultado (1+5=6) até chegar a um único dígito. Logue cada passo.
- **07. Verificador de Número de Armstrong**: Um número de Armstrong (como 153) é a soma de seus dígitos elevados à potência do número de dígitos ($1^3 + 5^3 + 3^3 = 153$). Verifique se um número de 3 dígitos é um Armstrong.
- **08. Simulação de Multiplicação de Matriz**: Use loops aninhados para "multiplicar" grades 3x3. Para cada coordenada `(i, j)`, imprima o resultado de `i * j` apenas se a soma das coordenadas for par.
- **09. Detector de Palíndromo**: Verifique se uma string é um palíndromo sem usar `.reverse()` ou `.split()`. Compare os caracteres das extremidades em direção ao centro.
- **10. Conjectura de Collatz**: Comece com `n`. Enquanto `n > 1`: se par, divida por 2; se ímpar, multiplique por 3 e some 1. Imprima a sequência e conte os passos.
- **11. Pirâmide de Números**: Use loops aninhados para imprimir uma pirâmide onde cada linha `i` contém o número `i` repetido `i` vezes.
- **12. Localizador de Caractere Único**: Dada a string `"abracadabra"`, use um loop para imprimir apenas os caracteres que aparecem **uma única vez** em toda a string.
- **13. Binário para Decimal**: Dada uma string binária (ex: `"1101"`), use um loop e potências de 2 para calcular seu valor decimal manualmente.
- **14. Algoritmo de Busca com Break**: Em uma lista de 100 números, ache o primeiro que seja um quadrado perfeito (ex: 16, 25). Assim que achar, logue a raiz quadrada e pare o loop.
- **15. Simulador de Porta Lógica**: Use um único loop para comparar dois arrays de Booleans e gerar um terceiro com a lógica "XOR" (Verdadeiro apenas se os valores forem diferentes).