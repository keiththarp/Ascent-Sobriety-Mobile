import { ApiProperty } from '@nestjs/swagger';
export class CreateQuoteDTO {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    quote: string;

    @ApiProperty()
    author: string;
}