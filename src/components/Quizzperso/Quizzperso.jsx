import { useEffect } from 'react';
import { Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../Context/CategoriesContext.jsx';

function Quizzperso() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const navigate = useNavigate();

  // Function to update the selected category and navigate to the quiz
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    navigate('/quiz');
  };

  // Effect to display the data stored in the context when the component is mounted
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#0E4749" }}>
        Quizz personnalisé
      </h1>

      {/* SECTION PERSO */}

      <h1 style={{ color: "#0E4749" }}>Difficulté des questions</h1>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("Non-acquises")}
          >
            <CardContent>
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Non-acquises
              </span>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("Acquises")}
          >
            <CardContent>
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Acquises
              </span>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("Partiellement")}
          >
            <CardContent>
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Partiellement
              </span>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("Aléatoire")}
          >
            <CardContent>
              <span
                style={{
                  color: "white",
                  fontFamily: "ABeeZee",
                  fontSize: "1.5rem",
                }}
              >
                Aléatoire
              </span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* SECTION CATEGORIES */}

      <Grid item xs={12} sm={6} md={6}>
        <h1 style={{ color: "#0E4749" }}>Catégories</h1>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("HTML")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              HTML
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("CSS")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              CSS
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("Javascript")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              Javascript
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("ReactJS")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              React
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("SQL")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              SQL
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("NodeJS")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              NodeJS
            </span>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#002626",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => handleCategorySelection("GIT")}
          >
            <span
              style={{
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
              }}
            >
              Méthode Merise
            </span>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Quizzperso;

