import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { useTranslation } from 'react-i18next';

const ObesityChart = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Papa.parse("/obesity2022.csv", {
      download: true,
      header: true,
      complete: (results) => {
       
        const cleaned = results.data
          .filter(row => row.AgeGroup && row.AgeGroup.trim() !== "" && !isNaN(parseFloat(row.Overweight)) && !isNaN(parseFloat(row.Obese)))
          .map(row => ({
            AgeGroup: row.AgeGroup,
            Overweight: parseFloat(row.Overweight),
            Obese: parseFloat(row.Obese)
          }));
        setData(cleaned);
      }
    });
  }, []);

  // Example for English and French
  const description = i18n.language === 'fr'
    ? <>Ce graphique linéaire montre la tendance des taux d'obésité chez les personnes âgées de 18 à 34 ans entre 2021 et 2022. Les taux d'obésité sont représentés en <span className="text-blue">bleu saturé</span>, les taux de personnes en surpoids dans les groupes sont représentés en <span className="text-orange">orange saturé</span> pour une meilleure lisibilité.</>
    : <>This bar chart shows the percentage of overweight and obese individuals across 4 age groups in 2022. The rates of obesity are represented in <span className="text-blue">blue</span>, and the rates of overweight individuals are represented in <span className="text-orange">orange</span> for readability.</>;

  return (
    <div>
      <div className="chart-header">{t('obesityChart.title')}</div>
      <br></br>
      <div className="chart-description">
        {description}
      </div>
      <div style={{ padding: "1rem" }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="AgeGroup" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Overweight" fill="#ff9800" name={t('obesityChart.overweight')} />
            <Bar dataKey="Obese" fill="#2196f3" name={t('obesityChart.obese')} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-blurb">{t('blurb')}</div>
    </div>
    
  );
};

export default ObesityChart;
