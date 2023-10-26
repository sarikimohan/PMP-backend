import { PutUserDto } from './putUserDto.js';

export interface PatchUserDto extends Partial<PutUserDto> {}