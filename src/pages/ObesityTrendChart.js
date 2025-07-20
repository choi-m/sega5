import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";
import { ButtonGroup, Button } from "react-bootstrap";

const AGE_GROUPS = [
  { key: "18-34", label: "18–34" },
  { key: "35-49", label: "35–49" },
  { key: "50-64", label: "50–64" },
  { key: "65+", label: "65+" }
];

const ObesityTrendChart = () => {
  const [data, setData] = useState([]);
  const [selectedAge, setSelectedAge] = useState("18-34");
  const { t } = useTranslation();

  useEffect(() => {
    Papa.parse("/obesity_trend.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const cleaned = results.data
          .filter(row => row.Year && row.Year.trim() !== "")
          .map(row => ({
            Year: row.Year,
            "18-34": parseFloat(row["18-34"]),
            "35-49": parseFloat(row["35-49"]),
            "50-64": parseFloat(row["50-64"]),
            "65+": parseFloat(row["65+"])
          }));
        setData(cleaned);
      }
    });
  }, []);

  return (
    <div>
      <div className="chart-header">{t("obesityTrendChart.title")}</div>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <ButtonGroup>
          {AGE_GROUPS.map(group => (
            <Button
              key={group.key}
              variant={selectedAge === group.key ? "primary" : "outline-primary"}
              onClick={() => setSelectedAge(group.key)}
            >
              {group.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="chart-description">
        {t('description2')}
      </div>
      <div style={{ padding: "1rem" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={selectedAge}
              stroke="#084a8c"
              name={AGE_GROUPS.find(g => g.key === selectedAge).label}
              dot={{ r: 5 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-blurb">{t("blurb")}</div>
    </div>
  );
};

export default ObesityTrendChart;
