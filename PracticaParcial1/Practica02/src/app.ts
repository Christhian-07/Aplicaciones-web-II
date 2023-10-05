// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client/edge'

const prisma = new PrismaClient()

async function main() {
  const product = await prisma.product.findMany()
  console.log(product)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// const createUser= async ()=>{
//     const userCreated= await prisma.userModel.create({
//         data:{
//             email:"joancemac9@gmail.com",
//             name:"Joance Mac",
//             options:{
//                 create:{
//                     title:"prueba",
//                     active:true
//                 }
//             }
//         }
//     });
    
//     console.log(userCreated)
//     // const userCreated= await prisma.userModel.create({
//     //     data:{
//     //         email:"joancemac3@gmail.com",
//     //         name:"Joance Mac",
//     //     }
//     // })
//     // console.log(userCreated)
//     // const optionCreated= await prisma.optionsModel.create({
//     //     data:{
//     //         title:"prueba",
//     //         active:true,
//     //         userId:userCreated.id            
//     //     }
//     // })
// }

// const queryUser= async ()=>{
//     const user= await prisma.userModel.findMany({
//         include:{
//             options:true
//         }
//         , where:{
//             id:1
//         }
//     })
//     console.log(user)
// }

// const updateUser= async ()=>{
//     const user= await prisma.userModel.update({
//         data:{
//             email:"joancemac777@gmail.com"
//         },
//         where:{
//             id:1
//         }
//     })
// }

// const deleteUser= async ()=>{
//     const user= await prisma.userModel.delete({
//         where:{
//             id:1
//         }
//     })
// }

// (async ()=>{
//     // await createUser()
//     await queryUser()

// })()
