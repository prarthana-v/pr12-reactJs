import { app } from "../../fireconfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  writeBatch,
} from "firebase/firestore";
const db = getFirestore(app);

export const Add_User = (data) => {
  // console.log(data);
  alert("Note Added...!!!");
  return async (dispatch) => {
    await addDoc(collection(db, "Notes"), {
      ...data,
    });
    try {
      dispatch({
        type: "add",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const View_User = () => {
  return async (dispatch) => {
    let data = collection(db, "Notes");
    let record = await getDocs(data);
    // console.log(record);
    let notes = record.docs.map((val) => ({
      id: val.id,
      ...val.data(),
    }));
    try {
      dispatch({
        type: "view",
        payload: notes,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Delete_User = (id) => {
  return async (dispatch) => {
    try {
      let data = doc(db, "Notes", id);
      await deleteDoc(data);
      // console.log(data);
      dispatch({
        type: "delete",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Multiple_delete = () => {
  return async (dispatch) => {
    try {
      // batch intance
      const batch = writeBatch(db);

      // retrrive all the documents from "Notes"
      let data = await getDocs(collection(db, "Notes"));

      // Add delete operations for each document to the batch
      data.docs.map((document) => {
        batch.delete(doc(db, "Notes", document.id));
      });

      // commit the batch
      await batch.commit();
      alert("Docs deletes from database");

      //fetch updated data
      let updatedData = await getDocs(collection(db, "Notes"));
      let notes = updatedData.docs.map((val) => ({
        id: val.id,
        ...val.data(),
      }));

      dispatch({
        type: "multiple_delete",
        payload: notes,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
