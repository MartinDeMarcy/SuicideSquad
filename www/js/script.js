'use strict';
angular.module('filterExample', [])
  .controller('filterController', ['$scope', function($scope) {
    $scope.fiches =
        [
  {
    "index": "savoirformaliserplan",
    "keywords": "stratégie plan stratégique forces faiblesses opportunités menaces débuter une période démarrer une période gérer son service établir une stratégie",
    "mainTitle": "Donner du sens",
    "title": "Savoir formaliser le plan stratégique",
  },
  {
    "index": "savoirformaliserambition",
    "keywords": "ambition mise en place opérationnel opérations après plan stratégique enjeu objectifs territoire actions mener",
    "mainTitle": "Donner du sens",
    "title": "Savoir formaliser l'ambition du territoire / service"
  },

  {
    "index": "savoirvaloriserindividua",
    "keywords": "motiver individuel collaborateur féliciter rendez-vous remobiliser encourager entretien récompenser résultat valoriser",
    "mainTitle": "Transmettre de l'énergie",
    "title": "Savoir valoriser individuellement"
  },
  {
    "index": "savoirmesurercollectif",
    "keywords": "faire un point réunion collective groupe finir terminer bilan équipe féliciter encourager mobiliser",
    "mainTitle": "Transmettre de l'énergie",
    "title": "Savoir mesurer le progrès en collectif"
  },
  {
    "index": "savoirfetersucces",
    "keywords": "féliciter groupe collectif encourager récompenser bilan faire un point résultats annoncer réunion succès",
    "mainTitle": "Transmettre de l'énergie",
    "title": "Savoir fêtez le succès"
  },
 
  {
    "index": "savoirfixerobjectif",
    "keywords": "entretien annonce responsabilité motiver objectifs définir smart pilotage",
    "mainTitle": "Développer l'exigence bienveillante",
    "title": "Savoir fixer les objectifs motivants"
  },
  {
    "index": "savoirformaliserlettre",
    "keywords": "mission début lettre commencement début nouveau motiver arrivée embauche prise de poste",
    "mainTitle": "Développer l'exigence bienveillante",
    "title": "Savoir formaliser une lettre de mission"
  },
  {
    "index": "savoirconcentrerenergie",
    "keywords": "priorité collectif groupe début motiver bilan nouvelle période",
    "mainTitle": "Développer l'exigence bienveillante",
    "title": "Savoir concentrer l'énergie des équipes sur le nombre limité des priorités"
  },
  {
    "index": "savoirdecliner",
    "keywords": "cadrer individuel actions clés accompagner entretien identifier prendre du recul prioriser",
    "mainTitle": "Développer l'exigence bienveillante",
    "title": "Savoir décliner des priorités en actions concrètes"
  },
  {
    "index": "savoirrealiser1",
    "keywords": "intégrer embauche adaptation démarrage prise de poste nouveau arrivée accueil accueillir arrivant",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir réaliser une intégration apprenante 1/2"
  },
  {
    "index": 31,
    "keywords": "",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir réaliser une intégration apprenante 2/2"
  },
  {
    "index": "savoirtraitererreur",
    "keywords": "Erreur problème trouver une solution remobiliser encourager apprendre faux pas entretien individuel réunion",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir développer les compétences / traiter une erreur pédagogique"
  },
  {
    "index": "savoirbriefercollaborateur",
    "keywords": "réunion individuel entretien briefer collaborateur motiver action mission préparer rdv",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir développer les compétences / briefer un collaborateur avant une action de jeu"
  },
  {
    "index": "savoirrealiserdebriefing",
    "keywords": "débrief faire un point collaborateur résultat tirer des enseignements valoriser fécilitier progresser entretien individuel",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir développer les compétences / réaliser un debriefing apprenant"
  },
  {
    "index": "savoiraccompagnerprojet",
    "keywords": "point mensuel bilan motiver progresser collaborateur développer entretien projet faire un point réunion",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir accompagner le projet professionnel"
  },
  {
    "index": 36,
    "keywords": "formation apprendre progresser motiver encourager brief rendez vous collaborateur reunion",
    "mainTitle": "Proféssionaliser ses équipes",
    "title": "Savoir accompagner la formation"
  },
  {
    "index": "savoirpiloter",
    "keywords": "inter service projet piloter transverse territoire collectif groupe impliquer motiver progresser",
    "mainTitle": "Manager la transversalité",
    "title": "Savoir piloter un projet transverse"
  },
  {
    "index": "savoiranimer",
    "keywords": "groupe animer transverse projet chantier motiver réunion collectif",
    "mainTitle": "Manager la transversalité",
    "title": "Savoir animer un groupe de travail transverse"
  },
  {
    "index": "savoigerer",
    "keywords": "projet collectif transverse motiver groupe autres services dynamiser intéractions",
    "mainTitle": "Manager la transversalité",
    "title": "Savoir gérer les intéractions avec d'autres services"
  },

  {
    "index": "savoirexpliquer",
    "keywords": "expliquer évoluer remotiver valeurs respecter enseigner progresser expliquer",
    "mainTitle": "Faire vivre les valeurs",
    "title": "Savoir expliquer les valeurs"
  },
  {
    "index": "savoirrappeler",
    "keywords": "expliquer faute remotiver écart règle progresser rappel entretien",
    "mainTitle": "Faire vivre les valeurs",
    "title": "Savoir rappeler une règle sans démotiver"
  },
  {
    "index": "savoirrecadrer",
    "keywords": "Recadrer faute dérive motiver rappel règle progresser hors jeu préparer",
    "mainTitle": "Faire vivre les valeurs",
    "title": "Savoir recadrer les dérives"
  },
  {
    "index": "savoirtraiterconflit",
    "keywords": "conflit collaborateurs éviter régler altercation problème interne différend désaccord",
    "mainTitle": "Faire vivre les valeurs",
    "title": "Savoir triater un conflit entre deux collaborateur"
  },
];
  }]);