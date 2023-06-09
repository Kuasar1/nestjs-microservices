import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export declare class DatabaseConfigService implements TypeOrmOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
