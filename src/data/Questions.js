export const quizz = {
  questions: [
      // HTML
      {
          question_id: '1',
          category: 'HTML',
          question: 'Quelle balise HTML est utilisée pour créer un paragraphe ?',
          correctAnswer: '<p>',
      },
      {
          question_id: '2',
          category: 'HTML',
          question: 'Quelle balise HTML est utilisée pour créer une liste non ordonnée ?',
          correctAnswer: '<ul>',
      },
      // CSS
      {
          question_id: '3',
          category: 'CSS',
          question: 'Quelle propriété CSS est utilisée pour définir la taille de la police de caractères ?',
          correctAnswer: 'font-size',
      },
      {
          question_id: '4',
          category: 'CSS',
          question: `Quel sélecteur CSS est utilisé pour cibler tous les éléments d'une classe spécifique ?`,
          correctAnswer: '.classname',
      },
      // JavaScript
      {
          question_id: '5',
          category: 'JavaScript',
          question: `Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?`,
          correctAnswer: 'push()',
      },
      {
          question_id: '6',
          category: 'JavaScript',
          question: 'Quelle déclaration JavaScript est utilisée pour créer une fonction anonyme ?',
          correctAnswer: 'function() {}',
      },
      // ReactJS
      {
          question_id: '7',
          category: 'ReactJS',
          question: `Quel est le hook de React utilisé pour gérer l'état local dans une fonction composante ?`,
          correctAnswer: 'useState',
      },
      {
          question_id: '8',
          category: 'ReactJS',
          question: 'Quel est le composant principal dans une application React ?',
          correctAnswer: 'ReactDOM',
      },
      // SQL
      {
          question_id: '9',
          category: 'SQL',
          question: `Quelle clause SQL est utilisée pour filtrer les résultats d'une requête SELECT ?`,
          correctAnswer: 'WHERE',
      },
      {
          question_id: '10',
          category: 'SQL',
          question: 'Quelle commande SQL est utilisée pour supprimer une table ?',
          correctAnswer: 'DROP TABLE',
      },
      // Méthode Agile
      {
          question_id: '11',
          category: 'Méthode Agile',
          question: 'Dans quelle phase de la méthodologie Agile les équipes évaluent-elles et ajustent-elles leurs processus ?',
          correctAnswer: 'Révision',
      },
      {
          question_id: '12',
          category: 'Méthode Agile',
          question: 'Quelle cérémonie Agile a lieu à la fin de chaque sprint pour examiner le travail accompli et ajuster le plan pour le sprint suivant ?',
          correctAnswer: 'Réunion de rétrospective',
      },
      // Maquettage/Prototypage
      {
          question_id: '13',
          category: 'Maquettage/Prototypage',
          question: 'Quel est le principal objectif du prototypage dans le processus de développement ?',
          correctAnswer: 'Tester des concepts et des idées',
      },
      {
          question_id: '14',
          category: 'Maquettage/Prototypage',
          question: 'Quel type de maquette est utilisé pour simuler le flux de navigation et les interactions utilisateur dans une application ?',
          correctAnswer: 'Maquette interactive',
      },
      // Méthode Merise
      {
          question_id: '15',
          category: 'Méthode Merise',
          question: `Quel est l'objectif principal de la méthode Merise ?`,
          correctAnswer: 'Modélisation des données',
      },
      {
          question_id: '16',
          category: 'Méthode Merise',
          question: 'Quel est le principal diagramme utilisé dans la méthode Merise pour représenter les processus métier ?',
          correctAnswer: 'Diagramme des flux de données (DFD)',
      },
  ],    
};
// {
//     export const quiz = {
//         "questions": [
//           {
//             "question_id": 1,
//             "category": "HTML",
//             "text": "Quelle balise HTML est utilisée pour créer un paragraphe ?",
//             "correct_answer": "<p>"
//           },
//     {
//       "question_id": 2,
//       "category": "HTML",
//       "text": "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?",
//       "correct_answer": "<ul>"
//     },
//     {
//       "question_id": 3,
//       "category": "CSS",
//       "text": "Quelle propriété CSS est utilisée pour définir la taille de la police de caractères ?",
//       "correct_answer": "font-size"
//     },
//     {
//       "question_id": 4,
//       "category": "CSS",
//       "text": "Quel sélecteur CSS est utilisé pour cibler tous les éléments d'une classe spécifique ?",
//       "correct_answer": ".classname"
//     },
//     {
//       "question_id": 5,
//       "category": "JavaScript",
//       "text": "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
//       "correct_answer": "push()"
//     },
//     {
//       "question_id": 6,
//       "category": "JavaScript",
//       "text": "Quelle déclaration JavaScript est utilisée pour créer une fonction anonyme ?",
//       "correct_answer": "function() {}"
//     },
//     {
//       "question_id": 7,
//       "category": "ReactJS",
//       "text": "Quel est le hook de React utilisé pour gérer l'état local dans une fonction composante ?",
//       "correct_answer": "useState"
//     },
//     {
//       "question_id": 8,
//       "category": "ReactJS",
//       "text": "Quel est le composant principal dans une application React ?",
//       "correct_answer": "ReactDOM"
//     },
//     {
//       "question_id": 9,
//       "category": "SQL",
//       "text": "Quelle clause SQL est utilisée pour filtrer les résultats d'une requête SELECT ?",
//       "correct_answer": "WHERE"
//     },
//     {
//       "question_id": 10,
//       "category": "SQL",
//       "text": "Quelle commande SQL est utilisée pour supprimer une table ?",
//       "correct_answer": "DROP TABLE"
//     },
//     {
//       "question_id": 11,
//       "category": "Méthode Agile",
//       "text": "Dans quelle phase de la méthodologie Agile les équipes évaluent-elles et ajustent-elles leurs processus ?",
//       "correct_answer": "Révision"
//     },
//     {
//       "question_id": 12,
//       "category": "Méthode Agile",
//       "text": "Quelle cérémonie Agile a lieu à la fin de chaque sprint pour examiner le travail accompli et ajuster le plan pour le sprint suivant ?",
//       "correct_answer": "Réunion de rétrospective"
//     },
//     {
//       "question_id": 13,
//       "category": "Maquettage/Prototypage",
//       "text": "Quel est le principal objectif du prototypage dans le processus de développement ?",
//       "correct_answer": "Tester des concepts et des idées"
//     },
//     {
//       "question_id": 14,
//       "category": "Maquettage/Prototypage",
//       "text": "Quel type de maquette est utilisé pour simuler le flux de navigation et les interactions utilisateur dans une application ?",
//       "correct_answer": "Maquette interactive"
//     },
//     {
//       "question_id": 15,
//       "category": "Méthode Merise",
//       "text": "Quel est l'objectif principal de la méthode Merise ?",
//       "correct_answer": "Modélisation des données"
//     },
//     {
//       "question_id": 16,
//       "category": "Méthode Merise",
//       "text": "Quel est le principal diagramme utilisé dans la méthode Merise pour représenter les processus métier ?",
//       "correct_answer": "Diagramme des flux de données (DFD)"
//     }
//   ]
// }
  //  export const quiz = {
  //  questions: [
  //         {
  //           "question_id": 1,
  //           "text": "Quelle balise HTML est utilisée pour créer un paragraphe ?",
  //           "category": "HTML"
  //         },
  //         {
  //           "question_id": 2,
  //           "text": "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?",
  //           "category": "HTML"
  //         },
  //         {
  //           "question_id": 3,
  //           "text": "Quelle propriété CSS est utilisée pour définir la taille de la police de caractères ?",
  //           "category": "CSS"
  //         },
  //         {
  //           "question_id": 4,
  //           "text": "Quel sélecteur CSS est utilisé pour cibler tous les éléments d'une classe spécifique ?",
  //           "category": "CSS"
  //         },
  //         {
  //           "question_id": 5,
  //           "text": "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
  //           "category": "JavaScript"
  //         },
  //         {
  //           "question_id": 6,
  //           "text": "Quelle déclaration JavaScript est utilisée pour créer une fonction anonyme ?",
  //           "category": "JavaScript"
  //         },
  //         {
  //           "question_id": 7,
  //           "text": "Quel est le hook de React utilisé pour gérer l'état local dans une fonction composante ?",
  //           "category": "ReactJS"
  //         },
  //         {
  //           "question_id": 8,
  //           "text": "Quel est le composant principal dans une application React ?",
  //           "category": "ReactJS"
  //         },
  //         {
  //           "question_id": 9,
  //           "text": "Quelle clause SQL est utilisée pour filtrer les résultats d'une requête SELECT ?",
  //           "category": "SQL"
  //         },
  //         {
  //           "question_id": 10,
  //           "text": "Quelle commande SQL est utilisée pour supprimer une table ?",
  //           "category": "SQL"
  //         },
  //         {
  //           "question_id": 11,
  //           "text": "Dans quelle phase de la méthodologie Agile les équipes évaluent-elles et ajustent-elles leurs processus ?",
  //           "category": "Méthode Agile"
  //         },
  //         {
  //           "question_id": 12,
  //           "text": "Quelle cérémonie Agile a lieu à la fin de chaque sprint pour examiner le travail accompli et ajuster le plan pour le sprint suivant ?",
  //           "category": "Méthode Agile"
  //         },
  //         {
  //           "question_id": 13,
  //           "text": "Quel est le principal objectif du prototypage dans le processus de développement ?",
  //           "category": "Maquettage/Prototypage"
  //         },
  //         {
  //           "question_id": 14,
  //           "text": "Quel type de maquette est utilisé pour simuler le flux de navigation et les interactions utilisateur dans une application ?",
  //           "category": "Maquettage/Prototypage"
  //         },
  //         {
  //           "question_id": 15,
  //           "text": "Quel est l'objectif principal de la méthode Merise ?",
  //           "category": "Méthode Merise"
  //         },
  //         {
  //           "question_id": 16,
  //           "text": "Quel est le principal diagramme utilisé dans la méthode Merise pour représenter les processus métier ?",
  //           "category": "Méthode Merise"
  //         }
  //       ],
  //       "responses": [
  //         {
  //           "response_id": 1,
  //           "question_id": 1,
  //           "text": "<p>",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 2,
  //           "question_id": 2,
  //           "text": "<ul>",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 3,
  //           "question_id": 3,
  //           "text": "font-size",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 4,
  //           "question_id": 4,
  //           "text": ".classname",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 5,
  //           "question_id": 5,
  //           "text": "push()",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 6,
  //           "question_id": 6,
  //           "text": "function() {}",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 7,
  //           "question_id": 7,
  //           "text": "useState",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 8,
  //           "question_id": 8,
  //           "text": "ReactDOM",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 9,
  //           "question_id": 9,
  //           "text": "WHERE",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 10,
  //           "question_id": 10,
  //           "text": "DROP TABLE",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 11,
  //           "question_id": 11,
  //           "text": "Révision",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 12,
  //           "question_id": 12,
  //           "text": "Réunion de rétrospective",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 13,
  //           "question_id": 13,
  //           "text": "Tester des concepts et des idées",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 14,
  //           "question_id": 14,
  //           "text": "Maquette interactive",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 15,
  //           "question_id": 15,
  //           "text": "Modélisation des données",
  //           "status": "",
  //           "user_id": 101
  //         },
  //         {
  //           "response_id": 16,
  //           "question_id": 16,
  //           "text": "Diagramme des flux de données (DFD)",
  //           "status": "",
  //           "user_id": 101
  //         }
  //       ]
  //     }