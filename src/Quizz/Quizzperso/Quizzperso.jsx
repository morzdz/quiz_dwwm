import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { QuizzContext } from '../../contexts/QuizContext';

function Quizzperso() {
  const [autoEvalIndex, setAutoEvalIndex] = useState('');
  const [category, setCategory] = useState('');
  const { updateFilters } = useContext(QuizzContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    updateFilters(autoEvalIndex, category);
    navigate('/Questionsquizzperso');
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#0E4749" }}>Quizz personnalisé</h1>
      
      <h1 style={{ color: "#0E4749" }}>Difficulté des questions</h1>
      
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: autoEvalIndex === 'non-acquises' ? "#0E4749" : "#002626",
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
            onClick={() => setAutoEvalIndex('non-acquises')}
          >
            Non-acquises
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: autoEvalIndex === 'acquises' ? "#0E4749" : "#002626",
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
            onClick={() => setAutoEvalIndex('acquises')}
          >
            Acquises
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: autoEvalIndex === 'partiellement-acquises' ? "#0E4749" : "#002626",
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
            onClick={() => setAutoEvalIndex('partiellement-acquises')}
          >
            Partiellement
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: autoEvalIndex === 'aleatoire' ? "#0E4749" : "#002626",
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
            onClick={() => setAutoEvalIndex('aleatoire')}
          >
            Aléatoire
          </Button>
        </Grid>
      </Grid>

      <h1 style={{ color: "#0E4749", marginTop: "20px" }}>Catégories</h1>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="category-select-label">Catégorie</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Catégorie"
            >
              <MenuItem value="HTML">HTML</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="ReactJS">React</MenuItem>
              <MenuItem value="SQL">SQL</MenuItem>
              <MenuItem value="Méthode Agile">Méthode agile</MenuItem>
              <MenuItem value="Maquettage/Prototypage">Maquettage</MenuItem>
              <MenuItem value="Méthode Merise">Méthode Merise</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#002626",
            color: "white",
            fontFamily: "ABeeZee",
            fontSize: "1.5rem",
            minHeight: "50px",
            minWidth: "200px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(0.9)",
            },
          }}
          onClick={handleSubmit}
        >
          Valider
        </Button>
      </Grid>
    </div>
  );
}

export default Quizzperso;