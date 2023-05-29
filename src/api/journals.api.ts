import { StrengthJournalDTO } from "../dto/StrengthJournal.dto";
import { doc, getDocs, collection, addDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';


export const getAllStrengthJournals = async (): Promise<StrengthJournalDTO[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "strength-journals"));
        const journals: StrengthJournalDTO[] = [];
        querySnapshot.forEach((doc) => {
            let journal = doc.data() as StrengthJournalDTO;
            journal.id = doc.id;
            journals.push(journal);
        });
        return journals;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
}

export const getUserStrengthJournals = async (): Promise<StrengthJournalDTO[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "strength-journals"));
        const journals: StrengthJournalDTO[] = [];
        querySnapshot.forEach((doc) => {
            let journal = doc.data() as StrengthJournalDTO;
            journal.id = doc.id;
            // this will need to be changed to a query clause
            if (journal.email === auth.currentUser?.email) {
                journals.push(journal);
            }
        });
        return journals;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
}

export const createStrengthJournalEntry = async (journal: StrengthJournalDTO) => {
    try {
        journal.email = auth.currentUser?.email || '';
        journal.created_at = new Date().toISOString()
        journal.updated_at = new Date().toISOString()
        const result = await addDoc(collection(db, "strength-journals"), journal);
        console.log("Document written with ID: ", result.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const updateStrengthJournal = async (journal: StrengthJournalDTO): Promise<StrengthJournalDTO> => {
    return journal
}

export const deleteStrengthJournal = async (id: string) => {
    try {
        await deleteDoc(doc(db, "strength-journals", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

