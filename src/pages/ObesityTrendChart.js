import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";

const ObesityTrendChart = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    Papa.parse("/obesity_trend.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const cleaned = results.data
          .filter(row => row.Year && row.Year.trim() !== "" && !isNaN(parseFloat(row.Obese)))
          .map(row => ({
            Year: row.Year,
            Obese: parseFloat(row.Obese)
          }));
        setData(cleaned);
      }
    });
  }, []);

  return (
    <div>
      <div className="chart-header">{t("obesityTrendChart.title")}</div>
      <div className="chart-blurb">{t("blurb")}</div>
      <div style={{ padding: "1rem" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Obese" stroke="#ff7300" name={t('obesityTrendChart.obese')} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ObesityTrendChart;
