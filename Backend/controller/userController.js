const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

let signup = (req,res)=>{
    let { firstName, lastName, email, phoneNumber, password, role } = req.body
    console.log(firstName, lastName, email, phoneNumber, password, role )
    let user = new User({ firstName, lastName, email, phoneNumber, password, role })
    user.save().then((user)=>{
        if(!user){
            res.status(400).json({"messege":"User not created"})
        }else{
            res.status(200).json({"messege":"User created","user":user})
        }
    }).catch(err=>{
        res.status(400).json({"err":err,"messege":"User not created"})
    })
}

let signin = (req,res)=>{
    
    let {email,password} = req.body;
    User.findOne({email:email}).then(founduser=>{
        if(!founduser){
            res.status(404).send({"Messege":"User does not exist"})
        }else{
            if(password=founduser.password){
                let token = jwt.sign({
                    id:founduser._id,
                    role:founduser.role,
                },process.env.SECRET_KEY,{expiresIn:'21h'})
                res.status(200).send({user:founduser,"token":token})}
                else{
                    res.status(400).send({"Messege":"Password not match"})
                }
        }
    }).catch(e=>{
        res.status(500).send({e:e})
    })
}

const editAccountDetailsById = async (req, res) => {
    const {
      accountId,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      role
    } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !password || !role) {
      res.status(400).json({ message: 'Missing required fields!!' });
      return;
    }
  
    try {
      const updatedAccount = await User.findOneAndUpdate(
        { _id: accountId },
        {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role
        },
        { new: true }
      );
  
      if (!updatedAccount) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json({ message: 'Successfully updated the user account details.', user: updatedAccount });
      }
    } catch (error) {
      console.error('Error while updating offering by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const getAccountDetailsById = async (req, res) => {
    const { accountId } = req.body;
    console.log(accountId);
  
    try {
      const user = await User.findById(accountId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error getting offering by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
const { OAuth2Client } = require('google-auth-library');

const GOOGLE_CLIENT_ID = '420357920783-ju2i7n0hhcugisuthoas8h17d4dbm9hr.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const client = new OAuth2Client({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
});

const googleLogin =  async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];
    const userEmail = payload['email'];

    // You can perform further actions like creating a user account or returning user data

    // For demonstration purposes, just send a success response
    res.status(200).json({ success: true, message: 'Google login successful', user: { userId, userEmail } });
  } catch (error) {
    console.error('Error during Google login:', error.message);
    res.status(400).json({ success: false, message: 'Google login failed' });
  }
};



module.exports = {
    signup,
    signin,
    editAccountDetailsById,
    getAccountDetailsById,
    googleLogin
}