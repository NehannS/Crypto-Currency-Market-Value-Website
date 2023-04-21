/** @format */

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import cryptoAPI from "./services/cryptoAPI.js";

// import MyChart from "./charts.js";

const MyModal = (props) => {
  const [socketType, setSocketType] = useState("");
  const [webSocketPrice, setPrice] = useState("");

  //currency convertor/formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    notation: "compact",
  });

  // number style formatter
  const numberStyle = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.symbol && props.data.symbol.toUpperCase()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.data.name}</h4>
        <p>Total Supply: {formatter.format(props.data.total_supply)}</p>
        <p>Total Volume: {formatter.format(props.data.total_volume)}</p>
        <Table striped>
          <tbody>
            <tr>
              <th>Price:</th>
              <td>{formatter.format(props.data.current_price)}</td>
            </tr>
            <tr>
              <th>Coin Market Cap:</th>
              <td>{formatter.format(props.data.market_cap)}</td>
            </tr>
            <tr>
              <th>Daily Change:</th>
              <td>
                {numberStyle.format(
                  props.data.market_cap_change_percentage_24h
                )}
                %
              </td>
            </tr>
            <tr>
              <th>Highest Price Last 24h:</th>
              <td>{formatter.format(props.data.high_24h)}</td>
            </tr>
            <tr>
              <th>Price Change 24h</th>
              <td>{formatter.format(props.data.price_change_24h)}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
