export const recupData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Une erreur est survenue : ', error);
        return [];
    }
}