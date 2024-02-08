import "./styles.css";

export default function TableLegend() {
  return (
    <div className="legend-container">
      <span className="label-legend">
        Indica o consumo médio em litros por tonelada e quilômetro:
      </span>
      <div className="item-legend">
        <span className="badge red-badge" />
        Alto
      </div>
      <div className="item-legend">
        <span className="badge yellow-badge" />
        Moderado
      </div>
      <div className="item-legend">
        <span className="badge green-badge" />
        Baixo
      </div>
    </div>
  );
}
