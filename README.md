# imdi-styles
Kodebasen for utseende til imdi.no. Dette innholder stilsett (LESS), javascript og grafikk-filer. Markup og maler er ikke gjengitt her.

## Installering
Kodebasen er lagt opp for å kunne kopieres direkte inn i et EPI-server miljø. Hvis du ønsker å bruker andre former for LESS-kompileringer vil det kunne være et behov å lage en egen main.less fil som importerer de andre filene i alfabetisk rekkefølge, gruppert etter mapper.

# Deployment
* `$ firebase login` (if you don't have access - contact tobias.schultz@netlife.com)
* `$ npm run build` will deploy these CDN's (the patch version will increment). These are included at epinova's test server.
```
https://imdi-styles.firebaseapp.com/UI
https://imdi-styles.firebaseapp.com/app@0.0.1.js
https://imdi-styles.firebaseapp.com/app@0.0.1.min.js
https://imdi-styles.firebaseapp.com/styles@0.0.1.css
https://imdi-styles.firebaseapp.com/styles@0.0.1.min.css
```

* `$ npm run build:test` will deploy test CDN's. Can be used when testing locally or on codepen.
```
https://imdi-styles.firebaseapp.com/UI-test
https://imdi-styles.firebaseapp.com/styles-test
https://imdi-styles.firebaseapp.com/scripts-test
```

# URL's
*Test og prod*
- Test server med test.css og app.js (publiseres fra `$ npm run deploy_test` fra `../imdikator-deploy`) https://testimdino.azurewebsites.net/
- Produksjonsserver på https://www.imdi.no/

*Innhold fra episerver*
- Blokker brukt på navigasjonsside: https://testimdino.azurewebsites.net/testsider/visning-av-blokker-pa-navigasjonsside/ 
- Blokker brukt i en artikkel: https://testimdino.azurewebsites.net/testsider/visning-av-blokker-pa-artikkelside/ 
- Innholdssider dratt inn på navigasjonssiden som blokker: https://testimdino.azurewebsites.net/testsider/visning-av-sider-som-blokker/ 

## Eier av kodebasen
Integrerings- og mangfoldsdirektoratet (IMDi)

## Teknisk ansvarlig for kodebasen
Joakim Bording, Netlife Research
