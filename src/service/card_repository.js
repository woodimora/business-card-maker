import {getDatabase, ref, set, remove, onValue, off} from "firebase/database";

class CardRepository {
    syncCards(userId, onUpdate) {
        const db = getDatabase();
        const query = ref(db, `${userId}/cards`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => off(query);
    }

    saveCard(userId, card) {
        const db = getDatabase();
        set(ref(db, `${userId}/cards/${card.id}`), card);
    }

    removeCard(userId, card) {
        const db = getDatabase();
        const cardRef = ref(db, `${userId}/cards/${card.id}`);
        remove(cardRef);
    }
}

export default CardRepository;