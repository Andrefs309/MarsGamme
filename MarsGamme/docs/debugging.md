# Debugging

Este documento existe também para testar a pesquisa do Backstage TechDocs.

## Serviço não arranca

Verifica se a porta `8080` já está ocupada:

```bash
lsof -i :8080
```

Também podes usar outra porta:

```bash
PORT=9000 npm start
```

## Health check

Para confirmar que o serviço está operacional:

```bash
curl http://localhost:8080/health
```

A resposta esperada é:

```json
{
  "status": "ok"
}
```

## Palavra de pesquisa de teste

Para demonstrares o Search do Backstage, pesquisa por **interplanetary-debugging**.

Esta expressão existe apenas nesta página e permite confirmar que o conteúdo TechDocs está a ser indexado.
