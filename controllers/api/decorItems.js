const DecorItem = require('../../models/decorItem')

module.exports = {
    index
}

async function index(req, res) {
    const decorItems = await DecorItem.find({}).sort('name').populate('category').exec()
    // re-sort based upon the sortOrder of the populated categories
    decorItems.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
    res.json(decorItems)
}