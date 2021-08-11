// import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';
// import { SessionEntity } from './TypeormStore';

// @Entity({ name: 'Sessions' })
// export class Session extends BaseEntity implements SessionEntity {
//   @PrimaryColumn()
//   public sid!: string;

//   @Column()
//   @Index('IDX_expires_at')
//   public expiresAt!: number;

//   @Column({ type: 'longtext' })
//   public data!: string;

//   @Column()
//   public ttl!: string;

//   @Column()
//   public userId!: number;

//   @Column()
//   public email!: string;

//   @Column()
//   @Index('IDX_expires')
//   public expires!: Date;
// }
