import { db } from './firebase';
// User API

export const doCreateUser = (id, username, email, phone) =>
    db.collection("users").add({
        username,
        email,
        phone,
        role:'user'
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


export const onceGetUsers = () =>
    db.collection("users").get();

export const getRoutes = (from, to) =>
    db.collection("routes").where("from", "==", from).where("to", "==", to).get();

export const getUserById = (uid) =>
    db.collection("users").doc(uid).get();

export const doCreateTv = (id, name, img, description) =>
    db.collection("television").add({
        name,
        img,
        description
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


export const onceGetTv = () =>
    db.collection("television").get();

export const getTv = (name) =>
    db.collection("television").where("name", "==", name).get();

export const getTvById = (uid) =>
    db.collection("television").doc(uid).get();