
const express = require('express')

let app = express()

const Razorpay = require('razorpay')
const bodyparser = require('body-parser');

let order_id_variable


app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static(__dirname+'/public'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/index', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about.ejs')
})

app.get('/adoption', (req, res)=>{
    res.render('adoption.ejs')
})

app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})

app.get('/dogDetails', (req, res)=>{
    res.render('dogDetails.ejs')
})

app.get('/service', (req, res)=>{
    res.render('service.ejs')
})

app.get('/volunteer', (req, res)=>{
    res.render('volunteers.ejs')
})

app.get('/donor', (req, res)=>{
    res.render('donor.ejs')
})

app.get('/donation', (req, res)=>{
    res.render('donation.ejs')
})

app.get('/login-form-08/index', (req, res)=>{
    res.render('./login-form-08/index.ejs')
})



app.post('/login-form-08/index', (req, res)=>{
    res.render('dogDetails.ejs')
})

// app.post('/login-form-08/index', (req, res) => {
//     const user = {
//         username: 'admin',
//         password: 'admin123'
//     };

//     sign({ user: user }, 'vidhan1212', (err, token) => {
//         res.json({
//             token,
//         });
//     });
// });

// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers['authorization']
//     if (typeof bearerHeader !== 'undefined') {
//         const bearerToken = bearerHeader.split(' ')[1]
//         req.token = bearerToken
//         next()
//     } else {
//         res.sendStatus(403) //Forbidden
//     }
// }


//payment api

app.use (require("body-parser").json());


const instance = new Razorpay({
    key_id: 'rzp_test_7GDH1kgktHWs9c',
    key_secret: 'CfASZiQhFI3OZJtKY9axL90r',
});


// app.get('/d', (req, res)=>{
//     res.render('donor.ejs')
// })


app.post('/order', (req, res)=>{
    let options = {
        amount: 500 * 100,  // amount in the smallest currency unit
        currency: "INR",
    };

    instance.orders.create(options, function(err, order) {
        order_id_variable = order.id
        console.log(order);
        res.json(order);
    });

})



app.post('/paymentSuccess', (req, res) => {
    const order_id = req.body.razorpay_order_id
    const payment_id = req.body.razorpay_payment_id
    const signature = req.body.razorpay_signature

    res.render('donation.ejs', {order_id: order_id, payment_id: payment_id, signature: signature});
})


app.listen(3000)