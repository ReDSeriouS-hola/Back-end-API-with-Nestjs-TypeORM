import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeOrm";

@Entity()
export class schema{
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: {type:number, require:true}
    @Column()
    fullname: {type:string,require:true}
    @Column()
    phone: {type:string,require:true}
    @Column()
    mail: {type:string,require:true}
    @Column()
    age: {type:string,require:true}
    @Column()
    status: {type:string,require:true}

}