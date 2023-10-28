require('dotenv').config()
require('./config/database')

const Category = require('./models/category')
const DecorItem = require('./models/decorItem')

const seedme = async function () {
    await Category.deleteMany({})
    const categories = await Category.create([
        { name: 'Spring', sortOrder: 1 },
        { name: 'Summer', sortOrder: 2 },
        { name: 'Fall', sortOrder: 3 },
        { name: 'Winter', sortOrder: 4 }
    ])

    await DecorItem.deleteMany({})
    const items = await DecorItem.create([
        { name: 'Floral Vase', image: '/Images/spring-floral-vase.png', description: "Spring decor floral with vase", category: categories[0], price: 80 },
        { name: 'Levender Wreath', image: '/Images/spring-levender-wreath.png', description: " Levender wreath", category: categories[0], price: 100 },
        { name: 'Spring Throw Pillow', image: '/Images/spring-throw-pillow.png', description: "Throw pillow for spring season", category: categories[0], price: 100 },
        { name: 'Floral Wreath', image: '/Images/spring-floral-wreath.png', description: "Beautiful froral wreath", category: categories[0], price: 140 },
        { name: 'Floral Vase', image: '/Images/summer-floral-vase1.png', description: "Floral with vase for summer", category: categories[1], price: 134 },
        { name: 'Lamp', image: '/Images/summer-lamp.png', description: "Beautiful lamp", category: categories[1], price: 150 },
        { name: 'Throw Pillow', image: '/Images/summer-pillow.png', description: "summer linen pillow", category: categories[1], price: 100 },
        { name: 'Lanterns Set', image: '/Images/summer-lanterns.png', description: "lenterns set of two", category: categories[1], price: 140 },
        { name: 'Bowls', image: '/Images/summer-bowls.png', description: "Handcrafted bowls", category: categories[1], price: 90 },
        { name: 'Vases', image: '/Images/summer-vases-l.jpg', description: "Beautiful vases", category: categories[1], price: 90 },
        { name: 'Gallery Frames', image: '/Images/summer-frames.png', description: "Floating wood gallery frames", category: categories[1], price: 200 },
        { name: 'Vase', image: '/Images/fall-vase.png', description: "Fall decor", category: categories[2], price: 160 },
        { name: 'Pumpkin Tabletop', image: '/Images/fall-tabletop-pumpkin.png', description: "Fall pumpkin table top set", category: categories[2], price: 90 },
        { name: 'Pumpkin Decor', image: '/Images/fall-pumpkin.png', description: "Fall pumpkin", category: categories[2], price: 140 },
        { name: 'The Lamp', image: '/Images/fall-lamp.png', description: "beautiful lamp", category: categories[2], price: 125 },
        { name: 'Throw', image: '/Images/fall-faux-fur-throw.png', description: "Faux fur throw pillow", category: categories[2], price: 185 },
        { name: 'Christmas Lentern', image: '/Images/winter-christmas-lentern.png', description: "Christmas decor lentern", category: categories[3], price: 78 },
        { name: 'Lenterns', image: '/Images/winter-christmas-lenterns.png', description: "Beautiful lentern set", category: categories[3], price: 117 },
        { name: 'Christmas Tree', image: '/Images/winter-christmas-tree.png', description: "Christmas tree with decor", category: categories[3], price: 545 },
        { name: 'Cozy Throw', image: '/Images/winter-Faux-Fur-throw.png', description: "Faux fur throw", category: categories[3], price: 190 },
    ])
    console.log(items)
    process.exit()

}
seedme()
