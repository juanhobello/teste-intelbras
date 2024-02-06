import Table from "../../components/Table/Table";
import EstimateFuelForm from "../../forms/EstimateFuelForm/EstimateFuelForm";
import "./styles.css";

const EstimateFuelList = () => {
  return (
    <div className="container">
      <EstimateFuelForm />
      <Table />
    </div>
  );
};

export default EstimateFuelList;
