import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    try {
        //hacer un update por un campo que sea único, siempre debe ser único en update  

        /* const result = await prisma.user.update({
            where:{
                id: 1
            },
            data:{
                lastname: "Godofredo"
            }
        })*/
        
        //hacer un update a varios campos devuelve un count
        const result = await prisma.user.updateMany({
            where:{
                name: "Soy"
            },
            data: {
                lastname: "Nuevo"
            }
        })
        console.log("Usuarios actualizados,",result);
    } catch (error) {
        console.log("Hubo un error,",error.meta.cause);
    }

}

main()