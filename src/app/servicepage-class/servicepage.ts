import { Services } from "../services-class/services";

export class Servicepage {
    content: Services[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    first: boolean;
    sort: string;
    numberOfElements: number;
}
