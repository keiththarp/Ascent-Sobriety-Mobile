import { ApiProperty } from '@nestjs/swagger';
export class CreateResourceDTO {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    introText: string;

    @ApiProperty()
    linkToResource: string;

    @ApiProperty()
    imageLink: string;

    @ApiProperty()
    phoneNumber: number;

    @ApiProperty()
    category: number;
}