import {PrismaClient} from '@prisma/client'

const db = new PrismaClient();

async function main() {
    //si no se encuentra lanza una excepción, debe buscar por campos únicos
    let result;
    // try {
    //     result = await db.user.delete({
    //         where: {
    //             id: 2
    //         }
    //     })
    //     console.log("Result from the delete", result);
    
    //     const fetchUsers = await db.user.findMany();
    
    //     console.log("Find many",fetchUsers);
        
    // } catch (error) {
    //    console.log("Delete failed,",error.meta.cause); 
    // }


    //si no encuentra objetos el count es 0, no falla
    try {
        const result = await db.user.deleteMany({
            where:{
                name: "Soya"
            }
        })

        console.log("Deleted users,",result);
    } catch (error) {
        console.error("Delete failed,",error.meta.cause);
    }

}

main()