import { DatabaseId } from "../databases/databases";

export type TaskTopic = "revisions"  |"whereNConditions" ;

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
    referenceSql: "SELECT description AS nomScenario, nom AS nomMenace FROM scenarii INNER JOIN typeMenace ON scenarii.menace = typeMenace.code;",
    tables: ["scenarii", "typeMenace"],
  },
  { // Task 2 LIKE début
    id: "select_all_restos_du_64",
    topic: "revisions",
    database: "restos",
    referenceSql: "SELECT * FROM resto WHERE cpR LIKE '64%';",
    tables: ["resto"],
  },
  { // Task 3 LIKE fin
    id: "select_name_of_restos_finished_by_PAU",
    topic: "revisions",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto WHERE nomR LIKE '%PAU';",
    tables: ["resto"],
  },
  { // Task 4
    // Select champ renseigné  != ''
    id: "select_name_and_mail_of_restos_mail_not_empty",
    topic: "revisions",
    database: "restos",
    referenceSql: "SELECT nomR, mailR FROM resto WHERE mailR != '';",
    tables: ["resto"],
  },
  { // Task 5 with 2 conditions : exemple fourni ==> comprendre la différence avec la Task 4
     // Select champ non vide  != '' ou is not null
    id: "select_name_of_restos_mail_not_empty_not_null",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR FROM resto WHERE mailR != '' AND mailR IS NOT NULL;",
    tables: ["resto"],
  },
  { // Task 6
    id: "select_name_and_description_of_restos_brasserie_Bayonne",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR,descR FROM resto WHERE villeR ='Bayonne' AND descR LIKE '%brasserie%';",
    tables: ["resto"],
  },
  // plus de  2 conditions avec AND
  { // Task7 : 
  id: "select_name_and_description_of_restos_brasserie_grill_Bordeaux",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, descR FROM resto WHERE villeR ='Bordeaux' AND descR LIKE '%brasserie%' AND descR LIKE '%grill%';",
    tables: ["resto"],
  },
  { // Task 8 : plus de  2 conditions avec AND et NOT
    id: "select_name_and_description_of_restos_PASbrasserie_MAISgrill",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, descR FROM resto WHERE descR NOT LIKE '%brasserie%' AND descR LIKE '%grill%';",
    tables: ["resto"],
  },
  //WHERE
  { // Task 9 :exemple fourni avec OR
    id: "select_name_and_mail_of_restos_mail_empty_or_null",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, mailR FROM resto WHERE mailR = '' OR mailR IS NULL;",
    tables: ["resto"],
  },
 { // Task 10 : en autonomie
    id: "select_name_and_description_of_restos_creperie",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, descR FROM resto WHERE nomR LIKE '%creperie%' OR descR LIKE '%creperie%';",
    tables: ["resto"],
  } ,
  { // Task 11 : en autonomie
    id: "select_name_and_tel_of_restos_ayant_numero_portable",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, telR FROM resto WHERE telR LIKE '%+33 6%' OR telR LIKE '%+33 7%';",
    tables: ["resto"],
  },
 { // Task 12 : exemple fourni avec AND et OR
    id: "select_name_and_tel_and_mail_of_restos_NiTel_NiMail",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, telR, mailR FROM resto WHERE (telR ='' OR telR IS NULL ) AND (mailR ='' OR mailR IS NULL);",
    tables: ["resto"],
  }  ,
 { // Task 13 :  en autonomie
    id: "select_name_and_tel_of_restos_Portable_Et_Fixe",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, telR FROM resto WHERE (telR LIKE '%+33 6%' OR telR LIKE '%+33 7%') AND (telR LIKE '%+33 5%' OR telR LIKE '%+33 9%') ;",
    tables: ["resto"],
  },
 { // Task 14 :en autonomie
    id: "select_all_of_restos_NiPortable_NiMail",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT * FROM resto WHERE (telR NOT LIKE '%+33 6%' AND telR NOT LIKE '%+33 7%') AND (mailR IS NULL OR mailR = '');",
    tables: ["resto"],
  },
 { // Task 15 : en autonomie
    id: "select_name_and_adresse(num_rue_ville)_of_restos_Pau_EtBayonne_Ouvre_7h",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT nomR, numAdrR||' '||voieAdrR||' '||villeR AS adresse FROM resto WHERE (villeR='Bayonne' OR villeR='Pau') AND (horairesR LIKE '% 07:00%');",
    tables: ["resto"],
  } 
  ,
 { // Task 16 : en autonomie
    id: "select_description_and_name_of_restos_Pau_OrderBy_Description_OrderDesc",
    topic: "whereNConditions",
    database: "restos",
    referenceSql: "SELECT descR, nomR FROM resto WHERE villeR='Pau' ORDER BY descR DESC;",
    tables: ["resto"],
  } 
 
];
