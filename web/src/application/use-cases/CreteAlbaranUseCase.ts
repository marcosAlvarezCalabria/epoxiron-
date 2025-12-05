import { DeliveryNote } from "@/domain/entities/DeliveryNote";
import { DeliveryNoteException } from "@/domain/exceptions/DeliveryNoteException";
//import { DeliveryNoteRepository } from "@/infrastructure/repositories/DeliveryNoteRepository";


export interface CreateDeliveryNoteInput {
    customerId: string;
    date: string;

}