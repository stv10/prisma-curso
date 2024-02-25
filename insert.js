import {PrismaClient} from '@prisma/client'

const db = new PrismaClient();

async function main() {
    // crear datos
    const newUser = await db.user.create({
        data: {
            email: "test2@gmail.com",
            name: "Soy",
            lastname: "Test"
        }
    })

    console.log(newUser);
}


main();