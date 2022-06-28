const express = require('express');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;
const buyTransactionData = []
const allAccounts = []
const arts = []

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(cors({
    origin: "*",
  }));


app.post('/buy', (req, res) => {
    const {
        firstName, 
        middleName,
        lastName,
        emailAddress,
        contactNumber,
        cardNumber,
        cardName,
        expirationDate,
        cvc,
        country,
        province,
        city,
        town,
        street,
        lotNumber,
        zipCode, 
        userId,
        buyId
    } = req.body;

    buyRequest = {
        firstName:  `${ firstName }`,
        middleName:  `${ middleName }`,
        lastName:  `${ lastName }`,
        emailAddress:  `${ emailAddress }`,
        contactNumber:  `${ contactNumber }`,
        cardNumber:  `${ cardNumber }`,
        cardName:  `${ cardName }`,
        expirationDate:  `${ expirationDate }`,
        cvc:  `${ cvc }`,
        country:  `${ country }`,
        province:  `${ province }`,
        city:  `${ city }`,
        town:  `${ town }`,
        street:  `${ street }`,
        lotNumber:  `${ lotNumber}`,
        zipCode:  `${ zipCode }`,
        userId: `${ userId }`,
        buyId: `${ buyId }`,
    }
    res.send(buyRequest);
    buyTransactionData.push(buyRequest);
});

app.get('/buy', (req, res, next) =>  {
    res.status(200).send(buyTransactionData);
});
app.post('/accounts', (req, res) => {
    const { username, password, country, gender, followers, followings, id, image } = req.body;
    accountInfo = {
        username: `${ username }`,
        password: `${ password }`,
        country: `${ country }`,
        gender: `${ gender }`,
        followers: `${ followers }`,
        followings: `${ followings }`,
        id: `${ id }`,
        image: `${ image }`
    }
    res.send(accountInfo);
    allAccounts.push(accountInfo);
});
app.get('/accounts', (req, res, next) =>  {
    res.status(200).send(allAccounts);
});

app.post('/artworks', (req, res) => {
    const { title, price, userId, image, id} = req.body;
    artworkInfo = {
        title: `${ title }`,
        price: `${ price }`,
        userId: `${ userId }`,
        image: `${ image }`,
        id: `${ id }`,
    }
    res.send(artworkInfo);
    arts.push(artworkInfo);
});
app.get('/artworks', (req, res, next) => {
    res.status(200).send(arts);
})

app.listen(
    PORT,
    () => console.log('Api working')
);