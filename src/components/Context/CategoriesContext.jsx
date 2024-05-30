import { createContext, useState, useContext, useEffect } from 'react';
import { quiz } from '../../data/Questions';

// Création du contexte pour les catégories
const CategoryContext = createContext();

// Hook personnalisé pour utiliser le contexte des catégories
export const useCategory = () => useContext(CategoryContext);

// Provider pour envelopper les composants enfants avec le contexte des catégories
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Fonction pour filtrer les questions en fonction de la catégorie sélectionnée
  useEffect(() => {
    if (selectedCategory) {
      const filteredQuestions = quiz.questions.filter(question => question.category === selectedCategory);
      setFilteredQuestions(filteredQuestions);
    } else {
      setFilteredQuestions([]); // Réinitialiser les questions filtrées si aucune catégorie n'est sélectionnée
    }
    console.log("Contexte des catégories:", { selectedCategory, filteredQuestions });
  }, [selectedCategory]);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, filteredQuestions }}>
      {children}
    </CategoryContext.Provider>
  );
};
