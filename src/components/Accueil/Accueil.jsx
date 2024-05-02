import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import QuizzClassique from "../../Quizz/QuizzClassique/QuizzClassique.jsx";
import Quizzperso from "../Quizzperso/Quizzperso.jsx";

function Accueil() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#0E4749",
            fontFamily: "ABeeZee",
          }}
        >
          Titre
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#34302E",
            fontFamily: "ABeeZee",
            marginTop: "50px",
          }}
        >
          Que vous soyez un débutant curieux ou un professionnel expérimenté,
          plongez dans notre vaste bibliothèque de questions; <br /> relevez des
          défis, suivez votre progression et testez vos connaissances sur HTML,
          CSS, JavaScript, frameworks, bases de données et bien plus encore.
          <br /> Nos quiz sont soigneusement conçus pour couvrir tous les
          aspects essentiels du développement web, <br />
          que vous souhaitiez consolider vos bases, explorer de nouveaux
          concepts ou vous préparer à un entretien.
        </p>
      </div>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: "#002626",
              height: "100%",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              margin: "0 auto", 
            }}
          >
            <CardContent style={{ flex: 1 }}>
              <h2
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  textAlign: "center",
                }}
              >
                Quizz classique
              </h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  textAlign: "center",
                }}
              >
                Répondez à un nombre de questions entre 20 et la totalité des
                questions parmi tous les thèmes
              </p>
              <div style={{ textAlign: "center" }}>
                <Link to="/QuizzClassique">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#0E4749",
                      color: "white",
                      "&:hover": {
                        bgcolor: "white",
                        color: "#002626",
                      },
                    }}
                  >
                    Lancer le quizz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: "#002626",
              height: "100%",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              margin: "0 auto", 
            }}
          >
            <CardContent style={{ flex: 1 }}>
              <h2
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  textAlign: "center",
                }}
              >
                Quizz personnalisé
              </h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  textAlign: "center",
                }}
              >
                Personnalisez votre quiz en choisissant parmi les thèmes et
                votre niveau de compréhension pour une meilleure révision.
              </p>
              <div style={{ textAlign: "center" }}>
                <Link to="/Quizzperso">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#0E4749",
                      color: "white",
                      "&:hover": {
                        bgcolor: "white",
                        color: "#002626",
                      },
                    }}
                  >
                    Lancer le quizz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Accueil;



