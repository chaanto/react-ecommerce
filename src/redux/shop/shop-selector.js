import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    figure: 1,
    game: 2,
    supplies: 3,
    yugioh: 4,
    pokemon: 5,
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectListtCollections = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    );