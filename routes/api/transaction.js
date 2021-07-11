const express = require('express');
const router = express.Router();
const Transaction = require('../../models/Transaction');
var bodyParser = require('body-parser');

// @desc    Process add form
// @route   Render /transaction
router.get('/', async(req, res) => {
    try {
        const transaction = await Transaction.find().lean().sort({ date: -1 });
        res.send(transaction);

    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @route    POST api/transaction
// @desc     Create or update transaction
// @access   Private
router.post('/',
    async(req, res) => {
        var user_id = "609cbd0d56dc46efacca7fcb";
        var food = {};
        var total = req.body.total;

        var count = req.body.chk.length;
        //res.send(count.toString());

        transaction = new Transaction({
            user_id,
            food,
            total
        });

        await transaction.save();
        var transaction_id = transaction.id;

        for (var i = 0; i < count; i++) {
            var str = req.body.chk[i]
            var string = str.split("|");

            const menu_id = string[0];
            const name = string[1];
            const price = string[2];
            const amount = string[3];

            console.log(transaction_id);

            const transactionFields = {};
            transactionFields.menu_id = menu_id;
            transactionFields.name = name;
            transactionFields.price = price;
            transactionFields.amount = amount;

            try {
                const transaction = await Transaction.findOne({ _id: transaction_id });
                transaction.menu.unshift(transactionFields);
                await transaction.save();
                console.log(transaction);
            } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
            }

            // if (menu) {
            //     //Update
            //     menu = await Transaction.findOneAndUpdate({ user_id: user_id }, { $set: transactionFields }, { new: true });
            // }

            //return res.json(transaction);
        }

        const print = await Transaction.find({ _id: transaction_id }).lean().sort({ menu: 1 });

        res.render('menu/print', {
            print,
        })

    }, (req, res) => {

    })

module.exports = router;