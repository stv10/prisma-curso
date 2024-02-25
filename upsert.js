import {PrismaClient} from '@prisma/client'

const db = new PrismaClient();

async function main() {
    // sirve para buscar dentro de la base de datos, realiza un update si lo encuentra y sino inserta el objeto
    try {
        const result = await db.user.upsert({
            where:{
                email: "none@gmail.com"
            },
            create:{
                name: "Jhonn",
                lastname: "Doe",
                email: "doe@gmail.com"
            },
            update:{
                name: "FoundedName"
            }
        })
     
        console.log("Upsert succcesfully done,",result);
    } catch (error) {
        console.log(error);
    }
};

main();