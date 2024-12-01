import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false, // NOT NULL
  })
  fullname: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false, // NOT NULL
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false, // NOT NULL
  })
  password: string;
}
