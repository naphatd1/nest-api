import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: false,
})
export class Customer extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  fullname: string;

  @Column({ defaultValue: false })
  isActive: boolean;
}
