import { SetMetadata } from "@nestjs/common";

export const TYPEROM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function CustomRepository(entity: Function): ClassDecorator {
    return SetMetadata(TYPEROM_EX_CUSTOM_REPOSITORY, entity);
}