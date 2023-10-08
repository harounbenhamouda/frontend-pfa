import { Address } from "./address";
import { Client } from "./Client";
import { Item } from "./item";
import { RequestOrder } from "./requestorder";

export class PurchaseRequest{

client!:Client
    requestOrder!:RequestOrder
     fromAddress!: Address;
     toAddress!: Address;
     items!:Item[]
}