
### ⚠️ Alerta: cache TTL Eficiente (External Assets)
**Alerta:** "Use ciclos de vida eficientes de cache - wikimedia.org".
**Problema:** Depender de SVGs ou imagens externas (CDN de terceiros) impede que controlemos a política de cache (Browser Cache TTL), baixando o score de "Boas Práticas".
**Solução:** Baixar o asset (`curl -o public/icon.svg url`) e servir localmente.
**Benefício:** Além do cache controlado, removemos a necessidade de DNS Lookup e conexão SSL extra para um novo domínio.
