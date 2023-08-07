import { Module } from "@nestjs/common";
import { MySqlConfigService } from "./mysql-config";

@Module({
    providers: [MySqlConfigService],
})
export class MySqlConfigModule {}