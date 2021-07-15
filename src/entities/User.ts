import { Entity, PrimaryKey, Property, wrap } from "@mikro-orm/core"
import { EntityManager, ObjectId } from "@mikro-orm/mongodb"

@Entity()
export class User {
  @PrimaryKey()
  _id!: ObjectId

  @Property()
  name: string = 'John Doe'

  constructor (name: string) {
    this.name = name
  }

  async count () {
    const em = wrap(this, true).__em as EntityManager
    return await em.getRepository(User).count()
  }
}