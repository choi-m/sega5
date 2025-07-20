import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "titleRadar": "Obesity Dashboard",
      "dashboardIntro": "This is a bilingual dashboard displaying obesity and overweight rates by age group in Canada (2022). The data is for visualization purposes only.",
      "obesityChart.title": "Rates of Overweight and Obesity by Age Group (2022) by Statistics Canada",
      "description": "This bar chart shows the percentage of overweight and obese individuals across 4 age groups in 2022. The rates of obesity are represented in blue, and the rates of overweight individuals are represented in orange for readability.",
       "description2": "This line graph demonstrates the trend of obesity rates among individuals aged 18–34 from 2021 to 2022.",
      "obesityChart.overweight": "Overweight",
      "obesityChart.obese": "Obese",
      "navbar.brand": "Obesity Dashboard",
      "obesityTrendChart.title": "Obesity Trend in Ages 18–34 (2021–2022)",
      "obesityTrendChart.obese": "Obese",
      "mainTitle": "Obesity Dashboard; trends in weight",
 "blurb": "Data source: Statistics Canada. Table 13-10-0096-20: Body mass index, overweight or obese, self-reported, adult, age groups (18 years and older). DOI: https://doi.org/10.25318/1310009601-eng"

    }
  },
  fr: {
    translation: {
      "titleRadar": "Tableau de bord sur l'obésité",
      "dashboardIntro": "Taux de surpoids et d'obésité par groupe d'âge (2022) par Statistique Canada. Les données sont utilisées uniquement à des fins de visualisation.",
      "obesityChart.title": "Taux de surpoids et d'obésité par groupe d'âge (2022) par Statistique Canada",
      "description": "Ce graphique linéaire montre la tendance des taux d'obésité chez les personnes âgées de 18 à 34 ans entre 2021 et 2022. Les taux d'obésité sont représentés en bleu saturé, les taux de personnes en surpoids dans les groupes sont représentés en orange saturé pour une meilleure lisibilité.",
      "description2": "Ce graphique linéaire montre la tendance des taux d'obésité chez les personnes âgées de 18 à 34 ans entre 2021 et 2022.",
      "obesityTrendChart.obese": "Obésité",
      "obesityChart.overweight": "Surpoids",
      "obesityChart.obese": "Obésité",
      "navbar.brand": "Tableau de bord sur l'obésité",
      "obesityTrendChart.title": "Tendance de l'obésité chez les 18–34 ans (2021–2022)",
      "mainTitle": "Tableau de bord sur l'obésité; tendances du poids",
   "blurb": "Data source: Statistics Canada. Table 13-10-0096-20: Body mass index, overweight or obese, self-reported, adult, age groups (18 years and older). DOI: https://doi.org/10.25318/1310009601-eng"

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
