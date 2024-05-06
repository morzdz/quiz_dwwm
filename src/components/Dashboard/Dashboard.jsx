import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../customTheme";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Données fictives pour les thèmes à réviser
  const themesToReview = ["Thème 1 = Maquettage/ prototypage", "Thème 2= JavaScript", "Thème 3 = SQL", "Thème 4 = REACT"]; // Remplacez par vos propres données

  // Données pour les camemberts
  const questionsData = {
    labels: ["Acquises", "Partiellement-acquises","Non-acquises"],
    datasets: [
      {
        data: [70, 20,10], // Exemple de données, à remplacer par vos propres données
        backgroundColor: ["#FFCE56", "#0E4749","#002626"],
      },
    ],
  };

//   const themesData = {
//     labels: ["Acquises", "Partiellement-acquises","Non-acquises"],
//     datasets: [
//       {
//         data: [30, 40, 30], // Exemple de données, à remplacer par vos propres données
//         backgroundColor: ["#FFCE56", "#0E4749","#002626"],
//       },
//     ],
//   };
//   "#FF6384" "#36A2EB" couleur d'origine
  // Données pour les graphiques en bâtons
  const resultsData = {
  labels: ["HTML", "CSS", "JavaScript", "React", "SQL", "Méthode agile", "Maquettage/prototypage", "Méthode Merise"],
  datasets: [
    {
      label: "Acquises",
      backgroundColor: "#36A2EB", // Bleu clair
      data: [70, 60, 50, 40, 55, 65, 45, 60], // Exemple de données, à remplacer par vos propres données
    },
    {
      label: "Partiellement acquises",
      backgroundColor: "#FFCE56", // Jaune
      data: [20, 25, 30, 35, 30, 20, 30, 25], // Exemple de données, à remplacer par vos propres données
    },
    {
      label: "Non acquises",
      backgroundColor: "#FF6384", // Rose
      data: [10, 15, 20, 25, 15, 15, 25, 15], // Exemple de données, à remplacer par vos propres données
    },
  ],
};
//   const resultsData = {
//     labels: ["Acquises", "Partiellement acquises", "Non acquises"],
//     datasets: [
//         {
//           label: "HTML",
//           backgroundColor: "#36A2EB", // Bleu clair
//           data: [70, 20, 10], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "CSS",
//           backgroundColor: "#FFCE56", // Jaune
//           data: [60, 25, 15], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "JavaScript",
//           backgroundColor: "#FF6384", // Rose
//           data: [50, 30, 20], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "React",
//           backgroundColor: "#4BC0C0", // Turquoise
//           data: [40, 35, 25], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "SQL",
//           backgroundColor: "#9966FF", // Violet
//           data: [55, 30, 15], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "Méthode agile",
//           backgroundColor: "#FF6384", // Rose
//           data: [65, 20, 15], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "Maquettage/prototypage",
//           backgroundColor: "#32CD32", // Vert lime
//           data: [45, 30, 25], // Exemple de données, à remplacer par vos propres données
//         },
//         {
//           label: "Méthode Merise",
//           backgroundColor: "#FFA500", // Orange
//           data: [60, 25, 15], // Exemple de données, à remplacer par vos propres données
//         },
//       ],
//     };
  const resultsData2 = {
    labels: ["Acquises", "Partiellement acquises", "Non acquises"],
    datasets: [
      {
        label: "Quizz 3",
        backgroundColor: "#36A2EB",
        data: [70, 20, 10], // Exemple de données, à remplacer par vos propres données
      },
      {
        label: "Quizz 4",
        backgroundColor: "#FFCE56",
        data: [60, 25, 15], // Exemple de données, à remplacer par vos propres données
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Dashboard</h1>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: 'center'}}>Progression (questions traités)</h2>
              <Doughnut data={questionsData} />
            </Paper>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper elevation={3}>
              <h2>Progression (thèmes traités)</h2>
              <Doughnut data={themesData} />
            </Paper>
          </Grid> */}
          <Grid item xs={6}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: 'center'}}>Résultats (thèmes)</h2>
              <Bar data={resultsData} />
            </Paper>
          </Grid>
          {/* <Grid item xs={4}>
            <Paper elevation={3}>
              <h2>Derniers résultats2</h2>
              <Bar data={resultsData2} />
            </Paper>
          </Grid> */}

          <Grid item xs={2}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: 'center'}}>Conseils de révision</h2>
              <List>
                {themesToReview.map((theme, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={theme} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
