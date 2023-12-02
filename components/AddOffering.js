import { useState } from "react";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import axios from "axios";

function AddOffering() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageFile, setImageFile] = useState(null);
  let num = 10;
  const [formData, setFormData] = useState({
    id: num++,
    info: "",
    address: "",
    dealType: "",
    investorYield: "",
    fundingGoal: "",
    estimatedFundingDate: "",
    county: "",
    city: "",
    lienPosition: "",
    propertyType: "",
    pledged: "",
    minInvestment: "",
    eligible: "",
    managementDesc: "",
    financialDesc: "",
    PropertyHighlightsDesc: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImageFile(file);

    try {
      if (!imageFile) return;
      const formData = new FormData();
      formData.append("myImage", imageFile);
      const { data } = await axios.post("/api/upload", formData);
      console.log("Data", data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: file.name,
      }));
    } catch (error) {
      console.log("Error", error.response?.data);
    }

    // try {
    //   const formData = new FormData();
    //   formData.append('image', file);

    //   const response = await axios.post('/api/upload', formData);

    //   if (response.data && response.data.imagePath) {

    //   }
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await handleImageUpload(imageFiles);

    // if(response){
    try {
      const response = await axios.post(
        "http://localhost:3001/offering/add",
        formData,
        {
          headers: {
            token:
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null,
          },
        }
      );

      if (response.data && response.data.offering) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "New offering added successfully!",
        });

        setFormData({});
        handleClose();
      } else {
        console.log("Unexpected response format:", response.data);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("Error adding new offering:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred.",
      });
    }
    // }
    // else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'Error while loading file!!.',
    //   });
    // }
  };

  // console.log(imageFiles);

  return (
    <div className="container p-[10px]">
      <div className="relative">
        <button className="btn" onClick={handleOpen}>
          Add Offering
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="container"
        >
          <div className="absolute top-1/2 mt-[40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[95%] md:w-[90%] overflow-y-scroll bg-primaryColor shadow-xl p-4 rounded-md">
            <form className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[1rem]">
                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Deal Type</label>
                  <input
                    type="text"
                    name="dealType"
                    required
                    value={formData.dealType}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Investor Yield
                  </label>
                  <input
                    type="text"
                    name="investorYield"
                    required
                    value={formData.investorYield}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Funding Goal</label>
                  <input
                    type="text"
                    name="fundingGoal"
                    required
                    value={formData.fundingGoal}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Estimated Funding Date
                  </label>
                  <input
                    type="date"
                    name="estimatedFundingDate"
                    required
                    value={formData.estimatedFundingDate}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">County</label>
                  <input
                    type="text"
                    name="county"
                    required
                    value={formData.county}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Lien Position
                  </label>
                  <input
                    type="text"
                    name="lienPosition"
                    required
                    value={formData.lienPosition}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Property Type
                  </label>
                  <input
                    type="text"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Description</label>
                  <input
                    type="text"
                    name="info"
                    required
                    value={formData.info}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Min Investment
                  </label>
                  <input
                    type="text"
                    name="minInvestment"
                    required
                    value={formData.minInvestment}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Eligiblilty</label>
                  <input
                    type="text"
                    name="eligible"
                    required
                    value={formData.eligible}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                            
                </div>
                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Overview Description
                  </label>
                  <textarea
                    name="overviewDesc"
                    required
                    value={formData.overviewDesc}
                    onChange={handleChange}
                    rows="4"
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  ></textarea>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Management Description
                  </label>
                  <textarea
                    name="managementDesc"
                    required
                    value={formData.managementDesc}
                    onChange={handleChange}
                    rows="4"
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  ></textarea>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Financial Description
                  </label>
                  <textarea
                    name="financialDesc"
                    required
                    value={formData.financialDesc}
                    onChange={handleChange}
                    rows="4"
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  ></textarea>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">
                    Property Highlights Description
                  </label>
                  <textarea
                    name="PropertyHighlightsDesc"
                    required
                    value={formData.PropertyHighlightsDesc}
                    onChange={handleChange}
                    rows="4"
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  ></textarea>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Pledged</label>
                  <input
                    type="text"
                    name="pledged"
                    required
                    value={formData.pledged}
                    onChange={handleChange}
                    className="outline-none border-[2px] border-grayColor border-opacity-70 p-2 rounded-sm"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[18px] font-[500]">Upload Image</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    className="border border-gray-300 p-2 mb-4 w-full"
                  />
                </div>
              </div>

              <div className="flex gap-[2rem]">
                <button onClick={handleClose} className="btn mt-[1rem]">
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn mt-[1rem]"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AddOffering;
