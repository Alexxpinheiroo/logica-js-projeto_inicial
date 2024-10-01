# Jogo de Adivinhação do Número Secreto

## Descrição

Este é um jogo simples de adivinhação de números feito em JavaScript, onde o jogador tenta adivinhar um número secreto gerado aleatoriamente pelo sistema. O número secreto será um valor entre **1** e um número máximo predefinido (por padrão, **5000**). O jogador recebe dicas se o número inserido é maior ou menor que o número secreto, até que adivinhe corretamente.

## Como funciona

1. O sistema gera um número secreto aleatório entre 1 e o número máximo (5000).
2. O jogador insere um número através de um `prompt`.
3. O jogo fornece dicas:
   - Se o número inserido for maior que o número secreto, o jogo informa que o número secreto é **menor**.
   - Se o número inserido for menor que o número secreto, o jogo informa que o número secreto é **maior**.
4. O jogador continua tentando até adivinhar o número correto.
5. Quando o jogador acerta, o jogo informa o número secreto e a quantidade de tentativas realizadas.

## Regras do Jogo

- O número secreto é gerado aleatoriamente entre **1** e **5000** (configurável).
- O jogador é informado se o número está acima ou abaixo do número secreto.
- O jogo termina quando o jogador acerta o número.
- O número de tentativas é registrado e mostrado ao final.
