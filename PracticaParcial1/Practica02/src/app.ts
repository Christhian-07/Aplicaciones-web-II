import prisma from './prismaInstance';

const createProducto = async () => {
    const ProductCreated = await prisma.product.create({
        data: {
            NAME: "Dragon ball Z",
            DESCRIPTION: "Publicacion de articulo",
            PRICE: "10.00",
            DATE_DESCRIPTION: "05/09/2023",
            DATE_UPDATE: "05/10/2023",
            SERVICE: true
        }
    })
    console.log(ProductCreated)


    const CategoryCreated = await prisma.category.create({
        data: {
            ID_CAT: ProductCreated.ID_PRODUCT, 
            NAME: "Articulo",
            DESCRIPTION: "Articulo CI",
        }
    })





    const ServiceCreated = await prisma.service.create({
        data: {
            ID_SERVICE: ProductCreated.ID_PRODUCT,
            DATE_START: new Date(),
            DATE_END: new Date(),
        }
    })
}
const queryProducts = async () => {
    const products = await prisma.product.findMany({
        include: {
            category: true,
            services: true
        },
        where: {
            ID_PRODUCT: 1
        }
    })
    console.dir(products, { depth: null })
}


const updateProduct= async ()=>{
    const user= await prisma.product.update({
        data:{
           NAME :"50 zombras de Grace"
        },
        where:{
            ID_PRODUCT:1
        }
    })
}
const deleteProduct= async ()=>{
    const user= await prisma.product.delete({
        where:{
            ID_PRODUCT:4
        }
    })
}
(async () => {
    // await createCategory();
    // await createProduct();
    // await createService();
    // await queryCategories();
    // await queryServices();
    await deleteProduct()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect();
            process.exit(1)
        })
    await prisma.$disconnect();
})();
