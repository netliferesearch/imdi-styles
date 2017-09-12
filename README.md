# imdi-styles
Kodebasen for utseende til imdi.no. Dette innholder stilsett (LESS), javascript og grafikk-filer. Markup og maler er ikke gjengitt her.

## Installering
Kodebasen er lagt opp for å kunne kopieres direkte inn i et EPI-server miljø. Hvis du ønsker å bruker andre former for LESS-kompileringer vil det kunne være et behov å lage en egen main.less fil som importerer de andre filene i alfabetisk rekkefølge, gruppert etter mapper.

# Deployment
`$ firebase login` (if you don't have access - contact tobias@netlife.com)
`$ npm run build`

Assets will be available at
`https://imdi-styles.firebaseapp.com/app.js`
`https://imdi-styles.firebaseapp.com/app.min.js`
`https://imdi-styles.firebaseapp.com/styles.css`
`https://imdi-styles.firebaseapp.com/styles.min.css`


## Eier av kodebasen
Integrerings- og mangfoldsdirektoratet (IMDi)

## Teknisk ansvarlig for kodebasen
Joakim Bording, Netlife Research
