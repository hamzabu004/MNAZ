import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Sell() {
  return (
    <Fragment>
      <Head>
        <title>FAQs about Trust Deeds | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== FAQs background ========== */}
        <div className="faqBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>
        </div>

        {/* ============ FAQs */}
        <div className="w-full md:w-[70%] flex flex-col items-center justify-center py-[2rem] mx-auto gap-[1rem]">
          <h1 className="text-[28px] font-[600] opacity-70">
            Glossary of Terms
          </h1>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>OO: Owner Occupied</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Used as a dwelling by the owner</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>NOO: Non-Owner Occupied</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Property owner does not use the residence as their primary
                  residence
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>SFR: Single Family Residence</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>PSingle-dwelling unit</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>CO: Cash-Out</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Equity in property taken out and given to the borrower as Cash
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>R/T: Rate/Term</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Replacing current mortgage loan new one – typically with
                  better terms
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>LTV: Loan-to-Value</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ratio that compares the amount of a mortgage balance with the
                  value of the property
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>CLTV: Combined Loan-to-Value</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ratio of all secured loans on a property to the value of the
                  property
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>1st TD: First Trust Deed</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Deed of Trust or mortgage which is recorded senior to any
                  other deeds of trust or liens against a property
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>2nd TD: Second Trust Deed</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A loan or mortgage recorded against a property when the
                  property already has an existing loan or mortgage
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Min Inv: Minimum Investment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Minimum amount required for one unit of trust deed investment
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Prepaid Int (PI): Prepaid Interest</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Prepaid Interest are the monthly payments that are taken out
                  of the loan amount. So, if the borrower is paying 3 months of
                  prepaid interest, the investor gets those 3 months paid to him
                  via ACH when the loan is setup at FCI and the borrower makes
                  his 1st payment after month 4 of the loan.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Guar Int (GI): Guaranteed Interest</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Guaranteed Interest is how many months the borrower is going
                  to stay in the loan at a minimum, so 6 moths guaranteed
                  interest means that the borrower will make a minimum of 6
                  months of payments. The borrower can pay off the loan at any
                  time without penalty after the Guaranteed Interest period
                  expires
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Net LTV: Net Loan-to-Value</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Loan proceeds after points, fees, prepaids, etc., are taken
                  out of the loan at closing
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Net CLTV: Net Combined Loan-to-Value</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Loan proceeds after points, fees, prepaids, etc., are taken
                  out of the loan at closing
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Est Funding Date: Estimated Funding Date
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Estimated date the loan will fund</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-col items-center justify-center py-[2rem] mx-auto gap-[1rem]">
          <h1 className="text-[28px] font-[600] opacity-70">General</h1>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is a Trust Deed?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When a loan is completed on a home, there are two parts to the
                  transaction: the Promissory Note and the Deed of Trust. This
                  Deed of Trust is also referred to as a ‘Trust Deed’ and is a
                  Recorded ownership interest in a property. This Trust Deed is
                  the legal document that shows who is due to get paid on the
                  ‘promissory note’ that is on a property. In other words, A
                  Trust Deed is a security instrument which gives the lender an
                  interest in the property the borrower has pledged as security
                  for the performance of a promissory note. Simply stated, when
                  one invests in a loan, the collateral is real estate secured
                  by the Deed of Trust recorded in the County where the property
                  is located. MNAZ provides investors the opportunities to
                  participate as a lender of record in a property through a
                  whole or fractionalized investment. A whole interest owns the
                  loan in its entirety and a fractional interest owns a portion
                  of the loan with another beneficiary or beneficiaries. A whole
                  or fractionalized interest is an investment usually secured by
                  a single property or multiple properties in a blanket loan.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is MNAZ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  PMNAZ is a dynamic online marketplace for Trust Deed
                  investors/lenders, enabling lenders to buy and sell sponsored
                  Trust Deeds, including fractional interests, while simplifying
                  an online real-time investing experience. This fintech social
                  website allows registered investors to buy and sell high yield
                  current monthly income California Trust Deeds and creates
                  liquidity for all Trust Deed lenders.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Who can benefit from Trust Deed Investments?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Any California Qualified Investor can enjoy the high yield
                  cash flow benefits of a secured Trust Deed Investment.
                  Investor’s in Trust Deeds understand and appreciate the value
                  of equity protection in real estate in addition to the cash
                  flow benefits of owning real estate debt like Trust Deeds.
                  Investors/Lenders like the fact that real estate is a tangible
                  asset that is collateral for their loan. An investor can
                  visually inspect the property securing the loan — they can
                  actually walk through it, examine it and touch it. There is
                  simply no mystery. MNAZ believes that the collateral for a
                  loan should be the real estate, not a Promissory Note from a
                  company or an interest in a high fee structure mortgage fund.
                  Trust Deed Investors should have sufficient knowledge and the
                  understanding necessary to make intelligent decisions about
                  how to choose their investments. In addition to owning a
                  tangible asset, Investors who require diversification and
                  consistent returns also benefit from Trust Deed ownership.
                  These Investors could include: financial managers, IRA/401k
                  holders, family trusts, high net worth individuals and smaller
                  investors seeking to balance and diversify their investment
                  portfolios.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What role does MNAZ play on listed Trust Deeds?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  MNAZ is not a broker, advisor, or other kind of middleman. We
                  provide technology to Sponsors so they can efficiently buy and
                  sell Trust Deeds online. Mortgage Vintage, Inc., a California
                  Licensed Real Estate Broker is one of the Sponsors offering
                  Trust Deeds on the MNAZ Marketplace.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I invest in a fraction or portion of a loan/Trust Deed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. MNAZ offers a variety of Trust Deed investments including
                  fractional or whole interests. In these investments you would
                  own an undivided interest (either a partial or whole interest)
                  in a specific property, with the Note describing the terms of
                  repayment by the borrower and the Deed of Trust providing the
                  security.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What types of Trust Deeds will MNAZ List and Sell?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Company will sell 1st and 2nd Trust Deeds. Typically Trust
                  Deeds scenarios will be from underserved lending segments;
                  including credit impaired and reduced income documentation
                  loans. Sponsors will originate deeds of trust for residential
                  properties and other types of properties maintaining high
                  equity positions. The marketplace will primarily be involved
                  with Non Owner Occupied residential properties, however in
                  special circumstances, the Company will lend on Owner Occupied
                  homes.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What information am I provided before I invest?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Immediately after you pledge for an investment, you will
                  receive an email confirming your pledge. This email will also
                  contain a link to all of the underwriting documents for your
                  review. If you have any questions regarding these documents,
                  you can post a question to the MNAZ (“CTD”) site or send an
                  email to sandy@mortgagevintage.com or
                  mayumi@mortgagevintage.com. At approximately the same time
                  that we ask you to fund the loan, we also send out what we
                  call “Lender Documents”. These documents consist of a
                  Servicing Agreement between Mortgage Vintage and you, the
                  Lender Purchaser Disclosure Statement (a Department of Real
                  Estate required form), and a PACE disclosure.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How does MNAZ get paid?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The MNAZ marketplace fees are: The marketplace fee is .25% (25
                  basis points (bps)) to the Sponsor (Seller). The minimum fee
                  for a seller $250. The sale of a note, or fractional interest,
                  of less then $100,000 will result in the minimum fee being
                  assessed. Title, escrow and closing charges are not included
                  in the marketplace fee. Once the loan is sold, the Sponsor can
                  either Service the loan themselves or pay 50 bps out of the
                  spread and MNAZ will service the loan for the Sponsor.y
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What Fees are Charged?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Investors are not charged any fees at any time! Any fees
                  charged by the sub-servicer (FCI Lender Services) are paid by
                  Mortgage Vintage, Inc. from our servicing spread. This is to
                  ensure that the investor realizes a true rate of return.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is the Geographic Lending Area?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Marketplace only markets California Trust Deeds.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What are the Trust Deed Amounts?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The minimum Trust Deed Investment or fractional interest size
                  is $20,000 and the Maximum loan size is $5.0 million. Rehab
                  loans are limited in size to $2.5 million.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What are the Trust Deed Terms?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Trust Deed terms will be determined based on the type of Trust
                  Deed being completed. Smaller balance residential transactions
                  will typically be 1-3 years Interest Only with a balloon. Loan
                  terms can be as short as 12 months or as long as 7 years.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What’s the legal status of MNAZ offerings?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  All offerings at MNAZ are a sale of interests in notes secured
                  by real property to not more than 10 persons. This
                  “multi-lender rule” is defined by the CA Bureau of Real Estate
                  as Section 10229 of the Business and Professions Code and
                  applies only to the exemption from securities qualification
                  claimed under Section 25102.5 of the Corporations Code.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Why do investors need to meet Investor Suitability
                  Requirements?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Qualified California Residents can invest through our
                  marketplace. Investors need to reside in California, or for
                  entities your principal place of business needs to be in
                  California. You don’t need to be an accredited investor,
                  however you do need to qualify based on a number of factors
                  including: Net worth, income and capacity to understand the
                  investment.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What are a Sponsor’s responsibility?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sponsors serve as the mortgage lender or seller on the
                  transaction. Originating Sponsors apply stringent underwriting
                  guidelines, and standardized processes and procedures. After
                  the loan has closed, MNAZ will make the loan available for
                  purchase to qualified third parties. We have partnered with
                  FCI Lender Services, a professional servicing company, to
                  handle all of the servicing (payment collection and borrower
                  interaction) as it relates to the trust Deed that you own. We
                  work with FCI to handle all the interaction with the borrower
                  so the owner of the loan can relax and just receive their
                  monthly payments.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> How does the Trust Deed Process work?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Most loans are brought to MNAZ by Sponsors who are originating
                  or who have originated a loan. Borrowers are typically real
                  estate investors that need extra cash and do not qualify for
                  traditional bank loans. Once MNAZ qualifies the Sponsor and
                  the property, we then seek outside investors who might want to
                  participate in the loan. Typical investment amounts are in
                  increments of $20k, but may be larger depending upon the loan
                  amount. MNAZ Workflow Diagram For example, if you decide to
                  invest $100,000 in a 12% Interest OnlyTrust Deed with a 10.5%
                  payment and a term of 36 months, you would receive a monthly
                  check in the amount of $875.00 for 36 months with payment of
                  your $100,000 principal investment at the end of the loan
                  term. MNAZ investors can pick and choose the loans they wish
                  to participate in. Once they express interest in a loan, we
                  provide the investor with all the information on the loan
                  including the loan application, a recent appraisal and a
                  preliminary title report. All loans are escrowed by local
                  title companies which record the Trust Deed with the name of
                  each investor listed on the Trust Deed.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What/Who is a Sponsor?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A Sponsor is an approved and vetted person or company that
                  lists and sells their Trust Deed on the MNAZ marketplace.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Who Services the Loan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The loan is serviced by two parties: Mortgage Vintage, Inc.,
                  as the Master Servicer and FCI Lender Services (“FCI”) as the
                  sub-servicer. We use FCI to collect borrower payment and
                  disburse lender funds. FCI is also responsible for late
                  payment notices, preparing the payoff demands, and recording
                  reconveyances. In addition, FCI is responsible for sending the
                  investor their annual tax forms. However, FCI does not handle
                  making collection calls to borrowers, monitoring property
                  taxes or insurance. These tasks are handled by Mortgage
                  Vintage, Inc. as the Master Servicer. As Master Servicer,
                  Mortgage Vintage, Inc. will monitor each loan including,
                  making collection calls, sending out pre-foreclosure notices
                  (30 Day Notices of Intent to Implement Default Interest),
                  processing extensions upon requests, sending out loan maturity
                  notices, monitoring property insurance and taxes, overseeing
                  the foreclosure process, etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How do you save login information?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Each Web Browser is different but most will ask you if you
                  would like to save your username and password when you first
                  register. To turn this feature on, go to your browser settings
                  and navigate to the ‘autofill’ or ‘passwords’ section. For
                  more detailed explanation, please follow this link.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-col items-center justify-center py-[2rem] mx-auto gap-[1rem]">
          <h1 className="text-[28px] font-[600] opacity-70 leading-[30px] text-center">
            Questions by Trust Deed Investment Sponsors
          </h1>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I use MNAZ even if I don’t have a Trust Deed for sale?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Absolutely! A buyer can access available inventory at any
                  time. If you think you want to list a TrustDeed for sale
                  during the next few months, you should get a head start by
                  creating your Sponsor profile and promoting your new
                  marketplace channel page among your business and personal
                  connections. That way, once your Trust Deed materializes, your
                  fundraising process will be a breeze.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What’s the Sponsor screening process and how does it work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It is a phone or personal interview to meet your team and chat
                  about your experience, qualifications, background, and
                  objectives.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What kinds of Trust Deeds can I submit to MNAZ for listing?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As long as you are raising debt, all kinds of real estate
                  scenarios are welcome: residential, commercial, or mixed-use;
                  acquisition, refinancing, or development. Just note that you
                  cannot submit a listing to finance your home or non-real
                  estate collateral.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Will my Trust Deed information be held confidential?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our terms of use include confidentiality provisions that are
                  intended to protect Trust Deed sponsors from users’ misuse of
                  their Trust Deed information. You could also submit your own
                  confidentiality agreement for investors to sign. However, we
                  cannot assure you users will comply with these provisions. We
                  strongly recommend that you do not list any Trust Deed
                  information unless you are comfortable with it being public.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  May I list my Trust Deed before it is approved by a MNAZ staff
                  member?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No, you may not.</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How is my Trust Deed structured?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The fractionalized Trust Deed interests cannot be sold to more
                  than 10 persons who meet one or both of the qualifications
                  based on income or net worth.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What are Maximum Loan To Value Ratios?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At MNAZ, we ensure that Sponsors are most interested in the
                  preservation of an Investors principal investments, and
                  because of this, we seek out Sponsors that originate extremely
                  conservative loans. The key to underwriting secure loans is
                  substantial equity in the property, which is demonstrated in
                  low Loan-to-Value ratios. Typically, a financial institution
                  will lend up to 80%, 90%, 100% or even more of the value of
                  the real estate securing the loan, leaving little or no equity
                  protection. At MNAZ, the LTV’s are subject to the limits
                  below, resulting in a higher average protective equity cushion
                  for our Investors. The LTV ratio is determined by dividing the
                  total encumbrance (Loan) by the value of the property. The
                  aggregate principal amounts of the notes or interests sold,
                  including the balance of any senior encumbrances, are subject
                  to maximum loan to value percentages. The percentages are
                  based on the current market value of the property as
                  determined by the broker or appraiser as required by Section
                  10232.6. The maximum loan-to-value (LTV) percentages are:
                  Single-family, owner-occupied – 80% Single-family, not
                  owner-occupied – 75% Commercial and income-producing
                  properties – 65% Single-family residentially zoned lot or
                  parcel which as installed offsite improvements including
                  drainage, gutters, sidewalks, paved roads, and utilities as
                  required – 65% Land that has been zoned (and, if required,
                  approved for subdivision as) commercial or residential
                  development – 50% Other real property – 35% The percentages
                  above can be exceeded when and to the extent that the broker
                  determines that exceeding the percentages is reasonable and
                  prudent considering all relevant factors pertaining to the
                  property; however, in no event can the aggregate principal
                  amounts of the notes or interests sold, including any senior
                  encumbrances, exceed 80% of the current market value of
                  improved real property or 50% of the current market value of
                  unimproved real property
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Who will be calling the shots?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We are here to help. However, at MNAZ, sponsors are in the
                  driver’s seat and set the Trust Deed terms, fees, minimum
                  investment amounts, funding goal, closing timeline, etc. We
                  give you total control and flexibility to manage your capital
                  raise from start to finish and leverage our technology to make
                  the process efficient.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What happens if a there is a default?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Sponsor will work with the investors on a case by case
                  basis in the event of a Default.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Do I need a lawyer?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Retaining legal counsel is at the discretion of investors and
                  Sponsors.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Does MNAZ accept funds from Self-Directed IRA Accounts
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, MNAZ has worked with many Self Directed IRA companies to
                  fund loans. Please realize that it typically takes 3-5 days to
                  obtain funding from an IRA company. Please make sure the
                  estimated closing date in the Trust Deed listing is at least a
                  week away from the current date when you want to use your IRA.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-col items-center justify-center py-[2rem] mx-auto gap-[1rem]">
          <h1 className="text-[28px] font-[600] opacity-70">
            Investor Questions
          </h1>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  How do I know the property values are accurate?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sponsors provide valuations based on independent assessments.
                  The realistic market value of the property is determined by an
                  appraisal or Broker Price Opinion effort that compares the
                  subject property to other similar properties in the same
                  community. Sponsors work with specialized teams which in many
                  cases includes a qualified real estate appraiser who will look
                  at recent sale prices of comparable properties, and make
                  adjustments to the value of the subject property based on
                  factors such as size, location and physical condition. MNAZ
                  Sponsors, depending on the property, leverages Licensed Third
                  Party Appraisers, Broker Price Opinions (BPO’s), Automated
                  Valuation Models (AVM’s) and personal inspections of
                  properties to determine accurate values.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What Fees are Charged?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Investors are not charged any fees at any time! Any fees
                  charged by the sub-servicer (FCI Lender Services) are paid by
                  Mortgage Vintage, Inc. from our servicing spread. This is to
                  ensure that realize a true rate of return.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Will MNAZ spam me?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No. We hate spam just like you do. In the Investor Preferences
                  Section you can establish your preferences to determine the
                  which Trust Deed offerings will send you an email. For
                  instance if you only want to see emails for 1st Trust Deeds,
                  you can select to only see 1st Trust Deed emails/offerings. We
                  will, of course, continue sending you emails for which you
                  specifically sign up, as required by law (e.g. changes to our
                  terms of use), or as necessary for doing what we are here to
                  do (i.e. provide you our services). In short: we won’t spam
                  you and we only want to send you emails on deals you are
                  interested in.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Is my account information confidential?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. To learn more about how we treat and protect your
                  information, you should take a look at our privacy policy.
                  Also, keep in mind that MNAZ does not see, record, or have
                  access to any information that you provide to third party
                  service providers, including your bank account information,
                  proof of accreditation status, and Trust Deed subscription
                  information. All we can see and capture is the account
                  information on your MNAZ profile and whether or not an action
                  (e.g. pledge, follow, etc.) has been taken.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Does MNAZ make investment recommendations or provide advice
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  MNAZ does not and will not make any investment recommendations
                  or provide legal, tax, or financial advice. Before committing
                  to any Trust Deed, investors should talk to their own advisors
                  and conduct their own due diligence to ensure that the
                  investment meets their criteria and objectives.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What is the minimum investment amount for Trust Deeds listed
                  on MNAZ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is set by the Trust Deed Sponsor. Investment minimums
                  will usually start at $25,000.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>When I invest, what do I own?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When you purchase a whole or fractional interest in a Trust
                  Deed, you own a beneficial interest in a Trust Deed that is
                  created specifically to invest in the asset that is being
                  funded. Your collateral is the Real Estate! Simple. The Trust
                  Deed sponsor will describe the investment through the CTD
                  listing on a Trust Deed-by-Trust Deed basis, but generally it
                  will be a a debt investment in the real estate asset itself.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What voting rights will I have?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In the world of finance, these are called “passive”
                  investments for a reason: your voting rights are very limited
                  and you will generally have no say in the decision making of
                  the investment vehicle (the entity created to invest in the
                  asset) or the real estate asset.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I sell my investment?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The nature of these investments is generally “buy and hold,”
                  which means you should plan to hold on your investment through
                  its lifespan. However, should you need to sell either your
                  whole loan or a fractional interest, MNAZ, can list and sell
                  this Trust Deed for you on the marketplace for a fee.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What are the tax implications of my investment?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We cannot give you tax advice and recommend you talk to a pro
                  about investing with MNAZ. What we can tell you is this: the
                  investments listed on our website are generally in so-called
                  “pass-through” entities for tax purposes. This means that
                  investors will be responsible for paying taxes on the income
                  of the investment vehicle. After the end of each year,
                  investors will be sent a K-1 form so they can add this
                  information to their tax returns.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  How does MNAZ screen Trust Deed sponsors?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  MNAZ has a two-step process to onboard Trust Deed sponsors on
                  our site. First, we will actually meet the Trust Deed sponsor
                  (in person, if possible) and chat about his experience,
                  qualifications, background, and objectives. If we think a
                  Trust Deed sponsor fits the bill, we will let it list a Trust
                  Deed. Once a Trust Deed is scheduled to close, we retain a
                  third party to run a background check on the Trust Deed
                  sponsor and its principals.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Does MNAZ vet Trust Deeds?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  MNAZ is a disintermediated (i.e. direct) investment platform.
                  This means investors and sponsors get to skip traditional
                  industry middlemen and save time and money in the process.
                  However, this also means investors must conduct their own due
                  diligence and ensure that the investment meets their
                  objectives. We also encourage investors (especially those
                  unfamiliar with passive real estate investments of this kind)
                  to retain their own advisors to assist them in this process.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  After I invest, will I have an obligation to put in more
                  money?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Generally, no, but this will depend on the Trust Deed terms,
                  which you should carefully review before investing. You should
                  note that even when investors are not obligated to make
                  additional contributions, when there is a shortfall, new or
                  existing investors could provide additional capital. If this
                  is the case, the non-contributing existing investors would be
                  diluted, thereby getting the proverbial “smaller piece of the
                  pie.”
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Are direct real estate investments for me?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We do not make investment recommendations. You should make up
                  your own mind about the Trust Deeds listed on our site, based
                  on your investment objectives and criteria. Listed Trust Deeds
                  involve risks. If you do not have sufficient experience to
                  evaluate the investments listed on our site, you should talk
                  to an investment advisor, lawyer, accountant, psychiatrist, or
                  other professional. With these cautionary statements in mind,
                  we are very bullish on Trust Deeds being a part of any
                  balanced investment portfolio. Trust Deeds provide a current
                  income high yield return that is secured by Real Estate. The
                  investment process is simple and transparent. We find the loan
                  opportunity and we find the lender and we put the two parties
                  together over the internet. Only one hand in the cookie jar
                  makes for an efficient process with low fees to the borrower
                  and high yields to our investors.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What’s the difference between the direct investments listed on
                  MNAZ, a REIT, and real estate “crowdfunding” sites?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Most REITs will have a discretionary component and invest in
                  multiple assets. At MNAZ, all investments are single asset and
                  single purpose: you decide how your money gets allocated. In
                  addition, at MNAZ, you get to skip the REIT itself and invest
                  directly with the Trust Deed sponsor. This saves a significant
                  layer of fees and expenses. There are also many “crowdfunding”
                  companies out there. These companies have replaced traditional
                  intermediaries (REIT, etc.) with themselves and built online
                  portals to obtain funding. In essence, they are perpetuating
                  the old model of financial intermediation. This may be great
                  for those who don’t mind paying significant fees and expenses
                  to a middleman to do their homework. However, at MNAZ, we
                  decided to forgo the old model altogether and give investors a
                  chance to deal directly with the Trust Deed sponsor. You are
                  always free to retain your own advisor. But now this is your
                  choice, rather than ours. Please keep in mind what
                  “Collateral” you are receiving for your investment. MNAZ
                  provides the real estate as the Collateral. Other Crowdfunding
                  structures offer a “Borrower Dependent Note” structure which
                  does not provide the Real Estate as the Collateral for your
                  invested funds.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Where is my money?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It’s simple: when a Trust Deed is ready to fund, you will
                  initiate a wire transfer to the Escrow company handling the
                  real estate purchase or refinance transaction. Likewise, when
                  a Trust Deed sponsor is ready to distribute funds to
                  investors, they will initiate a direct deposit directly to
                  your account. MNAZ does not have a Trust Account and does not
                  see your account information and cannot access or control your
                  money.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Why would someone pay over 10% for a mortgage loan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The typical borrower for these loans is a real estate investor
                  requiring a bridge loan to help them acquire or refinance an
                  investment. These investors are attempting to quickly take
                  advantage of an opportunity and don’t have the time or can’t
                  qualify for a conventional loan. Sometimes a borrower is
                  self-employed and doesn’t have qualifying income. Other times
                  a borrower is experiencing a life event; divorce, loss of job,
                  illness, or death of a family member. These events cause a
                  need for non-traditional financing, and due to the current
                  credit crisis, private money becomes their only option.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What are the basic steps Sponsors use to make a loan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The basics of trust deed investments are relatively easy to
                  understand: Establish the value of the property being provided
                  as collateral Evaluate the amount of the loan request Include
                  any loans senior to the loan you are being asked to make
                  Determine the loan-to-value Determine the Net Equity Carefully
                  evaluate the borrower’s track record and ability to repay the
                  debt Perform Due Diligence on the property, borrower and loan
                  application Make funding decision Originate Loan Service the
                  loan and make payments to the Investor
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What about the new regulations regarding a borrower’s ability
                  to repay the Loan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In addition to the detailed review of the underlying
                  collateral to form an accurate market valuation of the
                  property being secured, MNAZ Sponsors will be using standard
                  credit underwriting procedures in determining a borrower’s
                  ability to repay the loan. A typical loan package will include
                  a loan application, credit report, preliminary title report
                  and income/asset verification and appraisal. Underwriting
                  processes may include the review of the borrower’s credit
                  report, employment history, income history, exit strategy and
                  personal reserves to determine the creditworthiness of the
                  applicant.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What if MNAZ blows up?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ouch! That would suck. While we certainly are planning on
                  being here for the long haul, we can’t deny this could happen.
                  All of the Trust Deeds listed on our site are available as
                  fractional interest investments that are operated by the Trust
                  Deed sponsor. MNAZ’s existence (or non-existence) will not
                  affect your investment. The Trust Deeds purchased on MNAZ are
                  sub-serviced by FCI Lender Services, Inc. in Anaheim Hills,
                  CA. FCI is the largest servicer of private money loans in the
                  USA with over $7 Billion in their portfolio. FCI will continue
                  to collect payments from the borrower and distribute payments
                  to the lenders with or without MNAZ.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Do you have your own money invested in these Trust Deed
                  opportunities?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, many times I invest myself. I love the cash flow yield.
                  No Wall Street shenanigans. No waiting for a pot of gold at
                  the end of a rainbow (investment horizon). The yield comes
                  straight to my checking account every month. The cash comes in
                  like a wave over the bow of a boat. I get soaked! At any given
                  time, I own over 30-50 Trust Deeds or fractions thereof in my
                  LLC and or Self Directed IRA. Although I don’t invest in every
                  Trust Deed opportunity that we offer, I do underwrite the file
                  to the point where I would invest in the deal if I needed to.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Who becomes the administrator if you go out of business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I am not going out of business, but again, you are on the Deed
                  of Trust and FCI is the sub servicer.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I delete my pledge on an existing TD Offering if I see a
                  newly posted Trust Deed that I like better?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Generally, after your pledge has been in CTD for 48 hours or
                  more, we consider your pledge to be a commitment. aka, we will
                  be counting on you to fund the Trust Deed you have pledged for
                  on the estimated funding date.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion sx={{ backgroundColor: "lightgray" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I change the amount on one of my existing investments?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, check this video for instructions on how to edit your
                  current investment amount.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="bg-blueColor py-[3rem] flex flex-col sm:flex-row gap-[1rem] justify-around items-center">
          <h1 className="text-[16px] font-[400] text-primaryColor">
            We're here to help you Earn Money!
          </h1>
          <Link href="/contact">
            <button className="btn uppercase">contact us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Sell;
