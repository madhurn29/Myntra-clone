import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  // AddressCheckoutAdd,
  AllPriceDiv,
  AvailableofferDiv,
  AvaOffer,
  CardCD,
  CardCDdiv,
  CardName,
  CardNumber,
  CashOnDel,
  ChooseMode,
  Cod,
  Container,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Cvv,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  // DotsCheckoutAdd,
  // DotsCheckoutP,
  Emi,
  Emidiv,
  Expiry,
  ExpiryCvv,
  FirstOffer,
  FormRightDiv,
  FullpayemntPage,
  Giftleft,
  GiftRight,
  HaveGift,
  HaveGiftLabel,
  NetBank,
  NetBankdiv,
  PayemntMain,
  // PaymentCheckoutP,
  PaymentLeft,
  PaymentMethods,
  PaymentMethodsInput,
  PayNowButton,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TopLA,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
  Upi,
  Upidiv,
  // UpiIcon,
  Wallet,
  Walletdiv,
} from "./Payment.element";

import {
  AccountBalanceOutlined,
  AccountBalanceWalletOutlined,
  CardGiftcard,
  CreditCardOutlined,
  CurrencyRupeeOutlined,
  DiscountOutlined,
  PaymentsOutlined,
  QrCodeScanner,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { CartFooter } from "../CartComponents/CartFooter";
import { CartNavbar } from "../CartComponents/CartNavbar";

const PaymentPro = () => {
  const navigate = useNavigate();
  // const [creditCardNum, setCreditCardNum] = useState("#### #### #### ####");
  // const [cardHolder, setCardHolder] = useState("Your Full Name");
  // const [expireMonthYear, setExpireMonthYear] = useState("MM/YY");
  // const [cvv, setCvv] = useState("CVV");

  const handleSubmit = (e) => {
    console.log("Hello");
    navigate("/orderSuccess");
  };
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalMRPDiscount, setTotalMRPDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //   for navColor
  const [paymentColor, setColor] = useState("#696b79");

  useEffect(() => {
    // change the color to red only on initial page load
    setColor("#20bd99");
  }, []);

  useEffect(() => {
    const p = localStorage.getItem("price");
    if (p) {
      setTotalAmount(JSON.parse(p));
    }
    const m = localStorage.getItem("markedPrice");
    if (m) {
      setTotalMRP(JSON.parse(m));
    }
    const d = localStorage.getItem("discount");
    if (d) {
      setTotalMRPDiscount(JSON.parse(d));
    }
  }, []);

  return (
    <Container>
      <CartNavbar paymentColor={paymentColor} />
      <FullpayemntPage>
        <PaymentLeft>
          <AvailableofferDiv>
            <TopLA>
              <DiscountOutlined sx={{ width: "25px", height: "25px" }} />
              <AvaOffer>Bank Offers</AvaOffer>
            </TopLA>
            <FirstOffer>
              10% Instant Discount on IDFC FIRST Bank Cards onamin spend of Rs
              2,500.TCA
            </FirstOffer>
            {/* <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#ff3f6c",
                      marginLeft: "-495px",
                      fontSize: "12px",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#ff3f6c",
                    fontSize: "12px",
                    marginBottom: "none",
                  }}
                >
                  Show More
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 100 on Paytm Postpaid transaction onamin
                  spend of Rs 1000. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  15% Cashback upto Rs 150 on Freecharge Paylater transaction.
                  TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                  transaction onamin spend of Rs 1000. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  Upto Rs 500 Cashback on Mobikwik Wallet Transactions onamin
                  spend of Rs 999.Use code MBK500 on Mobikwik.TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Cashback upto Rs 150 onaminimum spend of Rs 1,500 with
                  PayZapp. TCA
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </AvailableofferDiv>
          <ChooseMode>Choose Payment Mode</ChooseMode>
          <PayemntMain>
            <PaymentMethods>
              <CashOnDel>
                <CurrencyRupeeOutlined sx={{ width: "25px", height: "25px" }} />
                <Cod>Cash On Delivery</Cod>
              </CashOnDel>
              <CardCDdiv>
                <CreditCardOutlined
                  sx={{ width: "25px", height: "25px", color: "#ff3f6c" }}
                />
                <CardCD>Credit/Debit Card</CardCD>
              </CardCDdiv>
              <Upidiv>
                <QrCodeScanner sx={{ width: "25px", height: "25px" }} />
                <Upi>GPay/PhonePay/Upi</Upi>
              </Upidiv>
              <Walletdiv>
                <AccountBalanceWalletOutlined
                  sx={{ width: "25px", height: "25px" }}
                />
                <Wallet>Paytm/Wallets</Wallet>
              </Walletdiv>
              <NetBankdiv>
                <AccountBalanceOutlined
                  sx={{ width: "25px", height: "25px" }}
                />
                <NetBank>Net Banking</NetBank>
              </NetBankdiv>
              <Emidiv>
                <PaymentsOutlined sx={{ width: "25px", height: "25px" }} />
                <Emi>EMI/Pay Later</Emi>
              </Emidiv>
            </PaymentMethods>
            <PaymentMethodsInput onSubmit={handleSubmit}>
              <ChooseMode>CREDIT/DEBIT CARD</ChooseMode>
              <CardNumber
                placeholder="Card Number"
                onChange={(e) => e.target.value}
                pattern={"^[0-9]{10-12}$"}
                maxlength="4"
                required
              />
              <CardName
                placeholder="Name On card (Ex:- John Michael)"
                onChange={(e) => e.target.value}
                pattern={"^[A-Za-z ]{5,16}$"}
                required
              />
              <ExpiryCvv>
                <Expiry
                  type="month/year"
                  placeholder="Valid Thru (MM/YY)"
                  onChange={(e) => e.target.value}
                  pattern={"^(0[1-9]|1[0-2])\/?([0-9]{2})$"}
                  maxlength={4}
                  required
                />
                <Cvv
                  type="number"
                  placeholder="CVV"
                  onChange={(e) => e.target.value}
                  pattern={"^[0-9]{03}$"}
                  maxlength={3}
                  required
                />
              </ExpiryCvv>
              <PayNowButton type="submit" />
            </PaymentMethodsInput>
          </PayemntMain>
          <HaveGift>
            <Giftleft>
              <CardGiftcard sx={{ width: "25px", height: "25px" }} />
              <HaveGiftLabel>Have a Gift Card?</HaveGiftLabel>
            </Giftleft>
            <GiftRight>APPLY GIFT CARD</GiftRight>
          </HaveGift>
        </PaymentLeft>

        <FormRightDiv>
          <AllPriceDiv>
            <PriceDetailsT>
              PRICE DETAILS (Items)
            </PriceDetailsT>
            <TmrpDiv>
              <Tmrp>TOTAL MRP</Tmrp>
              <Tmrprs>₹{totalMRP}</Tmrprs>
            </TmrpDiv>
            <DmrpDiv>
              <Dmrp>Discount on MRP</Dmrp>
              <Dmrprs>-₹{totalMRPDiscount}</Dmrprs>
            </DmrpDiv>
            <CoupDisDiv>
              <CoupDis>Coupon Discount</CoupDis>
              <CoupDisrs>Apply Coupon</CoupDisrs>
            </CoupDisDiv>
            <CoviFeediv>
              <CoviFee>Convenience Fee</CoviFee>
              <CoviFeeKM>Know More</CoviFeeKM>
              <CoviFeers>FREE</CoviFeers>
            </CoviFeediv>
          </AllPriceDiv>
          <TotalPriceDiv>
            <TotalAmountdiv>
              <TotalAmount>Total Amount</TotalAmount>
              <TotalAmountrs>₹{totalAmount}</TotalAmountrs>
            </TotalAmountdiv>
          </TotalPriceDiv>
        </FormRightDiv>
      </FullpayemntPage>

      <CartFooter />
    </Container>
  );
};

export default PaymentPro;
