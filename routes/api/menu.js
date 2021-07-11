const express = require('express');
const router = express.Router();
const Menu = require('../../models/Menu');
var bodyParser = require('body-parser');
var fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/menu/' });
const fileUpload = require('express-fileupload');

// Upload Endpoint
router.post('/', (req, res) => {
    console.log(req.body);

  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}../../../public/menu/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    
    const newMenu = new Menu({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        pic: `${file.name}`
    });
    
    const menu = newMenu.save();

    res.json({ fileName: file.name, filePath: `/public/menu/${file.name}` });
  });

});

// @route    POST api/menu
// @desc     Update menu
// @access   Private
router.put('/:id', 
    async(req, res) => {
    
      if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
      }

        const {
            name,
            price,
            type
        } = req.body;

        // const menuFields = {};
        // if (name) menuFields.name = name;
        // if (price) menuFields.price = price;
        // if (type) menuFields.type = type;
        // console.log(req.params.id);
        
        // let menu = await Menu.findOneAndUpdate({ _id: req.params.id }, { $set: menuFields }, { new: true });
        // return res.json(menu);

        const file = req.files.file;
        
        await file.mv(`${__dirname}../../../public/menu/${file.name}`, err => {
            if (err) {
            console.error(err);
            return res.status(500).send(err);
            }
            
            res.json({ fileName: file.name, filePath: `/public/menu/${file.name}` });
        });

        //Build menu object
        const menuFields = {};
        if (name) menuFields.name = name;
        if (price) menuFields.price = price;
        if (type) menuFields.type = type;
        if (file) menuFields.pic = `${file.name}`;
        console.log(menuFields);
            
        let menu = await Menu.findOneAndUpdate({ _id: req.params.id }, { $set: menuFields }, { new: true });
    }
);

// @desc    Show add form
// @route   Get add
router.post('/addmenu', async(req, res) => {
    try {
        console.log(req.body);
        // console.log("dfssdf");
        console.log(req.files);
        // console.log(req.files[0].filename);

    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @desc    Show add form
// @route   Get add
router.get('/add', async(req, res) => {
    try {
        res.render('menu/add', { layout: false });

    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @desc    Process add form
// @route   Render /menu
router.get('/', async(req, res) => {
    try {
        const menu = await Menu.find({type: {'$ne':'' }}).lean().sort({ type: 1, name: 1 });
        //console.log(menu);

        res.render('menu/index', {
            menu,
            layout: false
        });
    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @desc    Process add form
// @route   Render /menu
router.get('/load/:id', async(req, res) => {
    try {
        const menu = await Menu.findOne({_id:req.params.id});
         //const profile = await Profile.findOne({ user: req.params.id }).populate('user', ['name', 'avatar']);

        res.json(menu);
    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @desc    Process add form
// @route   POST /stories
router.get('/list', async(req, res) => {
    try {
        const menu = await Menu.find().sort({ type: 1, name: 1 });
        //console.log(menu);

        res.json(menu);
    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @desc    Process add form
// @route   POST /stories
router.get('/list/:type', async(req, res) => {
    try {
        const menu = await Menu.find({type:req.params.type}).sort({ type: 1, name: 1 });
        //console.log(menu);

        res.json(menu);
    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

// @route    DELETE api/posts/:id
// @desc     Delete Menu
// @access   Private
router.delete('/:id', async(req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);

        if (!menu) {
            return res.status(404).json({ msg: 'Menu not found' });
        }

        await menu.remove();

        res.json({ msg: 'Menu removed' });
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Menu not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;