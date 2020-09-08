import firebase from "../config/fbConfig";

export const getAbout = async (dispatch) => {
  const AboutArray = [];
  const AboutArraySnapshot = await firebase
    .firestore()
    .collection("About")
    .get();

  AboutArraySnapshot.docs.map((doc) => {
    console.log(doc);
    AboutArray.push({
      id: doc.id,
      ...doc.data(),
    });

    return null;
  });

  dispatch({ type: "FETCH_ABOUT", about: AboutArray });
};
