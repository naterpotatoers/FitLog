import { MOCK_JOURNAL_ENTRIES, StrengthJournalDTO } from "../dto/StrengthJournal.dto";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';


export const getAllStrengthJournals = async (): Promise<StrengthJournalDTO[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "strength-journals"));
        const journals: StrengthJournalDTO[] = [];
        querySnapshot.forEach((doc) => {
            journals.push(doc.data() as StrengthJournalDTO);
        });
        return journals;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
}

export const getUserStrengthJournals = async (username: string): Promise<StrengthJournalDTO[]> => {
    return MOCK_JOURNAL_ENTRIES
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

export const deleteStrengthJournal = async (id: string): Promise<StrengthJournalDTO> => {
    return MOCK_JOURNAL_ENTRIES[0]
}

