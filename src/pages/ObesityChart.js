import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";

const ObesityChart = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    Papa.parse("/obesity2022.csv", {
      download: true,
      header: true,
      complete: (results) => {
        // Filter out rows with empty AgeGroup or invalid data
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

  return (
    <div>
      <div className="chart-header">{t('obesityChart.title')}</div>
      <br></br>
      <div className="chart-blurb">{t('blurb')}</div>
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
    </div>
  );
};

export default ObesityChart;
