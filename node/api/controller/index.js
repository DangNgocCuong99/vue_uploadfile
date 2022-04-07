const itemModel = require('../model/index')

exports.getItem = async (req, res) => {
    try {
        const 
            activePage = + req.query.activePage,
            limit = 10,
            skip = (activePage - 1) * limit,
            totalrecord = await itemModel.countDocuments(),
            totalPage = Math.ceil(totalrecord / limit),
            listData = await itemModel.find().skip(skip).limit(limit)
            console.log(listData,'sssssssss')
        res.send({
            listData, totalPage, activePage, totalrecord
        })

    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.postItem = async (req, res) => {
    try {
        const textSearch = req.query.textSearch
        const limit = +req.query.limit
        const data = req.body
        await itemModel.create(data)
        const lengthData = await itemModel.countDocuments({name:{ $regex: textSearch, $options: 'i' }})
        const totalPage = Math.ceil(lengthData / limit)
        res.send({data  ,totalPage})

    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.putItem = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        await itemModel.findByIdAndUpdate(id, data)
        res.send({ data })
    } catch (error) {
        res.send({ message: error.message })
    }
}
exports.deleteItem = async (req, res) => {
    try {
        const id = req.query.id
        const limit = +req.query.limit
        const activePage = + req.query.activePage
        const textSearch = req.query.textSearch
        const skip = (activePage - 1) * limit
        await itemModel.findByIdAndDelete(id)
        const totalData = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        const totalItem = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.send({ id,totalData,totalItem})
    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.uploadImg = async (req, res) => {
    try {
        const id = req.params.id
        const file = req.files
        var arr = []
        for (var i = 0; i < file.length; i++) {
            arr.push(`http://localhost:3008/${file[i].originalname}`)
        }
        const arrImg = await itemModel.findByIdAndUpdate(id, { img: arr })
        res.send({ img: arrImg })
    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.createImg = async (req, res) => {
    try {
        console.log(req.files,'ssss')
        const file = req.files
        var arr = []
        for (var i = 0; i < file.length; i++) {
            arr.push(`http://localhost:3008/${file[i].originalname}`)
        }
        const arrImg = await itemModel.create({ img: arr })
        res.send({ img: arrImg })
    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.deleteImg = async (req, res) => {
    try {
        const id = req.params.id
        var arr = []
        for (var i = 0; i < file.length; i++) {
            arr.push(`http://localhost:3008/${file[i].originalname}`)
        }
        const deleteImg = await itemModel.findByIdAndDelete({ id, img: arr })
        res.send({ message: 'da xoa Img' })
    } catch (error) {
        res.send({ message: error.message })
    }
}
