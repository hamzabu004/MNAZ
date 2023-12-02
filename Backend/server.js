const express = require('express');
const userRouter = require('./routes/userRoute');
const contactRouter = require('./routes/contactRoute');
const blogRouter = require('./routes/blogRoute');
const offeringRouter = require('./routes/offeringRoute');
const userOfferingRouter = require('./routes/userOfferingRoute');
const paidOfferingRouter = require('./routes/paidOfferingRoute');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ALTAS_URL).then(() => {
  console.log('DB Connected !!!');
}).catch(err => {
  console.log(err);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`App Listening on port ${process.env.PORT}`);
});

app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);
app.use('/offering', offeringRouter);
app.use('/userOffering', userOfferingRouter);
app.use('/paidOffering', paidOfferingRouter);