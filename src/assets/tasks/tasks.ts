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
    tables: ["scenario", "typeMenace"],
  }
 
];
