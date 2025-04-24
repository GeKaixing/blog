## Prisma 常见操作命令

| 操作                         | 命令                                                       | 说明                                                    |
|------------------------------|------------------------------------------------------------|---------------------------------------------------------|
| **生成迁移文件并应用数据库更改**   | `npx prisma migrate dev --name <migration-name>`          | 生成并应用迁移，同时更新 Prisma Client。              |
| **重新生成 Prisma Client**    | `npx prisma generate`                                      | 仅更新 Prisma Client，适用于修改模型或字段等情况。    |
| **同步数据库与 schema**       | `npx prisma db push`                                       | 将 `schema.prisma` 同步到数据库。避免生成迁移文件。    |
| **同步数据库与 schema**       | `npx prisma db pull`                                       | 将  数据库同步到`schema.prisma`。避免生成迁移文件。    |
| **检查数据库迁移状态**       | `npx prisma migrate status`                                  | 查看当前迁移的状态。                                   |
| **打开 Prisma Studio**       | `npx prisma studio`                                        | 可视化数据库，方便数据操作和查看。                     |
