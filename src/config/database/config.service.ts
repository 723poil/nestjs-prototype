import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MySqlConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mysql',
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            port: +this.configService.get<number>('DB_PORT'),
            host: this.configService.get<string>('DB_HOST'),
            database: this.configService.get<string>('DB_SCHEMA'),
            entities: ['dist/**/**/*.entity{.ts,.js}'],
            synchronize: true,  // 개발 단계에서만 사용 -> 시간 지나면 지워야함
            logging: true,
        }
    }
}