export const signUp = async (email, password) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};