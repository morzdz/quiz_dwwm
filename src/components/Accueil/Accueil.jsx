import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import theme from "../../customTheme";


function Accueil() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: '3em' }}>
        <h1
          style={{
            color: theme.palette.secondary.main,
          }}
        >
          Titre
        </h1>
        <p
          style={{
            color: theme.palette.common.black,
            marginTop: "3em",
            fontWeight: '600'
          }}
        >
          Que vous soyez un débutant curieux ou un professionnel expérimenté,
          plongez dans notre vaste bibliothèque de questions; <br /> relevez des
          défis, suivez votre progression et testez vos connaissances sur 
            <span style={{color: theme.palette.accent.main, fontSize: '18px'}}> HTML</span>,
            <span style={{color: theme.palette.accent.main, fontSize: '18px'}}> CSS</span>, 
            <span style={{color: theme.palette.accent.main, fontSize: '18px'}}> JavaScript</span>, 
            <span style={{color: theme.palette.accent.main, fontSize: '18px'}}> frameworks</span>, <span style={{color: theme.palette.accent.main, fontSize: '18px'}}> base de données</span> et bien plus encore.
          <br /> Nos quiz sont soigneusement conçus pour couvrir tous les
          aspects essentiels du développement web, <br />
          que vous souhaitiez consolider vos bases, explorer de nouveaux
          concepts ou vous préparer à un entretien.
        </p>
      </div>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2em",
          gap: "6em",
          marginTop: "50px",
        }}
      >
        <Card variant="outlined" 
          sx={{ 
              bgcolor: theme.palette.primary.main, 
              minWidth:'300px', 
              maxWidth:'600px', 
              height: '320px',
              display: 'flex',
              alignItems: 'center'
            }}>
          <CardContent sx={{ padding: '0 1em', margin: '0 2em' }}>
            <h2
              style={{
                textAlign: "center",
                color: theme.palette.common.white,
                paddingBottom: '1em'
              }}
            >
              Quizz classique
            </h2>
            <p
              style={{
                textAlign: "center",
                color: theme.palette.common.white,
                paddingBottom: '1em'
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
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.common.white,
                    "&:hover": {
                      bgcolor: theme.palette.common.white,
                      color: theme.palette.secondary.main,
                      fontWeight: '700'
                    },
                  }}
                >
                  Lancer le quizz
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card variant="outlined" 
          sx={{ 
            bgcolor: theme.palette.primary.main, 
            minWidth:'300px', 
            maxWidth:'600px', 
            height: '320px',
            display: 'flex',
            alignItems: 'center',
          }}>
          <CardContent sx={{ margin: '0 2em' }}>
            <h2
              style={{
                textAlign: "center",
                color: theme.palette.common.white,
                paddingBottom: '1em'
              }}
            >
              Quizz personnalisé
            </h2>
            <p
              style={{
                textAlign: "center",
                color: theme.palette.common.white,
                paddingBottom: '1em'
              }}
            >
              Personnalisez votre quiz en choisissant parmi les thèmes et votre
              niveau de compréhension pour une meilleure révision.
            </p>
            <div style={{ textAlign: "center" }}>
            <Link to="/Quizzperso">
              <Button
                variant="contained"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  "&:hover": {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    fontWeight: '700'
                  },
                }}
              >
                Lancer le quizz
              </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Accueil;
