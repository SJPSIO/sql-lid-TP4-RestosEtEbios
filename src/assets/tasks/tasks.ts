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
    referenceSql: "SELECT peusdoU FROM critiquer INNER JOIN utilisateur ON critique.mailU = utilisateur.mailU;",
    tables: ["critiquer", "utilisateur"]
  }
  
];
