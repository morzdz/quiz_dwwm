import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
            marginTop:"50px",
          }}
        >
          Que vous soyez un débutant curieux ou un professionnel expérimenté,
          plongez dans notre vaste bibliothèque de questions; <br /> relevez des
          défis, suivez votre progression et testez vos connaissances sur HTML,
          CSS, JavaScript, frameworks, bases de données et bien plus encore.
          <br /> Nos quiz sont soigneusement conçus pour couvrir tous les
          aspects essentiels du développement web, <br />que vous souhaitiez
          consolider vos bases, explorer de nouveaux concepts ou vous préparer à
          un entretien.
        </p>
      </div>
      <div
        style={{
          margin: "0 25%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "2em",
          gap: "100px",
          marginTop:"50px",
        }}
      >
        <Card variant="outlined" sx={{ bgcolor: '#002626' }}>
          <CardContent>
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "ABeeZee",
              }}
            >
              Quizz classique
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "ABeeZee",
              }}
            >
              Répondez à un nombre de questions entre 20 et la totalité des
              questions parmi tous les thèmes
            </p>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0E4749",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: '#002626'
                  },
                }}
              >
                Lancer le quizz
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ bgcolor: '#002626' }}>
          <CardContent>
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "ABeeZee",
              }}
            >
              Quizz personnalisé
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "ABeeZee",
              }}
            >
              Personnalisez votre quiz en choisissant parmi les thèmes et votre niveau de compréhension pour une meilleure révision.
            </p>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0E4749",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: '#002626'
                  },
                }}
              >
                Lancer le quizz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Accueil;
