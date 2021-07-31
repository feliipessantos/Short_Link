import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinkSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

export async function saveLink(key, newLink){
    let linkStored = await getLinkSave(key);

    const hasLink = linkStored.some(Link => Link.id === newLink.id);
    if(hasLink){
        return;
    }
    linkStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linkStored))
}

export async function deleteLink(Links, id){
    let myLinks = Links.filter((item) => {
        return(item.id !== id)
    })

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));
    return myLinks;
}