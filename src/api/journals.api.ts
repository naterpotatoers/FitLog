import { StrengthJournalDTO } from "../dto/StrengthJournal.dto";
import { doc, collection, addDoc, getDocs, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";
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
        const querySnapshot = await getDocs(query(collection(db, "strength-journals"), orderBy("created_at", "desc")));
        const journals: StrengthJournalDTO[] = [];
        querySnapshot.forEach((doc) => {
            let journal = doc.data() as StrengthJournalDTO;
            journal.id = doc.id;
            if (journal.email === auth.currentUser?.email) {
                journals.push(journal);
            }
        });
        console.log(journals)
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
    try {
        journal.updated_at = new Date().toISOString()
        const result = await updateDoc(doc(db, "strength-journals", journal.id), journal);
        console.log("Document", journal.id, "successfully updated!", result);
        return journal;
    } catch (error) {
        console.error("Error updating document: ", error);
        return journal;
    }
}

export const deleteStrengthJournal = async (id: string) => {
    try {
        const result = await deleteDoc(doc(db, "strength-journals", id));
        console.log(`Document ${id} successfully deleted!`, result);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

