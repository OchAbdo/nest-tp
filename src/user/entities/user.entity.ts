import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User 
{
    @PrimaryGeneratedColumn()
    id : number ;
    @Column()
    nom : string ;
    @Column()
    prenom : string ;
    @Column()
    email : string ;
    @Column({default: "user"})
    role : string ;

    @CreateDateColumn()
    dateC : Date ;
    @UpdateDateColumn()
    dateU : Date ;
}
