# imdi-styles

Kodebasen for utseende til imdi.no. Dette innholder stilsett (LESS), javascript og grafikk-filer. Markup og maler er ikke gjengitt her.

## Installering

Kodebasen er lagt opp for å kunne kopieres direkte inn i et EPI-server miljø. Hvis du ønsker å bruker andre former for LESS-kompileringer vil det kunne være et behov å lage en egen main.less fil som importerer de andre filene i alfabetisk rekkefølge, gruppert etter mapper.

# Deployment

Vi lanserer på NPM og bruker jsDelivr for å hoste CDN til Epinova.
Hvis du vil teste css i test-miljø publiserer du en pre-{patch/minor/major} og lanserer på `next` taggen på NPM.

```
npm run release
```

# URL's

_Test og prod_

- Test server med test.css og app.js (publiseres fra `$ npm run deploy_test` fra `../imdikator-deploy`) https://testimdino.azurewebsites.net/
- Produksjonsserver på https://www.imdi.no/

_Innhold fra episerver_

- Blokker brukt på navigasjonsside: https://testimdino.azurewebsites.net/testsider/visning-av-blokker-pa-navigasjonsside/
- Blokker brukt i en artikkel: https://testimdino.azurewebsites.net/testsider/visning-av-blokker-pa-artikkelside/
- Innholdssider dratt inn på navigasjonssiden som blokker: https://testimdino.azurewebsites.net/testsider/visning-av-sider-som-blokker/

## Eier av kodebasen

Integrerings- og mangfoldsdirektoratet (IMDi)

## Teknisk ansvarlig for kodebasen

Joakim Bording, Netlife Research
