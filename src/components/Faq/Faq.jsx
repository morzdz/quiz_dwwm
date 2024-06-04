import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../customTheme";
import './Faq.css';

const faqData = [
  {
    question: "Comment utiliser cette application ?",
    answer: "Pour utiliser cette application, choisissez le nombre de questions que vous souhaitez répondre et commencez le quizz. Vous pourrez ensuite générer des quizz personnalisés en fonction de vos réponses déjà enregistées."
  },
  {
    question: "Puis-je changer la langue de l'application ?",
    answer: "Actuellement, l'application est uniquement disponible en français. Nous travaillons sur l'ajout de plus de langues."
  },
  {
    question: "Comment puis-je sauvegarder mes réponses ?",
    answer: "Actuellement, l'application ne permet pas de sauvegarder ses réponses. Si vous actualisez votre navigateur, vos données seront perdues. Nous travaillons sur l'ajout de cette fonctionnalité."
  },
  {
    question: "Qui peut utiliser cette application ?",
    answer: "Cette application est destinée à tous ceux qui souhaitent améliorer leurs compétences en programmation."
  },
  {
    question: "Comment puis-je contacter le support ?",
    answer: "Vous pouvez contacter le support par email à webdevquizz@gmail.com."
  }
];

const Faq = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="faq-container">
        <Typography variant="h4" gutterBottom>
          Foire Aux Questions (FAQ)
        </Typography>
        {faqData.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default Faq;