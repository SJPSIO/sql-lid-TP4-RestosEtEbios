import { DatabaseId } from "../databases/databases";

export type TaskTopic = "join" ;

export interface Task {
  id: string;
  topic: TaskTopic;
  database: DatabaseId;
  referenceSql: string;
  tables: string[];
}

export const tasksList: Task[] = [
  // Exemple fourni
  { // Task 1
    id: "select_description_of_all_scenarii_and_name_of_their_threats",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT description AS nomScenario, nom AS nomMenace FROM scenario INNER JOIN typeMenace ON scenario.menace = typeMenace.code;",
    tables: ["scenario", "typeMenace"]
  },
  { // Task 2
    id: "select_description_of_different_scenarii_that_have_impact",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT DISTINCT description FROM scenario INNER JOIN engendrer ON scenario.code=engendrer.codeScenario;",
    tables: ["scenario", "engendrer"]
  }
  ,
  { // Task 3
    id: "select_details_of_impacts_caused_by_scenario_S1",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT details FROM impact INNER JOIN engendrer ON impact.code=engendrer.codeImpact WHERE codeScenario='S1';",
    tables: ["impact", "engendrer"]
  }
  ,
  { // Task 4 - exemple fourni = 2 jointures
    id: "select_description_of_all_scenarii_and_name_of_their_impacts",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT description AS Scenario, libelle AS Impact FROM scenario INNER JOIN engendrer ON scenario.code=engendrer.codeScenario INNER JOIN impact ON engendrer.codeImpact=impact.code;",
    tables: ["scenario", "engendrer", "impact"]
  }
  ,
  { // Task 5
    id: "select_name_of_threats_involved_in_scenarii_that_have_impacts",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT DISTINCT nom FROM typeMenace INNER JOIN scenario ON typeMenace.code = scenario.menace INNER JOIN engendrer ON scenario.code=engendrer.codeScenario;",
    tables: ["typeMenace", "scenario", "engendrer"]
  }
  ,
  { // Task 6
    id: "select_details_of_various_impacts_cause_by_scenarii_involving_intentional_threats",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT DISTINCT details FROM impact INNER JOIN engendrer ON impact.code=engendrer.codeImpact INNER JOIN scenario ON scenario.code=engendrer.codeScenario INNER JOIN typeMenace ON typeMenace.code = scenario.menace WHERE categorie ='Intentionnelle';",
    tables: ["typeMenace", "scenario", "engendrer", "impact"]
  }
  ,
  { // Task 7
    id: "select_details_of_various_impacts_and_support_on_database_related_scenarii",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT DISTINCT details, support FROM impact INNER JOIN engendrer ON impact.code=engendrer.codeImpact INNER JOIN scenario ON scenario.code=engendrer.codeScenario WHERE support LIKE '%bases de données%';",
    tables: ["scenario", "engendrer", "impact"]
  }
 ,
  { // Task 8
    id: "select_name_of_threats_related_to_scenarii_stipuling_usurpation_and_authentification",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT nom, description FROM typeMenace INNER JOIN scenario ON scenario.menace=typeMenace.code WHERE description LIKE '%usurpation%' AND description LIKE '%authentification%';",
    tables: ["scenario", "typeMenace"]
  }
  ,
  { // Task 9
    id: "select_description_of_scenario_classified_by_threat_category_asc_and_description_desc",
    topic: "join",
    database: "ebios",
    referenceSql: "SELECT categorie, description AS descriptionScenario FROM typeMenace INNER JOIN scenario ON scenario.menace=typeMenace.code ORDER BY categorie, description DESC;",
    tables: ["scenario", "typeMenace"]
  }
,
  { // Task 10
    id: "select_pseudo_of_utilisateur_who_post_a_note",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT pseudoU FROM critiquer INNER JOIN utilisateur ON critiquer.mailU = utilisateur.mailU;",
    tables: ["critiquer", "utilisateur"]
  }
 ,
  { // Task 11
    id: "select_name_of_resto_who_have_a_note",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto INNER JOIN critiquer ON critiquer.idR = resto.idR;",
    tables: ["critiquer", "resto"]
  } 
  ,
   { // Task 12
    id: "select_cuisine_of_resto_orderby_resto",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR, libelleTC FROM resto INNER JOIN proposer ON proposer.idR = resto.idR INNER JOIN typeCuisine ON proposer.idTC=typeCuisine.idTC ORDER BY nomR;",
    tables: ["typeCuisine","proposer", "resto"]
  }
  ,
   { // Task 13
    id: "select_name_of_resto_who_propose_cuisine_of_sudouest",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto INNER JOIN proposer ON proposer.idR = resto.idR INNER JOIN typeCuisine ON proposer.idTC=typeCuisine.idTC WHERE libelleTC='sud ouest';",
    tables: ["typeCuisine","proposer", "resto"]
  }
   ,
   { // Task 14
    id: "select_pseudo_who_like_barDuMarche",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT pseudoU FROM utilisateur INNER JOIN aimer ON aimer.mailU=utilisateur.mailU INNER JOIN resto ON aimer.idR=resto.idR WHERE nomR='Bar du Marché';",
    tables: ["utilisateur","aimer", "resto"]
  }
  ,
   { // Task 15
    id: "select_name_of_resto_who_have_photo",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto INNER JOIN photo ON resto.idR=photo.idR;",
    tables: ["resto","photo"]
  }
  ,
   { // Task 16
    id: "select_name_of_resto_who_dont_have_photo",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto WHERE idR NOT IN (SELECT idR FROM photo);",
    tables: ["resto","photo"]
  }
  ,
   { // Task 17
    id: "select_name_of_resto_who_have_photo_V2",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto WHERE idR IN (SELECT idR FROM photo);",
    tables: ["resto","photo"]
  }
  ,
   { // Task 18
    id: "select_cuisine_liked_by_Mitch",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT libelleTC FROM typeCuisine INNER JOIN preferer ON typeCuisine.idTC=preferer.idTC INNER JOIN utilisateur ON preferer.mailU=utilisateur.mailU WHERE pseudoU= 'Mitch' ORDER BY libelleTC DESC;",
    tables: ["typeCuisine","preferer","utilisateur"]
  }
  ,
    { // Task 19
    id: "select_pseudo_liked_japonaise_or_vegetarienne",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT pseudoU FROM utilisateur INNER JOIN preferer ON utilisateur.mailU=preferer.mailU INNER JOIN typeCuisine ON preferer.idTC=typeCuisine.idTC WHERE libelleTC= 'japonaise' OR libelleTC='vegetarienne';",
    tables: ["typeCuisine","preferer","utilisateur"]
  }
   ,
    { // Task 20
    id: "select_name_of_resto_who_have_not_critique",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto WHERE idR NOT IN (SELECT idR FROM critiquer);",
    tables: ["resto","critiquer"]
  }
   ,
    { // Task 21
    id: "select_cuisine_who_dont_have_prefered",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT idTC FROM typeCuisine WHERE idTC NOT IN (SELECT idTC FROM preferer);",
    tables: ["typeCuisine","preferer"]
  }
   ,
    { // Task 22
    id: "select_pseudo_who_havent_put_critique",
    topic: "join",
    database: "restos",
    referenceSql: "SELECT pseudoU FROM utilisateur WHERE mailU NOT IN (SELECT mailU FROM critiquer);",
    tables: ["critiquer","utilisateur"]
  }
  
];
