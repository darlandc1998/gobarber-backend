import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1616865514477
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Deletar coluna provider
    await queryRunner.dropColumn('appointments', 'provider');

    //Criar uma coluna provider_id
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    //Fazer relacionamento de chave estrangeira
    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  //Sempre deve ser o contrário do método UP
  public async down(queryRunner: QueryRunner): Promise<void> {
    //Deletar a chave estrangeira
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');
    //Deletar a coluna provider_id
    await queryRunner.dropColumn('appointments', 'provider_id');
    //Criar a coluna provider
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}
