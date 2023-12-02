const Offering = require('../models/paidOfferingModel');

const getAllPaidOfferings = async (req, res) => {
  try {
    const offerings = await Offering.find();
    res.json(offerings);
  } catch (error) {
    console.error('Error getting offerings:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPaidOfferingById = async (req, res) => {
  const offeringId = req.params.id;
  try {
    const offering = await Offering.findOne({ id: offeringId });
    if (offering) {
      res.json(offering);
    } else {
      res.status(404).json({ message: 'Offering not found' });
    }
  } catch (error) {
    console.error('Error getting offering by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const addNewPaidOffering = async (req, res) => {
  const {
    id,
    image,
    info,
    address,
    dealType,
    investorYield,
    fundingGoal,
    estimatedFundingDate,
    county,
    city,
    lienPosition,
    propertyType,
    pledged,
    funded,
    paidOff,
    minInvestment,
    eligible,
    overviewList,
    overviewDesc,
    managementDesc,
    financialDesc,
    PropertyHighlightsDesc,
    photos,
    investors,
  } = req.body;

  if (!id || !image || !info || !address || !investorYield || !fundingGoal || !pledged || !minInvestment || !funded || !paidOff) {
    res.status(400).json({ message: 'Missing required fields!!' });
    return;
  }

  try {
    const newOffering = await Offering.create({
      id,
      image,
      info,
      address,
      dealType,
      investorYield,
      fundingGoal,
      estimatedFundingDate,
      county,
      city,
      lienPosition,
      propertyType,
      pledged,
      funded,
      paidOff,
      minInvestment,
      eligible,
      overviewList,
      overviewDesc,
      managementDesc,
      financialDesc,
      PropertyHighlightsDesc,
      photos,
      investors,
    });

    if (!newOffering) {
      res.status(400).json({ message: 'Failed to add the new offering details!!!' });
    } else {
      res.status(200).json({ message: 'Successfully added the new offering details.', offering: newOffering });
    }
  } catch (error) {
    console.error('Error adding new offering:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editPaidOfferingById = async (req, res) => {
  const offeringId = req.params.id;
  const {
    id,
    image,
    info,
    address,
    dealType,
    investorYield,
    fundingGoal,
    estimatedFundingDate,
    county,
    city,
    lienPosition,
    propertyType,
    pledged,
    funded,
    paidOff,
    minInvestment,
    eligible,
    overviewList,
    overviewDesc,
    managementDesc,
    financialDesc,
    PropertyHighlightsDesc,
    photos,
    investors,
  } = req.body;

  if (!id || !image || !info || !address || !investorYield || !fundingGoal || !pledged || !minInvestment || !funded || !paidOff) {
    res.status(400).json({ message: 'Missing required fields!!' });
    return;
  }

  try {
    const updatedOffering = await Offering.findOneAndUpdate(
      { id: offeringId },
      {
        id,
        image,
        info,
        address,
        dealType,
        investorYield,
        fundingGoal,
        estimatedFundingDate,
        county,
        city,
        lienPosition,
        propertyType,
        pledged,
        funded,
        paidOff,
        minInvestment,
        eligible,
        overviewList,
        overviewDesc,
        managementDesc,
        financialDesc,
        PropertyHighlightsDesc,
        photos,
        investors,
      },
      { new: true }
    );

    if (!updatedOffering) {
      res.status(404).json({ message: 'Offering not found' });
    } else {
      res.status(200).json({ message: 'Successfully updated the offering details.', offering: updatedOffering });
    }
  } catch (error) {
    console.error('Error updating offering by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deletePaidOfferingById = async (req, res) => {
  const offeringId = req.params.id;
  try {
    const deletedOffering = await Offering.findOneAndDelete({ id: offeringId });

    if (!deletedOffering) {
      res.status(404).json({ message: 'Offering not found' });
    } else {
      res.status(200).json({ message: 'Successfully deleted the offering.', offering: deletedOffering });
    }
  } catch (error) {
    console.error('Error deleting offering by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPaidOfferings,
  getPaidOfferingById,
  addNewPaidOffering,
  editPaidOfferingById,
  deletePaidOfferingById
};
// {
//     id: 1,
//     image: "/images/1.jpg",
//     info: "Updated 11/02/23: Higher Rate: $125,000 2nd TD @ 13.50%, SFR, 53.75% CLTV, 47.40% Net CLTV, Cash-Out, OO, 24 Month Term, 6 Mos. Guar. Int., 9 Mos. Prepaid Int., $62,500 Min. Inv., Woodland Hills, Los ...",
//     address: "Woodland Hills CA 91364",
//     dealType: "Cash Out",
//     investorYield: "13.00",
//     fundingGoal: "558,000",
//     estimatedFundingDate: "08-22-2023",
//     county: "Orange County",
//     city: "Santa Ana",
//     lienPosition: "2nd",
//     propertyType: "Single Family Res",
//     pledged: "100",
//     funded: "100",
//     paidOff: "Mar 2, 2023",
//     minInvestment: "44,500",
//     eligible: "Not defined",
//     overviewList: [
//       "Loan Amount Lowered to $890,000",
//       "CLTV Lowered to 51.78%",
//       "Investor Rate Increased to 15.50%",
//       "FICO Score Increased to 650",
//     ],
//     overviewDesc:
//       "Successful real estate investor and business owner is seeking a $890,000 2nd TD business purpose loan on this SFR investment rental property (AirBnB/VRBO) in Hollywood Hills, Los Angeles, CA. The purpose of this loan is to pay off an existing current and in good standing $330,000 2nd TD and the balance of funds will be used for minor upgrades to borrower’s three luxury SFR AirBnB/VRBO real estate assets as well as marketing for the business and cash on hand for a potential purchase of a 4th luxury rental. The borrower's 1st TD is with Shellpoint (NewRez) which is current, has a principal balance of $2,372,000, 4.50% fixed rate, $13,151.213/month payment (PITI) and matures June 2051. The exit strategy from our loan is a conventional consolidated refinance which is already lined up. The subject property is a modern contemporary, 5,055 SF, 4-story, Single Family Residence located in the upscale Sunset Plaza area of the Hollywood Hills. The home consists of 16 total rooms including 6 bedrooms and 8.5 bathrooms. Entrance from Mulholland Drive is located on the upper floor which consists of folding glass doors that open onto a balcony terrace with beautiful canyon views. This top floor has a full kitchen, formal dining room, living room and a half bathroom. The remaining 6 bedrooms and 8 bathrooms are split up among the two mid-levels. The second level (going down) features a full bar, media room and fully stocked second kitchen. The third level consists of a library, game room, pool table, laundry room, yoga studio, steam shower and dry sauna. The bottom level has the backyard, sun deck, patio with BBQ, fire fit and pool with waterfall. The property is located on a private gated driveway and has an attached 3-car garage. The borrower is the CEO of Luxury Mansion Rentals and including this one, she owns three short-term rentals. This property rents for about $1,690/night with a 3-night minimum booking. Over the past 12 months, the three rental properties have a combined average income of $233,000/month. In the past 6 months, that average income is $259,000/month. This loan has a 12-month term with 51.78% CLTV, 51.18% Net CLTV on a recent BPO value of $6,300,000 with 12 months Guaranteed Interest and 3 months Prepaid Interest, yielding a 15.50% annualized return. Minimum investment is $44,500 or 5.00%. What we like about this Trust Deed opportunity: Successful real estate investor and business owner Beautiful and exclusive Hollywood Hills location Gross Protective Equity of $3,038,000 51.178% CLTV, 51.18% Net CLTV 15.50% Lender Rate 3 months Prepaid Interest 12 months Guaranteed Interest Possible concerns: Borrower would like to close quickly.",
//     managementDesc:
//       "President and Founder, Mortgage Vintage, Inc. and CrowdTrustDeedMortgage Vintage, Inc. is a fast and professional direct lender specializing in bridge loans for real estate investors and business purpose borrowers looking to capitalize on market opportunities. Mortgage Vintage, Inc. connects people who want to invest money secured by Real Estate with real estate investors and business professionals who want to borrow money. Specifically, we’re a Hard Money Lender placing private investment capital into well-secured and well-underwritten Trust Deed Investments. Our mission is to provide the highest quality Trust Deed Investment opportunities with first class service, communication and transparency. Mortgage Vintage, Inc. sells their Trust Deeds on the CrowdTrustDeed platform. CrowdTrustDeed offers individual and fractional high-yield Trust Deed Investments throughout California. Investors looking to diversify their investment portfolio can achieve 8% - 12% current income returns through these real estate-secured investments.",
//     financialDesc:
//       "Offering Type : Debt Investor Yield: 15.50% Minimum Raise Amount: $890,000 Minimum Investment Amount: $44,500 Loan amount ($): $890,000 Lien position: 2 TD Borrower Credit Score: 650.0 LTV/CLTV: 51.78% Deal Type: Cash-Out Refinance Loan Term Length: 12 Property Condition: No Rehab Regulation Type: Corp Code 25102F IRA Eligible: Not defined Loan Type: Business Purpose Cash-Out Refinance Property Type: Single Family Residence BPO Valuation: $6,300,000 Existing 1st TD: $2,372,000 New 2nd TD Loan Amount: $890,000 Combined Loan Amount: $3,262,000 Lien Position: 2nd CLTV: 51.78% Net CLTV: 51.18% Occupancy: Non-Owner Occupied Rate to Investor: 15.50% Fractional Interest (20): $44,500.00 Monthly Payment to Investor: $11,495.83 Amort./Term: Interest Only / 12 mos. Gross Protected Equity: $3,038,000 Guaranteed Interest: 12 Months Prepaid Interest: 3 Months Credit Score: 650 Exit Strategy: Refinance",
//     PropertyHighlightsDesc:
//       "Property Type: Single Family Residence APN: 5572-001-003 BPO Value: $6,300,000 Property Living SF: 5,055 BPO Value /SF: $1,246.29 Bedrooms: 6 Bathrooms: 8.5 Year Built: 1989 Exterior: Stucco County: Los Angeles Occupancy: Non Owner Occupied Zoning: Residential Single Family",
//     photos: [
//       "/images/photo1.jpg",
//       "/images/photo2.jpg",
//       "/images/photo3.jpg",
//       "/images/photo4.jpg",
//       "/images/photo5.jpg",
//       "/images/photo6.jpg",
//       "/images/photo7.jpg",
//       "/images/photo8.jpg",
//       "/images/photo9.jpg",
//       "/images/photo10.jpg",
//       "/images/photo11.jpg",
//       "/images/photo12.jpg",
//     ],
//   }