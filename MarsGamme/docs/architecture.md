# Arquitetura

O projeto foi mantido propositadamente simples.

```text
Cliente
   |
   v
HTTP Server (Node.js)
   |
   +-- GET /
   |
   +-- GET /health
```

O serviço usa apenas o módulo `http` nativo do Node.js, sem frameworks ou dependências externas.

## Estrutura

```text
MarsGamme/
├── src/
│   └── index.js
├── docs/
│   ├── index.md
│   ├── architecture.md
│   ├── running.md
│   └── debugging.md
├── catalog-info.yaml
├── mkdocs.yml
├── package.json
└── README.md
```
