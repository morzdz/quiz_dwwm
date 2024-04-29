import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function Ressources() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#0E4749" }}>Ressources</h1>

      <h1 style={{ color: "#0E4749" }}>Dossiers à télécharger</h1>

      <Grid container spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Card variant="outlined" sx={{ bgcolor: "#002626" }}>
               <CardContent style={{ height: "100%" }}>
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "ABeeZee",
                  }}
                >
                  Titre
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "ABeeZee",
                  }}
                >
                  Description
                </p>
                <div style={{ textAlign: "center" }}>
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
                    Télécharger le PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <h1 style={{ color: "#0E4749" }}>Chaines Youtube spécialisées</h1>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/@grafikart"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              minHeight: "200px", 
              minWidth: "200px",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px", 
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Grafikart
              </span>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px", 
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                freeCodeCamp
              </span>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/channel/UCYnvxJ-PKiGXo_tYXpWAC-w"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px", 
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Micode
              </span>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/channel/UCIHVyohXw6j2T-83-uLngEg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px", 
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Graven
              </span>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/channel/UCS2e0hEJMhwd6bNscS60xTg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                FormationVidéo
              </span>
            </Card>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.youtube.com/@HarryJMG"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#002626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px", 
                minWidth: "200px",
                transition: "all 0.3s ease", 
                '&:hover': { 
                  transform: "scale(0.9)", 
                },
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Harry Jmg
              </span>
            </Card>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ressources;