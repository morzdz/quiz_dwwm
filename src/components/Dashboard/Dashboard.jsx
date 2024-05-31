import { useContext } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../customTheme";
import { QuizzContext } from "../../contexts/QuizContext";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dashboard = () => {
  const { maData } = useContext(QuizzContext);

  // Fonction pour compter le nombre de réponses avec un certain état d'auto eval pour une catégorie donnée
  const countByCategoryAndEvalIndex = (category, index) =>
    maData.responses.filter(
      (response) =>
        response.questions.category === category && response.evalIndex === index
    ).length;

  // Liste des catégories
  const categories = ["HTML", "CSS", "JavaScript", "ReactJS", "SQL", "Méthode Agile", "Maquettage/Prototypage", "Méthode Merise"];

  // Score pour chaque catégorie
  const scores = categories.map((category) => ({
    category: category,
    score: countByCategoryAndEvalIndex(category, 0) * 0 + countByCategoryAndEvalIndex(category, 1) * 1 + countByCategoryAndEvalIndex(category, 2) * 2
  }));

  // Trie par ordre croissant
  const sortedScores = scores.sort((a, b) => a.score - b.score);

  // Conseils de révision : les catégories avec les scores les plus bas
  const revisionAdvice = sortedScores.slice(0, 4).map((item, index) => (
    <ListItem key={index}>
      <ListItemText primary={`Conseil ${index + 1}: Réviser ${item.category}`} />
    </ListItem>
  ));

  // Compter les réponses par état
  const countByEvalIndex = (index) => maData.responses.filter(response => response.evalIndex === index).length;
  const acquired = countByEvalIndex(2);
  const partiallyAcquired = countByEvalIndex(1);
  const notAcquired = countByEvalIndex(0);

  // Données pour le camembert
  const questionsData = {
    labels: ["Acquises", "Partiellement-acquises", "Non-acquises"],
    datasets: [
      {
        data: [acquired, partiallyAcquired, notAcquired],
        backgroundColor: ["#FFCE56", "#0E4749", "#002626"],
      },
    ],
  };

  // Données pour le graphique en bâtons (par thèmes = category)
  const resultsData = {
    labels: categories,
    datasets: [
      {
        label: "Acquises",
        backgroundColor: "#36A2EB",
        data: categories.map(category => countByCategoryAndEvalIndex(category, 2)),
      },
      {
        label: "Partiellement acquises",
        backgroundColor: "#FFCE56",
        data: categories.map(category => countByCategoryAndEvalIndex(category, 1)),
      },
      {
        label: "Non acquises",
        backgroundColor: "#FF6384",
        data: categories.map(category => countByCategoryAndEvalIndex(category, 0)),
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1 style={{ textAlign: "center"}}>Dashboard</h1>
        <Grid container
          justifyContent="center"
          alignItems="flex-start"
          gap="1em"
        >
          <Grid xs={10} sm={6} md={4}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: "center" }}>Progression (questions traitées)</h2>
              <Doughnut data={questionsData} style={{paddingBottom: '1em'}}/>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={2} md={2}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: "center" }}>Conseils de révision</h2>
              <List>{revisionAdvice}</List>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={8} md={6}>
            <Paper elevation={3}>
              <h2 style={{ textAlign: "center" }}>Résultats (thèmes)</h2>
              <Bar data={resultsData} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
