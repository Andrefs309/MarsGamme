# MarsGamme

O **MarsGamme** é um pequeno serviço Node.js criado para demonstrar a integração de um repositório GitHub com o Backstage.

## Objetivos da demonstração

- Registar o projeto no Software Catalog do Backstage.
- Apresentar metadata do projeto.
- Publicar documentação Markdown através de TechDocs.
- Testar a pesquisa de documentação.
- Criar uma base simples para testar integrações futuras com CI/CD.

## Endpoints

| Endpoint | Descrição |
|---|---|
| `/` | Informação básica do serviço |
| `/health` | Estado do serviço |
