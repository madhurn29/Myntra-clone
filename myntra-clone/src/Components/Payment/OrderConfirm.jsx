import React from "react";
import {
//   AddressCheckoutO,
  ButtonDiv,
  Container,
  ContiShop,
//   DotsCheckoutO,
  OrderC,
  OrderCBS,
  OrderCM,
  OrderConfirmdiv,
//   PaymentCheckoutO,
//   ViewOrder,
} from "./OrderConfirm.element";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import {CartFooter} from "../CartComponents/CartFooter";
import {CartNavbar} from "../CartComponents/CartNavbar";



const OrderConfirm = () => {
  const navigate = useNavigate();

  const contiShop = ()=>{
    navigate("/")
  }
  return (
    <Container>
       <CartNavbar color={"#20bd99"} />
      <OrderConfirmdiv>
        <OrderCBS>
          <CheckCircleOutlineIcon
            sx={{ width: "55px", height: "55px", color: "#ff3f6c" }}
          />
          <OrderC>Order Confirmed</OrderC>
          <OrderCM>
            Your order is confirmed. You will receive an order confirmation
            email/SMS shortly with the expected delivery date for your items.
          </OrderCM>
          <ButtonDiv>
            <ContiShop onClick={contiShop}>CONTINUE SHOPPING</ContiShop>
          </ButtonDiv>
        </OrderCBS>
      </OrderConfirmdiv>
      <CartFooter />
    </Container>
  );
};

export default OrderConfirm;
