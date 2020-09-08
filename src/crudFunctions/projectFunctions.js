import firebase from "../config/fbConfig";

export const getProject = async (dispatch) => {
  const ProjectArray = [];
  const ProjectArraySnapshot = await firebase
    .firestore()
    .collection("Projects")
    .get();

  ProjectArraySnapshot.docs.map((doc) => {
    ProjectArray.push({
      id: doc.id,
      ...doc.data(),
    });

    return null;
  });

  console.log(ProjectArray);

  dispatch({ type: "FETCH_PROJECT", project: ProjectArray });
};
