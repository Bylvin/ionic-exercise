import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const TABLE_CONTACT = 'contact';

@Entity(TABLE_CONTACT)
export class Contact
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
