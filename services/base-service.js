const fs = require('fs') // ---> Dosya işlemleri
const flatted = require('flatted') // ---> Circuler Structure olduğu için, bu paket onu çözüyor 
// fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects,null,2))
//                                       buraya geliyor

class BaseDataBase{
    constructor(model){
        this.model = model
    }
     save(objects){      
        return this.model.insert(objects)
    }
     load(){
       return this.model.find() // hepsini getiriyor
    }
    async insert(object){
         return await this.model.create(object)
    }
    async removeBy(property,value){
        return this.model.deleteOne({[property]:value})
    }

    async update(id,object){
        return  this.model.findByIdAndUpdate(id,object)
    }

    async find(id){
        return this.model.findById(id) // yanında bookings'leri de getir
    }

    async query(obj){
        return this.model.find(obj)
    }

    async findBy(property,value){
        return this.model.find({[property]: value})
    }

}


module.exports = BaseDataBase