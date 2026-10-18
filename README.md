# Unifor Maps 🗺️

Aplicação web que usa a API do Google Maps para localizar e marcar pontos no campus da Universidade de Fortaleza, com foco em mobilidade e acessibilidade.

## Sobre o projeto

Este projeto foi desenvolvido para o desafio **"Mapa Interativo: Encontre os Pontos Escondidos!"**, proposto pelo Núcleo de Extensão e Práticas (NEP) da Unifor como parte da seleção para o grupo de estudos do Projeto MAPAS.

O objetivo do desafio é praticar o uso de APIs de mapas em aplicações web, pensando em uma ferramenta que facilite a locomoção e o acesso a lugares dentro do campus.

## Funcionalidades

- **Adicionar pontos por coordenadas:** o usuário informa nome, latitude e longitude, e um marcador é criado no mapa.
- **Nome visível no marcador:** cada ponto com nome exibe uma janela de informação (InfoWindow) presa ao marcador.
- **Páginas dos lugares favoritos:** a navegação leva a cinco locais do campus, cada um com o mapa já centralizado e marcado:
  - NEP (Núcleo de Extensão e Práticas)
  - Centro de Convivência
  - Biblioteca
  - Academia
  - Natação

## Tecnologias

- HTML5
- CSS3
- JavaScript
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) (com `AdvancedMarkerElement` e `InfoWindow`)

## Estrutura do projeto

```
mapa-interativo-unifor/
├── index.html        # Página inicial, com o formulário de pontos
├── pages/            # Páginas dos lugares favoritos
├── css/
│   └── style.css     # Estilo compartilhado por todas as páginas
├── js/
│   ├── mapa.js       # Criação do mapa e dos marcadores (todas as páginas)
│   └── home.js       # Evento do botão da página inicial
└── assets/           # Imagens
```

Cada página informa as coordenadas e o nome do seu local por meio de atributos `data-*` na div do mapa. Assim, um único script (`mapa.js`) atende todas as páginas.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/FranciscoPaz25/mapa-interativo-unifor.git
   ```
2. Abra a pasta no VS Code.
3. Clique com o botão direito no `index.html` e escolha **Open with Live Server** (extensão Live Server).

> **Observação sobre o mapa:** o projeto não usa uma chave de API do Google Maps, porque ela exige uma conta de faturamento no Google Cloud. Por isso, o mapa aparece escurecido, com a marca d'água *"For development purposes only"*, e o Google exibe um aviso ao carregar a página. **Isso é esperado e não afeta as funcionalidades:** o mapa, os marcadores e as janelas de informação funcionam normalmente.
>
> Para usar uma chave própria, acrescente `key=SUA_CHAVE&` no endereço do script da API nos arquivos HTML.

## Como testar

Na página inicial, experimente estas coordenadas:

| Local | Latitude | Longitude |
|---|---|---|
| NEP | -3.7698813554732262 | -38.47914681822398 |

Dica: para descobrir as coordenadas de qualquer lugar, clique com o botão direito no ponto desejado no Google Maps e clique nas coordenadas que aparecem no topo do menu.

## Próximos passos

- [ ] Validar os campos de latitude e longitude
- [ ] Permitir arrastar os marcadores
- [ ] Adicionar um ponto ao clicar no mapa
- [ ] Melhorias de acessibilidade na navegação

## Autor

Feito por **Francisco Paz** — [GitHub](https://github.com/FranciscoPaz25)

## Referências

- [Documentação da Google Maps Platform](https://developers.google.com/maps/documentation?hl=pt-br)
