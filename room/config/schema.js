import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('user').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl').notNull(),
    credits:integer('creits').default(16)
}) 