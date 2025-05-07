Este é um jogo de S.K.A.T.E. para dois jogadores que roda diretamente no seu terminal Python. Inspirado no clássico jogo de skate, os jogadores se desafiam a realizar manobras. Se um jogador não conseguir repetir a manobra do outro, ele ganha uma letra da palavra "SKATE". O objetivo é fazer com que seu oponente complete a palavra "SKATE" antes de você.

## Como Jogar

1.  **Execute o Script:** Salve o código Python como um arquivo `.py` (por exemplo, `skate_game.py`) e execute-o no seu terminal usando o comando:
    ```bash
    python skate_game.py
    ```
2.  **Nomes dos Jogadores:** O programa pedirá que cada jogador digite seu nome.
3.  **Início do Jogo:** Um jogador será escolhido aleatoriamente para começar.
4.  **Turnos:**
    * **Jogador Ativo:** No seu turno, o jogador ativo digitará o nome de uma manobra que ele tentará realizar (você pode usar qualquer nome de manobra ou até mesmo inventar!).
    * **Jogador Passivo:** O jogador passivo então tentará "mandar" a mesma manobra digitando o seu nome.
    * **Acerto ou Errou:** O programa perguntará ao jogador passivo se ele acertou a manobra (`s` para sim, `n` para não).
    * **Letras de "SKATE":** Se o jogador passivo errar, ele ganha a próxima letra da palavra "SKATE" (S, depois K, depois A, e assim por diante). As letras acumuladas são exibidas.
5.  **Placar:** Após cada rodada, o placar mostrando as letras que cada jogador acumulou é exibido.
6.  **Próximo Turno:** O programa perguntará quem deve puxar a próxima manobra, esperando que você digite a primeira letra do nome do próximo jogador na sequência. Se a resposta estiver correta, o turno muda. Se estiver incorreta, o turno permanece com o jogador atual.
7.  **Fim do Jogo:** O jogo continua até que um dos jogadores acumule todas as cinco letras da palavra "SKATE". O jogador que fizer o outro completar "SKATE" vence.

## Regras Simplificadas

* O jogador ativo declara uma manobra.
* O jogador passivo tenta "mandar" a mesma manobra (digitando o nome).
* O jogador passivo informa se "acertou" ou "errou".
* Em caso de erro, o jogador passivo ganha uma letra de "SKATE".
* Após cada rodada, os jogadores tentam adivinhar quem será o próximo a declarar a manobra, respondendo com a primeira letra do nome. Uma resposta correta passa o turno, uma resposta incorreta mantém o turno.
* O primeiro jogador a completar a palavra "SKATE" perde.

## Observações

* Este jogo é baseado em texto e não simula a execução real de manobras. A honestidade dos jogadores é essencial!
* Não há uma lista predefinida de manobras válidas no código atual. Os jogadores podem usar qualquer termo.

Divirta-se jogando S.K.A.T.E. no seu terminal!
