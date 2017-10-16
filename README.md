# imdi-styles
Kodebasen for utseende til imdi.no. Dette innholder stilsett (LESS), javascript og grafikk-filer. Markup og maler er ikke gjengitt her.

## Installering
Kodebasen er lagt opp for å kunne kopieres direkte inn i et EPI-server miljø. Hvis du ønsker å bruker andre former for LESS-kompileringer vil det kunne være et behov å lage en egen main.less fil som importerer de andre filene i alfabetisk rekkefølge, gruppert etter mapper.

# Deployment
* `$ firebase login` (if you don't have access - contact tobias.schultz@netlife.com)
* `npm run build` will deploy these CDN's (the patch version will increment). These are included at epinova's test server.
```
https://imdi-styles.firebaseapp.com/styles@0.0.1.css
https://imdi-styles.firebaseapp.com/styles@0.0.1.min.css
https://imdi-styles.firebaseapp.com/app@0.0.1.js
https://imdi-styles.firebaseapp.com/app@0.0.1.min.js
https://imdi-styles.firebaseapp.com/UI
```

* `npm run build:test` will deploy test CDN's. Can be used when testing locally or on codepen.
```
https://imdi-styles.firebaseapp.com/styles-test
https://imdi-styles.firebaseapp.com/scripts-test
https://imdi-styles.firebaseapp.com/UI-test
```

Assets will be available at
* `https://imdi-styles.firebaseapp.com/app.js`
* `https://imdi-styles.firebaseapp.com/app.min.js`
* `https://imdi-styles.firebaseapp.com/styles.css`
* `https://imdi-styles.firebaseapp.com/styles.min.css`


## Eier av kodebasen
Integrerings- og mangfoldsdirektoratet (IMDi)

## Teknisk ansvarlig for kodebasen
Joakim Bording, Netlife Research
