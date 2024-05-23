import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

function Quizzperso() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#0E4749" }}>
        Quizz personnalisé
      </h1>

      {/* SECTION PERSO */}

      <h1 style={{ color: "#0E4749" }}>Difficulté des questions</h1>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Link to="/Questionsquizzperso/non-acquises" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002626",
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
                minHeight: "100px",
                minWidth: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
              Non-acquises
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link to="/Questionsquizzperso/acquises" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002626",
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
                minHeight: "100px",
                minWidth: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
              Acquises
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link to="/Questionsquizzperso/partiellement-acquises" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002626",
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
                minHeight: "100px",
                minWidth: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
              Partiellement
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Aléatoire
          </Button>
        </Grid>
      </Grid>

      {/* SECTION CATEGORIES */}

      <Grid item xs={12} sm={6} md={6}>
        <h1 style={{ color: "#0E4749" }}>Catégories</h1>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            HTML
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            CSS
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            JavaScript
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            React
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            SQL
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Méthode agile
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Maquettage
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Méthode Merise
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Quizzperso;