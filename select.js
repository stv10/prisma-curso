import {PrismaClient} from '@prisma/client'

const db = new PrismaClient();

async function main() {
    // encontrar muchos
    const result = await db.user.findMany();

    // result.map(user => {
    //     console.log(`${user.id} - ${user.email} - ${user.name}`);
    // })

// busqueda filtrada
    const findFirst = await db.user.findFirst({
        where:{
            AND: [
                {id: 1},
                {name: "Santiago"}
            ]
        },
        // especifico los campos que quiero traer y el orden
        select:{
            email: true,
            id: true,
            name:true
        }
    })

    console.log(result);

}


main();