// import { envs } from './config/plugins/envs.plugin'
import prisma from './prismaInstance';

// definir  llamar na funcion que permita crear los mismo elementos del arreglo desarrollado aplicando el cliente prisma


async function createBus() {
    try {
      const busCreated = await prisma.bus.create({
        data: {
          busNumber: 101,
          brand: 'Mercedes',
          model: 'Sprinter',
          capacity: 30,
        },
      });
    //   console.log('Nuevo autobús creado:', busCreated);
    } catch (error) {
    //   console.error('Error al crear el autobús:', error);
    } finally {
      await prisma.$disconnect(); // Cierra la conexión de Prisma
    }
  }
  
  createBus();

  async function createRoute() {
    
    try {
      const routeCreated = await prisma.route.create({
        data: {
          start: 'Ciudad A',
          destination: 'Ciudad B',
          distance: 150,
          bus: {
            connect: {
              id: 1, // ID del autobús al que deseas conectar la ruta
            },
          },
        },
      });
    //   console.log('Nueva ruta creada:', routeCreated);
    } catch (error) {
    //   console.error('Error al crear la ruta:', error);
    } finally {
      await prisma.$disconnect(); // Cierra la conexión de Prisma
    }
  }
  
  createRoute();




  // crear e invocar una funcion que permita elimar definitivamente un elemento por id en su entidad bus aplicando el cliente prisma
  