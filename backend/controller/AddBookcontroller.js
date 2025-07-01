const AddBook = require('../models/AddBookmodel');

const AddBooks = async(req, res) =>{
    const {Title, Author, Description, Price, Status} = req.body;
    try{
        const title = await AddBook.findOne({Title});
        if(title){
            return res.status(401).json({message: "Book is already exists"})
        }
        if(Price < 0 ){
            return res.status(401).json({message: "Check your book price"})
        }
        if(Title.length < 3){
            return res.Status(401).json({message: "Title should be have 3 alphabet"})
        }
        const newBook = new AddBook({
            Title,
            Author,
            Description,
            Price,
            Status
        })
        await newBook.save();
        res.status(200).json({message: "Book is added"})
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Something went wrong"})
    }

}


const GetAllBooks = async (req, res) =>{
    try{
        const Books = await AddBook.find();
        res.status(200).json(Books);
    }
    catch(error){
        res.status(400).json({message: "Failed to getting library books"})
    }
}

module.exports = {AddBooks, GetAllBooks};